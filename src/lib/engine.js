import { googleSignIn, googleSignOut, saveMistake, watchMistakes, watchUser } from "../firebase.js";
import { t } from "../copy.js";
import {
  DATA,
  STORAGE_KEY,
  byId,
  defaultProgress,
  findAny,
  formatDrillTime,
  hash,
  cangjieCodes,
  head,
  L,
  loadProgress,
  pickedAt,
  playAnswerSound,
  poemDrillLines,
  shuffle,
  speak,
  todayStr
} from "./helpers.js";

export function createEngine(bump) {
  const progress = loadProgress();
  const state = {
    view: "home",
    flipped: false,
    topic: "all",
    vocabIndex: 0,
    idiomIndex: 0,
    idiomGroup: "all",
    cultureIndex: 0,
    poetryIndex: 0,
    session: null,
    quiz: null,
    fix: null,
    readingId: DATA.readings[0].id,
    reading: JSON.parse(JSON.stringify(progress.readings || {})),
    grammarPicks: {},
    culturePicks: {},
    poetryPicks: {},
    settingsOpen: false,
    idiomPractice: null,
    idiomDrill: null,
    poetryDrill: null,
    authUser: null,
    mistakes: [],
    authError: "",
    now: Date.now()
  };
  let mistakeUnsub = null;
  let drillTimer = null;

  function render() {
    bump();
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (err) {
      /* Progress stays in memory for this visit. */
    }
  }

  function codeMode() {
    return progress.codeMode === "jyutping" ? "jyutping" : "cangjie";
  }

  function multiColor() {
    return progress.cangjieColor !== "single";
  }

  function filteredVocab() {
    if (state.topic === "all") return DATA.vocab;
    return DATA.vocab.filter((item) => item.topic === state.topic);
  }

  function filteredIdioms() {
    if (!state.idiomGroup || state.idiomGroup === "all") return DATA.idioms;
    return DATA.idioms.filter((item) => item.group === state.idiomGroup);
  }

  function statusOf(id) {
    const rec = progress.seen[id];
    if (!rec || !(rec.correct + rec.wrong)) return "new";
    if (rec.correct >= 2 && rec.correct > rec.wrong) return "got";
    return "learning";
  }

  function priority(id) {
    const rec = progress.seen[id];
    if (!rec || !(rec.correct + rec.wrong)) return 80 + (hash(id) % 10);
    const total = rec.correct + rec.wrong;
    const acc = rec.correct / total;
    const hours = (Date.now() - rec.last) / 36e5;
    let score = (1 - acc) * 100 + rec.wrong * 5;
    if (rec.wrong > rec.correct) score += 30;
    if (hours < 8 && acc >= 0.5) score -= 50;
    else if (hours > 48) score += 20;
    if (hours > 168) score += 30;
    return score;
  }

  function deck() {
    return [...DATA.vocab, ...DATA.idioms];
  }

  function dueItems(n) {
    return deck()
      .map((item) => ({ item, score: priority(item.id) }))
      .sort((a, b) => b.score - a.score || (a.item.id < b.item.id ? -1 : 1))
      .slice(0, n)
      .map((row) => row.item);
  }

  function touchStreak() {
    const today = todayStr();
    if (progress.lastDate === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    progress.streak = progress.lastDate === todayStr(yesterday) ? (progress.streak || 0) + 1 : 1;
    progress.lastDate = today;
  }

  function record(id, ok) {
    playAnswerSound(Boolean(ok));
    const rec = progress.seen[id] || { correct: 0, wrong: 0, last: 0 };
    if (ok) rec.correct += 1;
    else rec.wrong += 1;
    rec.last = Date.now();
    progress.seen[id] = rec;
    touchStreak();
    save();
  }

  function clearDrillTick() {
    if (drillTimer) {
      window.clearInterval(drillTimer);
      drillTimer = null;
    }
  }

  function startDrillTick() {
    clearDrillTick();
    drillTimer = window.setInterval(() => {
      state.now = Date.now();
      render();
    }, 200);
  }

  function activeDrill() {
    return state.poetryDrill || state.idiomDrill || null;
  }

  function drillElapsed() {
    const drill = activeDrill();
    if (!drill) return 0;
    if (drill.running) return drill.baseMs + (Date.now() - drill.startedAt);
    return drill.baseMs;
  }

  async function pushMistake(uid, mistake) {
    try {
      await saveMistake(uid, mistake);
      return true;
    } catch (err) {
      return false;
    }
  }

  function queueMistake(mistake) {
    progress.pendingMistakes = progress.pendingMistakes || [];
    progress.pendingMistakes.push(mistake);
    save();
  }

  function saveIdiomMistake(id, source, pickedText) {
    const item = byId(DATA.idioms, id);
    if (!item || (source !== "practice" && source !== "test")) return;
    const mistake = { id: item.id, text: head(item), gloss: item.glossT || "", source };
    if (pickedText) mistake.picked = pickedText;
    if (!state.authUser) {
      queueMistake(mistake);
      return;
    }
    pushMistake(state.authUser.uid, mistake).then((ok) => {
      if (!ok) queueMistake(mistake);
    });
  }

  async function flushPending(uid) {
    const pending = progress.pendingMistakes || [];
    if (!pending.length) return;
    progress.pendingMistakes = [];
    save();
    const failed = [];
    for (const mistake of pending) {
      const ok = await pushMistake(uid, mistake);
      if (!ok) failed.push(mistake);
    }
    if (failed.length) {
      progress.pendingMistakes = failed.concat(progress.pendingMistakes || []);
      save();
      state.authError = "部分錯題暫時未能上傳。";
      if (state.view === "home") render();
    }
  }

  function clampIndexes() {
    const vocab = filteredVocab();
    if (vocab.length) state.vocabIndex = Math.min(Math.max(state.vocabIndex, 0), vocab.length - 1);
    const idioms = filteredIdioms();
    state.idiomIndex = idioms.length ? Math.min(Math.max(state.idiomIndex, 0), idioms.length - 1) : 0;
    state.cultureIndex = Math.min(Math.max(state.cultureIndex, 0), DATA.culture.length - 1);
    state.poetryIndex = Math.min(Math.max(state.poetryIndex, 0), DATA.poems.length - 1);
  }

  function go(view) {
    window.speechSynthesis?.cancel();
    const prev = state.view;
    state.view = view;
    state.flipped = false;
    state.settingsOpen = false;
    if (view !== "idiom") {
      state.idiomPractice = null;
      state.idiomDrill = null;
    }
    if (view !== "poetry") state.poetryDrill = null;
    clearDrillTick();
    if (view === "quiz" && !state.quiz) state.quiz = makeQuiz();
    if (view === "fix" && !state.fix) initFix();
    clampIndexes();
    render();
    if (view !== "home" && prev === "home") history.pushState({ cr: true }, "");
    else if (view === "home" && history.state?.cr) history.replaceState(null, "");
  }

  function listForView() {
    if (state.view === "vocab") return filteredVocab();
    if (state.view === "idiom") return filteredIdioms();
    if (state.view === "culture") return DATA.culture;
    if (state.view === "poetry") return DATA.poems;
    return [];
  }

  function indexKey() {
    if (state.view === "vocab") return "vocabIndex";
    if (state.view === "idiom") return "idiomIndex";
    if (state.view === "culture") return "cultureIndex";
    if (state.view === "poetry") return "poetryIndex";
    return null;
  }

  function advanceIndex(delta) {
    const key = indexKey();
    const list = listForView();
    if (!key || !list.length) return false;
    const before = state[key] || 0;
    const next = Math.min(Math.max(before + delta, 0), list.length - 1);
    state[key] = next;
    return next !== before;
  }

  function step(delta) {
    if (state.view === "idiom" && (state.idiomPractice || state.idiomDrill)) return;
    if (state.view === "poetry" && state.poetryDrill) return;
    const key = indexKey();
    const before = state[key] || 0;
    if (!advanceIndex(delta)) {
      if (state.view === "idiom" && delta > 0 && before >= filteredIdioms().length - 1) startIdiomPractice();
      return;
    }
    state.flipped = false;
    render();
  }

  function currentCard() {
    if (state.view === "session" && state.session?.phase === "card") return state.session.queue[state.session.index] || null;
    if (state.view === "vocab") return filteredVocab()[state.vocabIndex] || null;
    if (state.view === "idiom" && !state.idiomPractice && !state.idiomDrill) return filteredIdioms()[state.idiomIndex] || null;
    if (state.view === "culture") return DATA.culture[state.cultureIndex] || null;
    if (state.view === "poetry" && !state.poetryDrill) return DATA.poems[state.poetryIndex] || null;
    return null;
  }

  function flip() {
    if (!currentCard() || currentCard().linesT) return;
    state.flipped = !state.flipped;
    render();
  }

  function makeIdiomPractice(count = 10) {
    const pool = filteredIdioms();
    if (pool.length < 4) return null;
    const selected = shuffle(pool).slice(0, Math.min(count, pool.length));
    return {
      items: selected.map((item) => ({
        id: item.id,
        answerId: item.id,
        optionIds: shuffle([
          item.id,
          ...shuffle(pool.filter((other) => other.id !== item.id)).slice(0, 3).map((other) => other.id)
        ])
      })),
      index: 0,
      picked: null,
      score: 0,
      done: false,
      answers: []
    };
  }

  function startIdiomPractice() {
    const practice = makeIdiomPractice(10);
    if (!practice) return;
    state.idiomDrill = null;
    clearDrillTick();
    state.idiomPractice = practice;
    state.view = "idiom";
    state.flipped = false;
    state.settingsOpen = false;
    render();
  }

  function pickPractice(choice) {
    const practice = state.idiomPractice;
    if (!practice || practice.done || practice.picked != null) return;
    const q = practice.items[practice.index];
    practice.picked = choice;
    practice.answers[practice.index] = choice;
    const options = q.optionIds.map((id) => ({ ok: id === q.answerId }));
    const ok = Boolean(options[choice]?.ok);
    if (ok) practice.score += 1;
    else saveIdiomMistake(q.id, "practice", head(byId(DATA.idioms, q.optionIds[choice])));
    record(q.id, ok);
    render();
  }

  function nextPractice() {
    const practice = state.idiomPractice;
    if (!practice || practice.picked == null) return;
    if (practice.index + 1 >= practice.items.length) {
      practice.done = true;
      touchStreak();
      save();
    } else {
      practice.index += 1;
      practice.picked = null;
    }
    render();
  }

  function makeIdiomDrill() {
    const items = shuffle([...DATA.idioms]);
    if (!items.length) return null;
    return { items, index: 0, baseMs: 0, startedAt: 0, running: false, begun: false, done: false, marked: {} };
  }

  function startIdiomDrill() {
    const drill = makeIdiomDrill();
    if (!drill) return;
    clearDrillTick();
    state.idiomPractice = null;
    state.idiomDrill = drill;
    state.view = "idiom";
    state.flipped = false;
    state.settingsOpen = false;
    render();
  }

  function beginIdiomDrill() {
    const drill = state.idiomDrill;
    if (!drill || drill.done || drill.begun) return;
    drill.begun = true;
    drill.baseMs = 0;
    drill.startedAt = Date.now();
    drill.running = true;
    startDrillTick();
    render();
  }

  function stepIdiomDrill(delta = 1) {
    const drill = state.idiomDrill;
    if (!drill || drill.done || !drill.begun) return;
    if (delta > 0 && drill.index + 1 >= drill.items.length) {
      if (drill.running) {
        drill.baseMs += Date.now() - drill.startedAt;
        drill.running = false;
      }
      drill.done = true;
      clearDrillTick();
      render();
      return;
    }
    if (delta < 0 && drill.index <= 0) return;
    drill.index += delta;
    render();
  }

  function markIdiomDrillWrong() {
    const drill = state.idiomDrill;
    if (!drill || drill.done || !drill.begun) return;
    const item = drill.items[drill.index];
    if (!item || drill.marked?.[item.id]) return;
    drill.marked = drill.marked || {};
    drill.marked[item.id] = true;
    saveIdiomMistake(item.id, "test");
    render();
  }

  function makePoetryDrill() {
    const items = shuffle([...(DATA.poems || [])]);
    if (!items.length) return null;
    const hints = {};
    for (const item of items) {
      const lines = poemDrillLines(item);
      hints[item.id] = lines.length > 1 && Math.random() < 0.5 ? 1 : 0;
    }
    return { items, hints, index: 0, baseMs: 0, startedAt: 0, running: false, begun: false, done: false };
  }

  function startPoetryDrill() {
    const drill = makePoetryDrill();
    if (!drill) return;
    clearDrillTick();
    state.idiomPractice = null;
    state.idiomDrill = null;
    state.poetryDrill = drill;
    state.view = "poetry";
    state.flipped = false;
    state.settingsOpen = false;
    render();
  }

  function beginPoetryDrill() {
    const drill = state.poetryDrill;
    if (!drill || drill.done || drill.begun) return;
    drill.begun = true;
    drill.baseMs = 0;
    drill.startedAt = Date.now();
    drill.running = true;
    startDrillTick();
    render();
  }

  function stepPoetryDrill(delta = 1) {
    const drill = state.poetryDrill;
    if (!drill || drill.done || !drill.begun) return;
    if (delta > 0 && drill.index + 1 >= drill.items.length) {
      if (drill.running) {
        drill.baseMs += Date.now() - drill.startedAt;
        drill.running = false;
      }
      drill.done = true;
      clearDrillTick();
      render();
      return;
    }
    if (delta < 0 && drill.index <= 0) return;
    drill.index += delta;
    render();
  }

  function toggleDrillTimer() {
    const drill = activeDrill();
    if (!drill || drill.done || !drill.begun) return;
    if (drill.running) {
      drill.baseMs += Date.now() - drill.startedAt;
      drill.running = false;
      clearDrillTick();
    } else {
      drill.startedAt = Date.now();
      drill.running = true;
      startDrillTick();
    }
    render();
  }

  function makeQuiz() {
    const vocabQs = shuffle(DATA.vocab).slice(0, 4).map((item) => ({
      type: "vocab",
      id: item.id,
      answerId: item.id,
      optionIds: shuffle([item.id, ...shuffle(DATA.vocab.filter((other) => other.id !== item.id)).slice(0, 3).map((other) => other.id)])
    }));
    const idiomQs = shuffle(DATA.idioms).slice(0, 2).map((item) => ({
      type: "idiom",
      id: item.id,
      answerId: item.id,
      optionIds: shuffle([item.id, ...shuffle(DATA.idioms.filter((other) => other.id !== item.id)).slice(0, 3).map((other) => other.id)])
    }));
    const grammarQs = shuffle(DATA.grammar).slice(0, 2).map((item) => ({
      type: "grammar",
      id: item.id,
      order: shuffle(item.options.map((_, index) => index))
    }));
    const fixQs = shuffle(DATA.fixes).slice(0, 2).map((item) => ({
      type: "fix",
      id: item.id,
      order: shuffle(item.options.map((_, index) => index))
    }));
    return {
      items: shuffle([...vocabQs, ...idiomQs, ...grammarQs, ...fixQs]),
      index: 0,
      picked: null,
      score: 0,
      done: false,
      committed: false,
      answers: []
    };
  }

  function quizOptions(q) {
    if (q.type === "vocab") {
      return q.optionIds.map((id) => ({ text: byId(DATA.vocab, id).en, ok: id === q.answerId }));
    }
    if (q.type === "idiom") {
      return q.optionIds.map((id) => {
        const item = byId(DATA.idioms, id);
        const phonetic = codeMode() === "jyutping" ? (item.pinyin || "") : cangjieCodes(head(item)).join(" ");
        return { text: `${head(item)}　${phonetic}`, ok: id === q.answerId };
      });
    }
    if (q.type === "grammar") {
      const item = byId(DATA.grammar, q.id);
      return q.order.map((index) => ({ text: head(item.options[index]), ok: item.options[index].ok }));
    }
    const item = byId(DATA.fixes, q.id);
    return q.order.map((index) => ({ text: head(item.options[index]), ok: item.options[index].ok }));
  }

  function questionCorrect(q, picked) {
    if (picked == null) return false;
    return Boolean(quizOptions(q)[picked]?.ok);
  }

  function pickQuiz(choice) {
    const quiz = state.quiz;
    if (!quiz || quiz.done || quiz.picked != null) return;
    const question = quiz.items[quiz.index];
    quiz.picked = choice;
    quiz.answers[quiz.index] = choice;
    const ok = questionCorrect(question, choice);
    if (ok) quiz.score += 1;
    else if (question.type === "idiom") {
      const pickedItem = byId(DATA.idioms, question.optionIds[choice]);
      saveIdiomMistake(question.id, "test", pickedItem ? head(pickedItem) : "");
    }
    record(question.id, ok);
    render();
  }

  function nextQuiz() {
    const quiz = state.quiz;
    if (!quiz || quiz.picked == null) return;
    if (quiz.index + 1 >= quiz.items.length) {
      quiz.done = true;
      if (!quiz.committed) {
        quiz.committed = true;
        progress.quizzes.unshift({ date: todayStr(), score: quiz.score, total: quiz.items.length });
        progress.quizzes = progress.quizzes.slice(0, 8);
        touchStreak();
        save();
      }
    } else {
      quiz.index += 1;
      quiz.picked = null;
    }
    render();
  }

  function initFix() {
    const order = shuffle(DATA.fixes.map((item) => item.id));
    const optionOrder = {};
    for (const id of order) optionOrder[id] = shuffle(byId(DATA.fixes, id).options.map((_, index) => index));
    state.fix = { order, optionOrder, index: 0, picked: null, score: 0, done: false };
  }

  function newSession(ids) {
    const queue = ids ? ids.map((id) => deck().find((item) => item.id === id)).filter(Boolean) : dueItems(10);
    return { queue, index: 0, results: [], phase: queue.length ? "card" : "summary" };
  }

  function onKey(event) {
    const tag = document.activeElement?.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
    if (state.view === "idiom" && state.idiomPractice && !state.idiomPractice.done) {
      if (event.key === "Enter" && tag !== "BUTTON" && state.idiomPractice.picked != null) {
        event.preventDefault();
        nextPractice();
      }
      return;
    }
    if (state.view === "idiom" && state.idiomDrill && !state.idiomDrill.done) {
      if (!state.idiomDrill.begun) {
        if ((event.key === "Enter" || event.code === "Space") && tag !== "BUTTON") {
          event.preventDefault();
          beginIdiomDrill();
        }
        return;
      }
      if ((event.code === "Space" || event.key === "Enter") && tag !== "BUTTON") {
        event.preventDefault();
        stepIdiomDrill(1);
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        stepIdiomDrill(1);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        stepIdiomDrill(-1);
      }
      return;
    }
    if (state.view === "poetry" && state.poetryDrill && !state.poetryDrill.done) {
      if (!state.poetryDrill.begun) {
        if ((event.key === "Enter" || event.code === "Space") && tag !== "BUTTON") {
          event.preventDefault();
          beginPoetryDrill();
        }
        return;
      }
      if ((event.code === "Space" || event.key === "Enter") && tag !== "BUTTON") {
        event.preventDefault();
        stepPoetryDrill(1);
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        stepPoetryDrill(1);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        stepPoetryDrill(-1);
      }
      return;
    }
    const deckViews = new Set(["vocab", "idiom", "culture", "poetry"]);
    if ((event.key === "ArrowRight" || event.key === "ArrowDown") && deckViews.has(state.view)) {
      event.preventDefault();
      step(1);
      return;
    }
    if ((event.key === "ArrowLeft" || event.key === "ArrowUp") && deckViews.has(state.view)) {
      event.preventDefault();
      step(-1);
      return;
    }
    if (state.view === "poetry") return;
    if (event.code === "Space" && tag !== "BUTTON" && currentCard() && !currentCard().linesT) {
      event.preventDefault();
      flip();
    }
  }

  function mount() {
    const onKeyDown = (event) => onKey(event);
    const onPopState = () => {
      if (state.view !== "home") go("home");
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("popstate", onPopState);
    window.speechSynthesis?.getVoices();
    const offAuth = watchUser((user) => {
      const nextUid = user ? user.uid : "";
      if (nextUid && nextUid === state.authUser?.uid && mistakeUnsub) {
        const photoURL = user.photoURL || "";
        if (photoURL !== (state.authUser.photoURL || "")) {
          state.authUser.photoURL = photoURL;
          render();
        }
        return;
      }
      if (!nextUid && !state.authUser && !mistakeUnsub) return;
      if (mistakeUnsub) {
        mistakeUnsub();
        mistakeUnsub = null;
      }
      state.authUser = user
        ? { uid: user.uid, displayName: user.displayName || "", email: user.email || "", photoURL: user.photoURL || "" }
        : null;
      state.mistakes = [];
      if (user) {
        flushPending(user.uid);
        mistakeUnsub = watchMistakes(user.uid, (rows) => {
          if (!rows) state.authError = "未能讀取錯題。請在 Firebase 發布 Firestore 規則。";
          else state.mistakes = rows;
          if (state.view === "home") render();
        });
      }
      render();
    });
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("popstate", onPopState);
      clearDrillTick();
      offAuth();
      if (mistakeUnsub) mistakeUnsub();
    };
  }

  return {
    state,
    progress,
    data: DATA,
    render,
    mount,
    go,
    step,
    flip,
    speak,
    codeMode,
    multiColor,
    filteredVocab,
    filteredIdioms,
    statusOf,
    currentCard,
    drillElapsed,
    formatDrillTime,
    quizOptions,
    questionCorrect,
    findAny,
    L,
    head,
    byId,
    pickedAt,
    startIdiomPractice,
    pickPractice,
    nextPractice,
    exitPractice() {
      state.idiomPractice = null;
      go("home");
    },
    startIdiomDrill,
    beginIdiomDrill,
    stepIdiomDrill,
    markIdiomDrillWrong,
    exitIdiomDrill() {
      state.idiomDrill = null;
      clearDrillTick();
      go("home");
    },
    startPoetryDrill,
    beginPoetryDrill,
    stepPoetryDrill,
    exitPoetryDrill() {
      state.poetryDrill = null;
      clearDrillTick();
      go("home");
    },
    toggleDrillTimer,
    setTopic(topic) {
      state.topic = topic;
      state.vocabIndex = 0;
      state.flipped = false;
      render();
    },
    jump(kind, index) {
      state.flipped = false;
      if (kind === "vocab") state.vocabIndex = index;
      else if (kind === "idiom") state.idiomIndex = index;
      else if (kind === "culture") state.cultureIndex = index;
      else state.poetryIndex = index;
      render();
    },
    pickKnow(kind, id, choice) {
      if (state[kind][id] != null) return;
      state[kind][id] = choice;
      const item = kind === "poetryPicks" ? byId(DATA.poems, id) : byId(DATA.culture, id);
      record(id, Boolean(item.options[choice].ok));
      render();
    },
    openWord(id) {
      state.flipped = false;
      const vocab = byId(DATA.vocab, id);
      if (vocab) {
        state.view = "vocab";
        state.topic = "all";
        state.vocabIndex = DATA.vocab.findIndex((item) => item.id === vocab.id);
      } else {
        const idx = DATA.idioms.findIndex((item) => item.id === id);
        state.view = "idiom";
        state.idiomGroup = "all";
        state.idiomPractice = null;
        state.idiomDrill = null;
        state.idiomIndex = Math.max(0, idx);
      }
      clearDrillTick();
      render();
    },
    pickGrammar(id, choice) {
      if (state.grammarPicks[id] != null) return;
      state.grammarPicks[id] = choice;
      const item = byId(DATA.grammar, id);
      record(id, Boolean(item.options[choice].ok));
      render();
    },
    pickFix(choice) {
      const fx = state.fix;
      if (!fx || fx.picked != null || fx.done) return;
      fx.picked = choice;
      const item = byId(DATA.fixes, fx.order[fx.index]);
      const ok = Boolean(item.options[fx.optionOrder[item.id][choice]].ok);
      if (ok) fx.score += 1;
      record(item.id, ok);
      render();
    },
    nextFix() {
      const fx = state.fix;
      if (!fx || fx.picked == null) return;
      if (fx.index + 1 >= fx.order.length) {
        fx.done = true;
        progress.fixBest = Math.max(progress.fixBest || 0, fx.score);
        progress.fixTotal = fx.order.length;
        save();
      } else {
        fx.index += 1;
        fx.picked = null;
      }
      render();
    },
    restartFix() {
      state.fix = null;
      initFix();
      render();
    },
    chooseReading(id) {
      state.readingId = id;
      render();
    },
    pickRead(readingId, qIndex, choice) {
      const bucket = state.reading[readingId] || { picks: {}, submitted: false, note: false };
      if (bucket.submitted) return;
      bucket.note = false;
      bucket.picks[qIndex] = choice;
      state.reading[readingId] = bucket;
      render();
    },
    submitRead(readingId) {
      const item = byId(DATA.readings, readingId);
      const bucket = state.reading[item.id] || { picks: {}, submitted: false, note: false };
      if (item.questions.some((_, index) => pickedAt(bucket.picks, index) == null)) {
        bucket.note = true;
        state.reading[item.id] = bucket;
        render();
        return;
      }
      bucket.submitted = true;
      bucket.note = false;
      bucket.score = item.questions.filter((question, index) => pickedAt(bucket.picks, index) === question.answer).length;
      playAnswerSound(bucket.score === item.questions.length);
      state.reading[item.id] = bucket;
      progress.readings[item.id] = { score: bucket.score, total: item.questions.length, picks: bucket.picks, submitted: true };
      touchStreak();
      save();
      render();
    },
    redoReading(id) {
      delete state.reading[id];
      delete progress.readings[id];
      save();
      render();
    },
    pickQuiz,
    nextQuiz,
    restartQuiz() {
      state.quiz = makeQuiz();
      go("quiz");
    },
    startSession() {
      if (!state.session || state.session.phase === "summary") state.session = newSession();
      go("session");
    },
    restartSession() {
      state.session = newSession();
      go("session");
    },
    redoMissed() {
      const ids = state.session.results.filter((item) => !item.ok).map((item) => item.id);
      state.session = newSession(ids);
      go("session");
    },
    grade(ok) {
      const card = currentCard();
      if (!card) return;
      record(card.id, ok);
      state.flipped = false;
      if (state.view === "session") {
        state.session.results.push({ id: card.id, ok });
        if (state.session.index + 1 >= state.session.queue.length) state.session.phase = "summary";
        else state.session.index += 1;
      } else {
        advanceIndex(1);
      }
      render();
    },
    toggleSettings() {
      state.settingsOpen = !state.settingsOpen;
      render();
    },
    setCodeMode(mode) {
      progress.codeMode = mode === "jyutping" ? "jyutping" : "cangjie";
      state.settingsOpen = true;
      save();
      render();
    },
    setCangjieColor(mode) {
      progress.cangjieColor = mode === "single" ? "single" : "multi";
      state.settingsOpen = true;
      save();
      render();
    },
    reset() {
      if (!window.confirm(t("confirmReset"))) return;
      const keptMode = progress.codeMode;
      const keptColor = progress.cangjieColor;
      const next = defaultProgress();
      next.codeMode = keptMode === "jyutping" ? "jyutping" : "cangjie";
      next.cangjieColor = keptColor === "single" ? "single" : "multi";
      Object.keys(progress).forEach((key) => delete progress[key]);
      Object.assign(progress, next);
      state.session = null;
      state.quiz = null;
      state.fix = null;
      state.reading = {};
      state.grammarPicks = {};
      state.culturePicks = {};
      state.poetryPicks = {};
      save();
      go("home");
    },
    async signIn() {
      state.authError = "";
      render();
      try {
        await googleSignIn();
      } catch (err) {
        const code = err && err.code;
        if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
        if (code === "auth/unauthorized-domain") state.authError = `請在 Firebase 的 Authorized domains 加入 ${location.hostname}。`;
        else if (code === "auth/operation-not-allowed") state.authError = "請先在 Firebase Authentication 啟用 Google 登入。";
        else state.authError = t("authFailed");
        render();
      }
    },
    signOut() {
      googleSignOut();
    }
  };
}
