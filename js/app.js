const DATA = globalThis.REVISION_DATA;
const STORAGE_KEY = "zhongwen-revision-v1";

const UI = {
  home: "首頁",
  vocab: "詞語",
  idiom: "成語",
  grammar: "語法",
  fix: "改錯",
  reading: "課文",
  culture: "文化常識",
  poetry: "詩詞",
  quiz: "小測",
  start: "開始十分鐘溫習",
  resume: "繼續溫習",
  restart: "重新開始",
  flipHint: "點一下揭曉",
  hide: "點一下翻回",
  again: "還未掌握",
  got: "已掌握",
  speak: "朗讀",
  speakEx: "讀例句",
  speakPoem: "朗讀全詩",
  prev: "上一個",
  next: "下一個",
  streak: "連續天數",
  mastered: "已掌握",
  learning: "學習中",
  fresh: "未學",
  accuracy: "答對率",
  suggest: "今日建議",
  brand: "中文",
  welcome: "中文溫習指南",
  heroLead: "按範疇溫習，從課文、成語、文化常識到詩詞，一步步鞏固。",
  sectionsTitle: "溫習範疇",
  sectionsHint: "選擇一個範疇開始學習；完成後也可以回到首頁再選其他部分。",
  enBrand: "Traditional Chinese · Cantonese",
  studyBrand: "中文溫習",
  saved: "進度只存在這部瀏覽器，不會上傳。",
  clear: "清除進度",
  summary: "這輪溫習",
  missed: "再練錯題",
  another: "再來十題",
  backHome: "首頁",
  check: "對答案",
  redo: "重做",
  needAll: "還有題目未選。",
  nextQ: "下一題",
  seeResult: "看結果",
  againQuiz: "再測一次",
  pass: "合格",
  retry: "再練",
  explain: "解釋",
  keys: "空白鍵揭曉 · ← → 上一個／下一個",
  all: "全部",
  lastQuiz: "最近小測",
  fixBest: "改錯最佳",
  spine: "中文溫習筆記",
  sessionLead: "十個最該重看的詞語和成語。先想意思，再揭曉。",
  noMiss: "這輪沒有錯題。",
  meaningQ: "是甚麼意思？",
  whichIdiom: "這段解釋說的是哪個成語？",
  practice: "成語練習",
  practiceLead: "根據解釋，選出正確的成語。每題四個選項。",
  startPractice: "開始練習",
  backIdiom: "離開",
  againPractice: "再練一次",
  practiceDone: "練習完成",
  drill: "測驗",
  drillLead: "找一張白紙，默寫成語",
  poetryDrillLead: "找一張白紙，默寫名句",
  startDrill: "開始測驗",
  againDrill: "再測一次",
  drillDone: "測驗完成",
  drillHint: "← → 上一則／下一則　·　空白鍵／Enter　下一則",
  startTimer: "開始計時",
  stopTimer: "停止計時",
  drillTime: "用時",
  backPoetry: "離開",
  chooseFix: "選出改好的句子",
  score: "得分",
  watch: "易錯",
  story: "故事",
  example: "例句",
  detail: "補充",
  yourTry: "試一題",
  vocabLead: "看字，回想讀音碼和意思。",
  settings: "設定",
  codeDisplay: "讀音顯示",
  idiomLead: "先想意思，再翻卡看解釋。",
  grammarLead: "看格式，再做一題搭配。",
  fixLead: "選出改好的句子。",
  readLead: "先讀完課文，再答題。",
  cultureLead: "溫習宋元至現代文學常識",
  poetryLead: "誦讀名句",
  quizLead: "十題混合練習，做完才看總分。",
  sectionsLead: "選一個範圍，或直接開始十分鐘。",
  confirmReset: "清除這部瀏覽器裡的溫習進度？",
  openReading: "閱讀課文",
  openVocab: "溫習詞語",
  openIdiom: "溫習成語",
  openCulture: "認識常識",
  openPoetry: "溫習詩詞",
  openQuiz: "小測"
};

let progress;
let state;

function t(key) {
  return UI[key] || key;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function head(obj) {
  if (!obj) return "";
  return obj.t || "";
}

const CANGJIE_RADICALS = {
  A: "日", B: "月", C: "金", D: "木", E: "水", F: "火", G: "土",
  H: "竹", I: "戈", J: "十", K: "大", L: "中", M: "一", N: "弓",
  O: "人", P: "心", Q: "手", R: "口", S: "尸", T: "廿", U: "山",
  V: "女", W: "田", X: "難", Y: "卜", Z: "重"
};

/* 五色拆碼：按取碼次序著色字根（第1碼深灰、第2碼橙、第3碼藍、第4碼綠、第5碼紫） */
const CANGJIE_POS_COLORS = ["#4a4a4a", "#ef7d10", "#0099ff", "#8cc63f", "#92278f"];
const FCJ_GLYPH_BASE = "https://www.xn--0vqu8au0tro7d.com/char2";

const CANGJIE_LETTER_COLORS = {
  A: "#c5362b",
  B: "#b45309",
  C: "#a16207",
  D: "#4d7c0f",
  E: "#0f766e",
  F: "#dc2626",
  G: "#78716c",
  H: "#1d4ed8",
  I: "#7c3aed",
  J: "#0f766e",
  K: "#b45309",
  L: "#334155",
  M: "#be123c",
  N: "#0369a1",
  O: "#c2410c",
  P: "#a21caf",
  Q: "#15803d",
  R: "#b91c1c",
  S: "#475569",
  T: "#047857",
  U: "#1e40af",
  V: "#9d174d",
  W: "#854d0e",
  X: "#6b21a8",
  Y: "#9a3412",
  Z: "#3f3f46"
};

function cangjieCodes(text) {
  const map = globalThis.CANGJIE_MAP || {};
  return [...String(text || "")]
    .map((ch) => map[ch])
    .filter(Boolean);
}

function cangjieOf(text) {
  return cangjieCodes(text).join(" ");
}

function codeMode() {
  return progress?.codeMode === "jyutping" ? "jyutping" : "cangjie";
}

function cangjieColorMode() {
  return progress?.cangjieColor === "multi" ? "multi" : "single";
}

function phoneticOf(item) {
  if (!item) return "";
  if (codeMode() === "jyutping") return item.pinyin || "";
  return cangjieOf(head(item));
}

function letterColor(letter) {
  return CANGJIE_LETTER_COLORS[String(letter || "").toUpperCase()] || "var(--clay)";
}

function posColor(index) {
  return CANGJIE_POS_COLORS[index % CANGJIE_POS_COLORS.length];
}

function codeColors(code) {
  const letters = [...String(code || "").toUpperCase()];
  if (!letters.length) return [];
  if (cangjieColorMode() !== "multi") return letters.map(() => "var(--clay)");
  return letters.map((_, index) => posColor(index));
}

function radicalOf(letter) {
  return CANGJIE_RADICALS[String(letter || "").toUpperCase()] || letter;
}

function renderCangjieColored(text) {
  const codes = cangjieCodes(text);
  if (!codes.length) return "";
  if (cangjieColorMode() !== "multi") return esc(codes.join(" "));
  return codes
    .map((code) => {
      const colors = codeColors(code);
      const letters = [...code]
        .map((letter, index) => `<span class="cj-letter" style="color:${colors[index]}">${esc(letter)}</span>`)
        .join("");
      return `<span class="cj-code">${letters}</span>`;
    })
    .join('<span class="cj-gap"> </span>');
}

function fiveColorGlyphUrl(ch) {
  const id = globalThis.FCJ_IDS?.[ch];
  return id ? `${FCJ_GLYPH_BASE}/${id}.png` : "";
}

function paintCangjieChars(root) {
  const nodes = [...(root || document).querySelectorAll("[data-cj-char]")];
  nodes.forEach((node) => {
    const ch = node.dataset.cjChar || "";
    const code = node.dataset.cjCode || "";
    const colors = codeColors(code);
    const five = cangjieColorMode() === "multi";
    if (!five || !ch) {
      node.textContent = ch;
      node.removeAttribute("style");
      return;
    }
    const url = fiveColorGlyphUrl(ch);
    if (!url) {
      node.textContent = ch;
      node.style.color = colors[0] || "var(--ink)";
      return;
    }
    node.removeAttribute("style");
    node.innerHTML = `<img class="cj-fcj" src="${esc(url)}" alt="${esc(ch)}" width="160" height="160" loading="lazy" decoding="async">`;
  });
}

function idiomCodeBlock(text) {
  const map = globalThis.CANGJIE_MAP || {};
  const chars = [...String(text || "")];
  if (!chars.length) return "";
  const five = cangjieColorMode() === "multi";
  return `
    <div class="idiom-board">
      <div class="idiom-row">
        ${chars.map((ch) => {
          const code = map[ch] || "";
          const letters = [...code.toUpperCase()];
          const colors = codeColors(code);
          return `
            <article class="cj-card${five ? " cj-five" : ""}">
              <div class="cj-char" data-cj-char="${esc(ch)}" data-cj-code="${esc(code)}">${esc(ch)}</div>
              <div class="cj-bar" aria-hidden="true">
                ${colors.map((color) => `<span style="background:${color}"></span>`).join("")}
              </div>
              <div class="cj-order" aria-label="取碼次序">
                ${letters.map((letter, index) => `
                  <div class="cj-key" style="color:${colors[index]}">
                    <span class="cj-radical">${esc(radicalOf(letter))}</span>
                    <span class="cj-letter">${esc(letter)}</span>
                  </div>
                `).join("")}
              </div>
            </article>
          `;
        }).join("")}
      </div>
      ${five ? `<p class="cj-legend quiet">五色取碼：第1碼深灰 · 第2碼橙 · 第3碼藍 · 第4碼綠 · 第5碼紫</p>` : ""}
    </div>
  `;
}

function codeLine(item) {
  if (codeMode() === "jyutping") {
    if (!item?.pinyin) return "";
    return `<p class="py"><span class="jyut">粵拼</span> ${esc(item.pinyin)}</p>`;
  }
  if (isIdiom(item)) return "";
  const colored = renderCangjieColored(head(item));
  if (!colored) return "";
  return `<p class="py ${cangjieColorMode() === "multi" ? "py-multi" : ""}"><span class="jyut">倉頡</span> ${colored}</p>`;
}

let settingsCloseTimer = null;
let settingsCloseFallback = null;

function clearSettingsAutoClose() {
  if (settingsCloseTimer) {
    window.clearTimeout(settingsCloseTimer);
    settingsCloseTimer = null;
  }
  if (settingsCloseFallback) {
    window.clearTimeout(settingsCloseFallback);
    settingsCloseFallback = null;
  }
}

function softCloseSettings() {
  if (!state.settingsOpen) return;
  const panel = document.querySelector(".settings-panel");
  const btn = document.querySelector(".settings-btn");
  clearSettingsAutoClose();
  if (!panel) {
    state.settingsOpen = false;
    return;
  }
  panel.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");
  const finish = () => {
    panel.removeEventListener("transitionend", onEnd);
    if (settingsCloseFallback) {
      window.clearTimeout(settingsCloseFallback);
      settingsCloseFallback = null;
    }
    state.settingsOpen = false;
  };
  const onEnd = (event) => {
    if (event.target !== panel || event.propertyName !== "opacity") return;
    finish();
  };
  panel.addEventListener("transitionend", onEnd);
  settingsCloseFallback = window.setTimeout(finish, 700);
}

function armSettingsAutoClose() {
  clearSettingsAutoClose();
  if (!state.settingsOpen) return;
  settingsCloseTimer = window.setTimeout(() => softCloseSettings(), 5000);
}

function settingsDock() {
  const mode = codeMode();
  const colorMode = cangjieColorMode();
  const open = Boolean(state.settingsOpen);
  return `
    <div class="settings-dock">
      <button type="button" class="btn ghost settings-btn" data-action="toggle-settings" aria-expanded="${open}">設定</button>
      <div class="settings-panel${open ? " open" : ""}">
        <p class="quiet">讀音顯示</p>
        <div class="chips">
          <button type="button" class="chip ${mode === "jyutping" ? "on" : ""}" data-action="code-mode" data-mode="jyutping">粵拼</button>
          <button type="button" class="chip ${mode === "cangjie" ? "on" : ""}" data-action="code-mode" data-mode="cangjie">倉頡</button>
        </div>
        ${mode === "cangjie" ? `
          <p class="quiet settings-sub">倉頡顏色</p>
          <div class="chips">
            <button type="button" class="chip ${colorMode === "single" ? "on" : ""}" data-action="cangjie-color" data-mode="single">單色</button>
            <button type="button" class="chip ${colorMode === "multi" ? "on" : ""}" data-action="cangjie-color" data-mode="multi">五色</button>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function L(obj, key) {
  if (!obj) return "";
  return obj[key + "T"] || "";
}

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function findAny(id) {
  return byId(DATA.vocab, id)
    || byId(DATA.idioms, id)
    || byId(DATA.grammar, id)
    || byId(DATA.fixes, id)
    || byId(DATA.culture, id)
    || byId(DATA.poems, id);
}

function todayStr(date = new Date()) {
  const z = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${z(date.getMonth() + 1)}-${z(date.getDate())}`;
}

function defaultProgress() {
  return {
    streak: 0,
    lastDate: "",
    seen: {},
    quizzes: [],
    readings: {},
    fixBest: 0,
    fixTotal: 0,
    codeMode: "cangjie",
    cangjieColor: "multi"
  };
}

function load() {
  const base = defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return base;
    const data = JSON.parse(raw);
    return {
      ...base,
      ...data,
      seen: data.seen || {},
      quizzes: data.quizzes || [],
      readings: data.readings || {}
    };
  } catch (err) {
    return base;
  }
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    /* Progress stays in memory for this visit. */
  }
}

function touchStreak() {
  const today = todayStr();
  if (progress.lastDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  progress.streak = progress.lastDate === todayStr(yesterday) ? (progress.streak || 0) + 1 : 1;
  progress.lastDate = today;
}

function hash(id) {
  let n = 0;
  for (const ch of id) n = (n + ch.charCodeAt(0) * 17) % 97;
  return n;
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

function tally() {
  const items = deck();
  let got = 0;
  let learning = 0;
  for (const item of items) {
    const status = statusOf(item.id);
    if (status === "got") got += 1;
    else if (status === "learning") learning += 1;
  }
  let correct = 0;
  let wrong = 0;
  for (const rec of Object.values(progress.seen)) {
    correct += rec.correct || 0;
    wrong += rec.wrong || 0;
  }
  const attempts = correct + wrong;
  return {
    got,
    learning,
    acc: attempts ? Math.round((correct / attempts) * 100) : null
  };
}

let answerAudioCtx = null;

function playAnswerSound(ok) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!answerAudioCtx) answerAudioCtx = new AudioCtx();
    const ctx = answerAudioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const now = ctx.currentTime;
    const gain = ctx.createGain();
    gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.0001, now);
    if (ok) {
      const freqs = [523.25, 659.25, 783.99];
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = freq;
        osc.connect(gain);
        const start = now + index * 0.08;
        osc.start(start);
        osc.stop(start + 0.16);
      });
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    } else {
      const freqs = [196, 165, 131];
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        osc.type = "triangle";
        osc.frequency.value = freq;
        osc.connect(gain);
        const start = now + index * 0.14;
        osc.start(start);
        osc.stop(start + 0.26);
      });
      gain.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62);
    }
  } catch (err) {
    /* Sound is optional. */
  }
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

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isIdiom(item) {
  return Boolean(item && item.glossT && item.pinyin && !item.linesT && !item.tipT && !item.topic);
}

function isCulture(item) {
  return Boolean(item && item.tipT && item.askT && !item.linesT);
}

function isPoem(item) {
  return Boolean(item && item.linesT);
}

function topicName(id) {
  const topic = DATA.topics.find((item) => item.id === id);
  return topic ? head(topic) : "";
}

function filteredVocab() {
  if (state.topic === "all") return DATA.vocab;
  return DATA.vocab.filter((item) => item.topic === state.topic);
}

function filteredIdioms() {
  if (!state.idiomGroup || state.idiomGroup === "all") return DATA.idioms;
  return DATA.idioms.filter((item) => item.group === state.idiomGroup);
}

function currentCard() {
  if (state.view === "session") {
    const session = state.session;
    if (!session || session.phase === "summary") return null;
    return session.queue[session.index] || null;
  }
  if (state.view === "vocab") return filteredVocab()[state.vocabIndex] || null;
  if (state.view === "idiom") return filteredIdioms()[state.idiomIndex] || null;
  if (state.view === "culture") return DATA.culture[state.cultureIndex] || null;
  if (state.view === "poetry") return DATA.poems[state.poetryIndex] || null;
  return null;
}

function tian(word) {
  const chars = [...word];
  const n = Math.min(Math.max(chars.length, 1), 4);
  return `<div class="tian tian-${n}">${chars.map((ch) => `<span>${esc(ch)}</span>`).join("")}</div>`;
}

function badge(id) {
  return `<span class="badge learning">${esc(t("learning"))}</span>`;
}

function cardFront(item) {
  let kicker = topicName(item.topic);
  if (isIdiom(item)) kicker = (DATA.idiomGroups && DATA.idiomGroups[item.group]) || t("idiom");
  if (isCulture(item)) kicker = item.tipT || t("culture");
  if (isPoem(item)) kicker = `${item.dynastyT} · ${item.authorT}`;
  return `
    <p class="kicker">${esc(kicker)}</p>
    ${isPoem(item)
      ? `<div class="verse poem-verse">${item.linesT.map((line) => esc(line)).join("<br>")}</div>`
      : tian(head(item))}
    <p class="hint">${esc(t("flipHint"))}</p>
  `;
}

function cardBack(item) {
  if (isPoem(item)) {
    return `
      <p class="meta-line">${esc(item.dynastyT)} · ${esc(item.authorT)} · 《${esc(head(item))}》</p>
      <div class="verse poem-verse">${item.linesT.map((line) => esc(line)).join("<br>")}</div>
      <p class="hint">${esc(t("hide"))}</p>
    `;
  }
  if (isCulture(item)) {
    return `
      <p class="pattern">${esc(head(item))}</p>
      ${codeLine(item)}
      <p>${esc(L(item, "gloss"))}</p>
      <p class="story"><b>${esc(t("detail"))}　</b>${esc(item.detailT)}</p>
      <p class="hint">${esc(t("hide"))}</p>
    `;
  }
  const example = `
    <h3>${esc(t("example"))}</h3>
    <p class="example">${esc(L(item, "ex"))}</p>
    ${item.exEn ? `<p class="exen en" lang="en">${esc(item.exEn)}</p>` : ""}
  `;
  if (isIdiom(item)) {
    return `
      ${codeMode() === "cangjie"
        ? idiomCodeBlock(head(item))
        : `<p class="pattern idiom-title">${esc(head(item))}</p>${codeLine(item)}`}
      ${item.en ? `<p class="meaning en" lang="en">${esc(item.en)}</p>` : ""}
      <p>${esc(L(item, "gloss"))}</p>
      ${item.trapT ? `<p class="trap"><b>${esc(t("watch"))}　</b>${esc(L(item, "trap"))}</p>` : ""}
      ${item.storyT ? `<p class="story"><b>${esc(t("story"))}　</b>${esc(L(item, "story"))}</p>` : ""}
      ${item.exT ? example : ""}
      <p class="hint">${esc(t("hide"))}</p>
    `;
  }
  return `
    <p class="pattern">${esc(head(item))}</p>
    ${codeLine(item)}
    <p class="meaning en" lang="en">${esc(item.en)}</p>
    ${example}
    <p class="hint">${esc(t("hide"))}</p>
  `;
}

function poemCardBody(item) {
  const verse = item.linesT.map((line) => String(line || "").trim()).join("");
  return `
    <p class="meta-line">${esc(item.dynastyT)} · ${esc(item.authorT)} · 《${esc(head(item))}》</p>
    <div class="verse poem-verse">${esc(verse)}</div>
  `;
}

function studyCard(item, index, total, showStep, options = {}) {
  const atStart = index <= 0;
  const atEnd = index >= total - 1;
  const noFlip = Boolean(options.noFlip) || isPoem(item);
  return `
    <section class="study-stage">
      <div class="meta">
        ${badge(item.id)}
        <p class="count">${index + 1} / ${total}</p>
      </div>
      <div class="bar" aria-hidden="true"><span style="width:${Math.round(((index + 1) / total) * 100)}%"></span></div>
      <div class="study-stage-scroll">
        ${noFlip
          ? `<div class="card-body poem-static">${isPoem(item) ? poemCardBody(item) : cardFront(item)}</div>`
          : `<div class="card-body" data-action="flip" role="button" tabindex="0" aria-pressed="${state.flipped}">
          ${state.flipped ? cardBack(item) : cardFront(item)}
        </div>`}
      </div>
    </section>
    <section class="study-controls">
      <div class="actions">
        ${showStep ? `<button type="button" class="btn ghost" data-action="prev" ${atStart ? "disabled" : ""}>${esc(t("prev"))}</button><button type="button" class="btn ghost" data-action="next" ${atEnd ? "disabled" : ""}>${esc(t("next"))}</button>` : ""}
        ${options.showPractice ? `<button type="button" class="btn hot" data-action="start-idiom-practice">${esc(t("startPractice"))}</button>` : ""}
        ${options.showDrill ? `<button type="button" class="btn ghost" data-action="${options.drillAction || "start-idiom-drill"}">${esc(t("startDrill"))}</button>` : ""}
        ${isPoem(item) ? "" : `<button type="button" class="btn ghost speak-end" data-action="speak" data-part="word">${esc(t("speak"))}</button>`}
      </div>
    </section>
  `;
}

function choiceButtons(options, picked, action, extra = "") {
  const revealed = picked != null && picked !== "";
  return options.map((option, index) => {
    const selected = Number(picked) === index;
    const cls = revealed ? (option.ok ? "right" : selected ? "wrong" : "dim") : "";
    return `<button type="button" class="choice ${cls}" data-action="${action}" data-choice="${index}" ${extra} ${revealed ? "disabled" : ""}>${esc(option.text)}</button>`;
  }).join("");
}

function newSession(ids) {
  const queue = ids
    ? ids.map((id) => deck().find((item) => item.id === id)).filter(Boolean)
    : dueItems(10);
  return { queue, index: 0, results: [], phase: queue.length ? "card" : "summary" };
}

function makeQuiz() {
  const vocabQs = shuffle(DATA.vocab).slice(0, 4).map((item) => ({
    type: "vocab",
    id: item.id,
    answerId: item.id,
    optionIds: shuffle([
      item.id,
      ...shuffle(DATA.vocab.filter((other) => other.id !== item.id)).slice(0, 3).map((other) => other.id)
    ])
  }));
  const idiomQs = shuffle(DATA.idioms).slice(0, 2).map((item) => ({
    type: "idiom",
    id: item.id,
    answerId: item.id,
    optionIds: shuffle([
      item.id,
      ...shuffle(DATA.idioms.filter((other) => other.id !== item.id)).slice(0, 3).map((other) => other.id)
    ])
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
    return q.optionIds.map((id) => {
      const item = byId(DATA.vocab, id);
      return { text: item.en, ok: id === q.answerId };
    });
  }
  if (q.type === "idiom") {
    return q.optionIds.map((id) => {
      const item = byId(DATA.idioms, id);
      return { text: `${head(item)}　${phoneticOf(item)}`, ok: id === q.answerId };
    });
  }
  if (q.type === "grammar") {
    const item = byId(DATA.grammar, q.id);
    return q.order.map((index) => {
      const option = item.options[index];
      return { text: head(option), ok: option.ok };
    });
  }
  const item = byId(DATA.fixes, q.id);
  return q.order.map((index) => {
    const option = item.options[index];
    return { text: head(option), ok: option.ok };
  });
}

function questionCorrect(q, picked) {
  if (picked == null) return false;
  return Boolean(quizOptions(q)[picked]?.ok);
}

function quizPrompt(q) {
  if (q.type === "vocab") return `「${head(byId(DATA.vocab, q.id))}」${t("meaningQ")}`;
  if (q.type === "grammar") return L(byId(DATA.grammar, q.id), "prompt");
  return "";
}

function quizPromptHtml(q) {
  if (q.type === "idiom") {
    const item = byId(DATA.idioms, q.id);
    return `<p class="ask">${esc(t("whichIdiom"))}</p><p class="gloss">${esc(L(item, "gloss"))}</p>`;
  }
  if (q.type === "fix") {
    const item = byId(DATA.fixes, q.id);
    return `<p class="ask">${esc(t("chooseFix"))}</p><p class="fault">${esc(L(item, "fault"))}</p>`;
  }
  return `<p class="ask">${esc(quizPrompt(q))}</p>`;
}

function quizWhy(q) {
  if (q.type === "vocab") {
    const item = byId(DATA.vocab, q.id);
    return `${head(item)}（${item.pinyin}）· ${item.en}。${L(item, "ex")}`;
  }
  if (q.type === "idiom") {
    const item = byId(DATA.idioms, q.id);
    return `${head(item)}：${L(item, "trap") || L(item, "gloss")}`;
  }
  if (q.type === "grammar") return L(byId(DATA.grammar, q.id), "why");
  return L(byId(DATA.fixes, q.id), "why");
}

function quizKind(q) {
  if (q.type === "vocab") return t("vocab");
  if (q.type === "idiom") return t("idiom");
  if (q.type === "grammar") return t("grammar");
  return t("fix");
}

function shortPrompt(q) {
  if (q.type === "vocab") return head(byId(DATA.vocab, q.id));
  if (q.type === "idiom") return head(byId(DATA.idioms, q.id));
  if (q.type === "grammar") return head(byId(DATA.grammar, q.id));
  return L(byId(DATA.fixes, q.id), "fault");
}

function shortAnswer(q) {
  if (q.type === "vocab") return byId(DATA.vocab, q.id).en;
  if (q.type === "idiom") return byId(DATA.idioms, q.id).en;
  if (q.type === "grammar") return head(byId(DATA.grammar, q.id).options.find((option) => option.ok));
  return head(byId(DATA.fixes, q.id).options.find((option) => option.ok));
}

function initFix() {
  const order = shuffle(DATA.fixes.map((item) => item.id));
  const optionOrder = {};
  for (const id of order) {
    const item = byId(DATA.fixes, id);
    optionOrder[id] = shuffle(item.options.map((_, index) => index));
  }
  state.fix = { order, optionOrder, index: 0, picked: null, score: 0, done: false };
}

function pickedAt(picks, index) {
  if (!picks) return undefined;
  if (picks[index] != null) return Number(picks[index]);
  if (picks[String(index)] != null) return Number(picks[String(index)]);
  return undefined;
}

function speak(text) {
  try {
    if (!text || !window.speechSynthesis) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-HK";
    utter.rate = 0.92;
    const voice = synth.getVoices().find((item) => /zh-HK|yue|Cantonese|Hong Kong/i.test(`${item.lang} ${item.name}`));
    if (voice) utter.voice = voice;
    window.setTimeout(() => synth.speak(utter), 60);
  } catch (err) {
    /* Reading aloud is optional. */
  }
}

function renderHome() {
  const cards = [
    {
      mark: "一",
      tone: "ink",
      title: t("reading"),
      blurb: `共 ${DATA.readings.length} 篇短文。先讀課文，再做理解題；也可先溫習相關詞語。`,
      actions: [
        ["nav", "reading", t("openReading")],
        ["nav", "vocab", t("openVocab")]
      ]
    },
    {
      mark: "二",
      tone: "pine",
      title: t("idiom"),
      blurb: `共 ${DATA.idioms.length} 則成語。先溫習解釋，再做練習或測驗鞏固。`,
      actions: [
        ["nav", "idiom", t("openIdiom")],
        ["start-idiom-practice", "idiom", t("practice")],
        ["start-idiom-drill", "idiom", t("drill")]
      ]
    },
    {
      mark: "三",
      tone: "clay",
      title: t("culture"),
      blurb: `共 ${DATA.culture.length} 則常識。涵蓋宋元明清至現代作家、名著與文學流派。`,
      actions: [["nav", "culture", t("openCulture")]]
    },
    {
      mark: "四",
      tone: "cinnabar",
      title: t("poetry"),
      blurb: `共 ${DATA.poems.length} 首詩。先誦讀名句，再做測驗鞏固。`,
      actions: [
        ["nav", "poetry", t("openPoetry")],
        ["start-poetry-drill", "poetry", t("drill")]
      ]
    }
  ];
  return `
    <div class="landing-wash" aria-hidden="true"></div>
    <header class="landing-top">
      <h1 class="landing-brand">${esc(t("brand"))}</h1>
      <span class="landing-rule" aria-hidden="true"></span>
    </header>
    <section class="gate" aria-label="${esc(t("brand"))}">
      ${cards.map((card) => `
        <article class="gate-card tone-${card.tone}">
          <span class="gate-mark" aria-hidden="true">${esc(card.mark)}</span>
          <h2 class="gate-title">${esc(card.title)}</h2>
          <p class="gate-blurb">${esc(card.blurb)}</p>
          <div class="gate-actions">
            ${card.actions.map((action, index) => `
              <button type="button" class="gate-btn ${index ? "alt" : ""}" data-action="${action[0]}" data-view="${action[1]}">${esc(action[2])}</button>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </section>
    <footer class="landing-foot">
      <p>${esc(t("saved"))}</p>
      <div class="landing-foot-tools">
        <button type="button" class="textlink" data-action="reset">${esc(t("clear"))}</button>
      </div>
    </footer>
  `;
}

function studyHead(title, lead, chipsHtml = "", extras = {}) {
  return `
    <header class="study-head${extras.bigTitle ? " study-head-hero" : ""}">
      <div class="study-title-row">
        <div class="study-title">
          <h2>${esc(title)}</h2>
          ${lead ? `<p class="quiet${extras.leadClass ? ` ${extras.leadClass}` : ""}">${esc(lead)}</p>` : ""}
        </div>
        ${extras.homeBtn ? `<button type="button" class="btn ghost" data-action="nav" data-view="home">${esc(t("backHome"))}</button>` : ""}
      </div>
      ${chipsHtml ? `<div class="chips">${chipsHtml}</div>` : ""}
    </header>
  `;
}

function studyStrip(list, index, action) {
  return `
    <div class="study-nav">
      <div class="strip" data-strip>
        ${list.map((word, i) => `<button type="button" class="${statusOf(word.id)} ${i === index ? "on" : ""}" data-action="${action}" data-index="${i}">${esc(head(word))}</button>`).join("")}
      </div>
    </div>
  `;
}

function renderVocab() {
  const list = filteredVocab();
  const item = list[state.vocabIndex];
  const topics = [{ id: "all", t: t("all"), s: t("all") }, ...DATA.topics];
  const chips = topics.map((topic) => `<button type="button" class="chip ${state.topic === topic.id ? "on" : ""}" data-action="topic" data-topic="${topic.id}">${esc(head(topic))}</button>`).join("");
  return `
    <div class="study-deck">
      ${studyHead(t("vocab"), t("vocabLead"), chips)}
      ${studyStrip(list, state.vocabIndex, "jump-vocab")}
      ${item ? studyCard(item, state.vocabIndex, list.length, true) : `<p class="quiet">${esc(t("fresh"))}</p>`}
    </div>
  `;
}

function makeIdiomPractice(count = 10) {
  const pool = filteredIdioms();
  if (pool.length < 4) return null;
  const n = Math.min(count, pool.length);
  const selected = shuffle(pool).slice(0, n);
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
    fontPx: null
  };
}

function measurePracticeFontPx(items) {
  const host = document.createElement("div");
  host.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;font-family:\"Noto Serif TC\",\"PMingLiU\",serif;font-weight:400;line-height:1.45;padding:0 20px;box-sizing:border-box;";
  const probe = document.createElement("p");
  probe.style.margin = "0";
  host.appendChild(probe);
  document.body.appendChild(host);
  const width = Math.max(240, (document.querySelector(".practice-stage > .practice-gloss")?.clientWidth)
    || (document.querySelector(".view")?.clientWidth - 36)
    || (window.innerWidth - 64));
  host.style.width = `${width}px`;
  const longest = items.reduce((best, q) => {
    const text = withDrillStop(L(byId(DATA.idioms, q.id), "gloss"));
    return text.length > best.length ? text : best;
  }, "");
  probe.textContent = longest;
  const maxPx = Math.min(34, Math.max(20, Math.floor(window.innerWidth * 0.038)));
  const minPx = 12;
  let size = maxPx;
  probe.style.fontSize = `${size}px`;
  while (size > minPx && probe.scrollWidth > host.clientWidth - 8) {
    size -= 1;
    probe.style.fontSize = `${size}px`;
  }
  host.remove();
  return size;
}

function idiomPracticeOptions(q) {
  return q.optionIds.map((id) => {
    const item = byId(DATA.idioms, id);
    return { text: head(item), ok: id === q.answerId };
  });
}

function renderIdiomPractice() {
  const practice = state.idiomPractice;
  if (!practice) return "";
  if (practice.done) {
    return `
      <div class="study-deck practice-deck">
        ${studyHead(t("practiceDone"), `${practice.score} / ${practice.items.length}`, "", { homeBtn: true, bigTitle: true })}
        <section class="practice-stage">
          <div class="practice-scroll">
            <ul class="recap">${practice.items.map((q, index) => {
              const item = byId(DATA.idioms, q.id);
              const picked = practice.answers?.[index];
              const ok = picked != null && idiomPracticeOptions(q)[picked]?.ok;
              return `<li class="${ok ? "ok" : "bad"}"><b>${esc(head(item))}</b><span>${esc(L(item, "gloss"))}</span></li>`;
            }).join("")}</ul>
          </div>
        </section>
        <section class="study-controls">
          <div class="actions">
            <button type="button" class="btn ghost" data-action="exit-idiom-practice">${esc(t("backIdiom"))}</button>
            <button type="button" class="btn hot speak-end" data-action="start-idiom-practice">${esc(t("againPractice"))}</button>
          </div>
        </section>
      </div>
    `;
  }
  const q = practice.items[practice.index];
  const item = byId(DATA.idioms, q.id);
  const options = idiomPracticeOptions(q);
  const pickedOpt = practice.picked != null ? options[practice.picked] : null;
  const wrongId = pickedOpt && !pickedOpt.ok ? q.optionIds[practice.picked] : null;
  const wrongItem = wrongId ? byId(DATA.idioms, wrongId) : null;
  return `
    <div class="study-deck practice-deck">
      ${studyHead(t("practice"), t("practiceLead"), "", { homeBtn: true, bigTitle: true })}
      <section class="practice-stage">
        <div class="meta">
          <span class="badge learning">${esc(t("learning"))}</span>
          <p class="count">${practice.index + 1} / ${practice.items.length}</p>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${Math.round(((practice.index + 1) / practice.items.length) * 100)}%"></span></div>
        <p class="practice-gloss"${practice.fontPx ? ` style="font-size:${practice.fontPx}px"` : ""}>${esc(withDrillStop(L(item, "gloss")))}</p>
        <div class="practice-choices">
          ${choiceButtons(options, practice.picked, "idiom-practice-choice")}
        </div>
        <div class="why practice-why${wrongItem ? "" : " empty"}" aria-live="polite">
          ${wrongItem ? `<b>${esc(head(wrongItem))}</b>　${esc(withDrillStop(L(wrongItem, "gloss")))}` : ""}
        </div>
      </section>
      <section class="study-controls">
        <div class="actions">
          <button type="button" class="btn ghost" data-action="exit-idiom-practice">${esc(t("backIdiom"))}</button>
          <button type="button" class="btn hot speak-end" data-action="next-idiom-practice" ${practice.picked == null ? "disabled" : ""}>${esc(practice.index + 1 === practice.items.length ? t("seeResult") : t("nextQ"))}</button>
        </div>
      </section>
    </div>
  `;
}

function formatDrillTime(ms) {
  const total = Math.max(0, Math.floor(Number(ms) / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
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

function clearDrillTick() {
  if (state.drillTimerId) {
    window.clearInterval(state.drillTimerId);
    state.drillTimerId = null;
  }
}

function updateDrillTimerDom() {
  const el = document.querySelector("[data-drill-timer]");
  if (el) el.textContent = formatDrillTime(drillElapsed());
}

function startDrillTick() {
  clearDrillTick();
  state.drillTimerId = window.setInterval(updateDrillTimerDom, 200);
  updateDrillTimerDom();
}

function syncDrillTimerToggle() {
  const btn = document.querySelector('[data-action="toggle-drill-timer"], [data-action="toggle-idiom-drill-timer"]');
  const drill = activeDrill();
  if (!btn || !drill || drill.done || !drill.begun) return;
  btn.textContent = drill.running ? t("stopTimer") : t("startTimer");
  btn.setAttribute("aria-pressed", drill.running ? "true" : "false");
  btn.classList.toggle("hot", !drill.running);
  btn.classList.toggle("ghost", drill.running);
}

function beginIdiomDrill() {
  const drill = state.idiomDrill;
  if (!drill || drill.done || drill.begun) return;
  drill.begun = true;
  drill.baseMs = 0;
  drill.startedAt = Date.now();
  drill.running = true;
  render({ scroll: "top" });
  startDrillTick();
}

function beginPoetryDrill() {
  const drill = state.poetryDrill;
  if (!drill || drill.done || drill.begun) return;
  drill.begun = true;
  drill.baseMs = 0;
  drill.startedAt = Date.now();
  drill.running = true;
  render({ scroll: "top" });
  startDrillTick();
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
  updateDrillTimerDom();
  syncDrillTimerToggle();
}

function poemVerseText(item) {
  return (item?.linesT || []).map((line) => String(line || "").trim()).join("");
}

function poemDrillLines(item) {
  return (item?.linesT || []).map((line) => String(line || "").trim()).filter(Boolean);
}

function stripPoemPunct(text) {
  return String(text || "")
    .replace(/[，,。．.；;：:！!？?、·—–\-…「」『』（）()《》〈〉\s]+/gu, "")
    .trim();
}

function poemDrillHint(item, drill) {
  const lines = poemDrillLines(item);
  if (!lines.length) return "";
  const side = drill?.hints?.[item.id];
  const idx = lines.length > 1 && (side === 0 || side === 1) ? side : 0;
  return stripPoemPunct(lines[idx] || lines[0]);
}

function withDrillStop(text) {
  const raw = String(text || "").trim().replace(/[。．.]+$/u, "");
  return raw ? `${raw}。` : "";
}

function drillGlossLines(text) {
  const raw = String(text || "").trim();
  if (!raw) return [""];
  // Only split clause joins like「……；或……」, not noun pairs like「事情或形勢」.
  const marker = "；或";
  const at = raw.indexOf(marker);
  if (at < 0) return [withDrillStop(raw)];
  const first = raw.slice(0, at).replace(/[；;，,\s]+$/u, "").trim();
  const second = raw.slice(at + marker.length).trim();
  if (!first || !second) return [withDrillStop(raw)];
  const firstBody = first.replace(/[。．.；;]+$/u, "");
  return [`1. ${firstBody}；`, `2. ${withDrillStop(second)}`];
}

function formatDrillGloss(text) {
  const lines = drillGlossLines(text);
  if (lines.length > 1) {
    return `<span class="drill-gloss-block">${lines.map((line) => `<span class="drill-gloss-line">${esc(line)}</span>`).join("")}</span>`;
  }
  return `<span class="drill-gloss-block single">${esc(lines[0] || "")}</span>`;
}

function measureDrillFontPx(items) {
  const host = document.createElement("div");
  host.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;font-family:\"Noto Serif TC\",\"PMingLiU\",serif;font-weight:400;line-height:1.45;padding:0 24px;box-sizing:border-box;";
  const probe = document.createElement("p");
  probe.style.margin = "0";
  host.appendChild(probe);
  document.body.appendChild(host);
  const width = Math.max(240, (document.querySelector(".drill-gloss")?.clientWidth)
    || (document.querySelector(".view")?.clientWidth - 36)
    || (window.innerWidth - 64));
  host.style.width = `${width}px`;
  const longest = items.reduce((best, item) => {
    for (const line of drillGlossLines(L(item, "gloss"))) {
      if (line.length > best.length) best = line;
    }
    return best;
  }, "");
  probe.textContent = longest;
  const maxPx = Math.min(42, Math.max(24, Math.floor(window.innerWidth * 0.048)));
  const minPx = 15;
  let size = maxPx;
  probe.style.fontSize = `${size}px`;
  while (size > minPx && probe.scrollWidth > host.clientWidth - 8) {
    size -= 1;
    probe.style.fontSize = `${size}px`;
  }
  host.remove();
  return size;
}

function makeIdiomDrill() {
  const items = shuffle([...DATA.idioms]);
  if (!items.length) return null;
  return {
    items,
    index: 0,
    baseMs: 0,
    startedAt: 0,
    running: false,
    begun: false,
    done: false,
    fontPx: null
  };
}

function startIdiomDrill() {
  clearDrillTick();
  const drill = makeIdiomDrill();
  if (!drill) return;
  state.idiomPractice = null;
  state.idiomDrill = drill;
  state.flipped = false;
  state.settingsOpen = false;
  render({ scroll: "top" });
}

function stepIdiomDrill(delta = 1) {
  const drill = state.idiomDrill;
  if (!drill || drill.done || !drill.begun) return;
  if (delta > 0) {
    if (drill.index + 1 >= drill.items.length) {
      if (drill.running) {
        drill.baseMs += Date.now() - drill.startedAt;
        drill.running = false;
      }
      drill.done = true;
      clearDrillTick();
      render({ scroll: "top" });
      return;
    }
    drill.index += 1;
  } else if (delta < 0) {
    if (drill.index <= 0) return;
    drill.index -= 1;
  } else {
    return;
  }
  render();
  updateDrillTimerDom();
}

function nextIdiomDrill() {
  stepIdiomDrill(1);
}

function renderIdiomDrill() {
  const drill = state.idiomDrill;
  if (!drill) return "";
  if (drill.done) {
    return `
      <div class="study-deck practice-deck">
        ${studyHead(t("drillDone"), `${t("drillTime")} ${formatDrillTime(drill.baseMs)}`, "", { homeBtn: true, bigTitle: true, leadClass: "drill-time-lead" })}
        <section class="practice-stage">
          <div class="practice-scroll">
            <p class="practice-gloss">${esc(`${drill.items.length} 則成語已問完。`)}</p>
          </div>
          <div class="actions">
            <button type="button" class="btn ghost" data-action="exit-idiom-drill">${esc(t("backIdiom"))}</button>
            <button type="button" class="btn hot speak-end" data-action="start-idiom-drill">${esc(t("againDrill"))}</button>
          </div>
        </section>
      </div>
    `;
  }
  const begun = Boolean(drill.begun);
  const item = begun ? drill.items[drill.index] : null;
  return `
    <div class="study-deck practice-deck">
      ${studyHead(t("drill"), t("drillLead"), "", { homeBtn: true, bigTitle: true })}
      <section class="practice-stage drill-stage">
        <div class="meta">
          <p class="count">${begun ? `${drill.index + 1} / ${drill.items.length}` : `0 / ${drill.items.length}`}</p>
          <div class="drill-timer-wrap">
            <p class="drill-timer" data-drill-timer>${esc(formatDrillTime(drillElapsed()))}</p>
            ${begun ? `<button type="button" class="btn ${drill.running ? "ghost" : "hot"} drill-timer-btn" data-action="toggle-drill-timer" aria-pressed="${drill.running}">${esc(drill.running ? t("stopTimer") : t("startTimer"))}</button>` : ""}
          </div>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${begun ? Math.round(((drill.index + 1) / drill.items.length) * 100) : 0}%"></span></div>
        <div class="drill-card">
          ${begun
            ? `<p class="practice-gloss drill-gloss"${drill.fontPx ? ` style="font-size:${drill.fontPx}px"` : ""}>${formatDrillGloss(L(item, "gloss"))}</p>`
            : `<div class="drill-start-panel"><button type="button" class="btn ghost drill-start-btn" data-action="begin-idiom-drill">${esc(t("startTimer"))}</button></div>`}
        </div>
        <div class="actions drill-actions">
          <button type="button" class="btn ghost" data-action="exit-idiom-drill">${esc(t("backIdiom"))}</button>
          <button type="button" class="btn hot speak-end" data-action="next-idiom-drill" ${begun ? "" : "disabled"}>${esc(begun && drill.index + 1 === drill.items.length ? t("seeResult") : t("nextQ"))}</button>
        </div>
      </section>
    </div>
  `;
}

function makePoetryDrill() {
  const items = shuffle([...(DATA.poems || [])]);
  if (!items.length) return null;
  const hints = {};
  for (const item of items) {
    const lines = poemDrillLines(item);
    hints[item.id] = lines.length > 1 && Math.random() < 0.5 ? 1 : 0;
  }
  return {
    items,
    hints,
    index: 0,
    baseMs: 0,
    startedAt: 0,
    running: false,
    begun: false,
    done: false,
    fontPx: null
  };
}

function startPoetryDrill() {
  clearDrillTick();
  const drill = makePoetryDrill();
  if (!drill) return;
  state.idiomPractice = null;
  state.idiomDrill = null;
  state.poetryDrill = drill;
  state.flipped = false;
  state.settingsOpen = false;
  render({ scroll: "top" });
}

function stepPoetryDrill(delta = 1) {
  const drill = state.poetryDrill;
  if (!drill || drill.done || !drill.begun) return;
  if (delta > 0) {
    if (drill.index + 1 >= drill.items.length) {
      if (drill.running) {
        drill.baseMs += Date.now() - drill.startedAt;
        drill.running = false;
      }
      drill.done = true;
      clearDrillTick();
      render({ scroll: "top" });
      return;
    }
    drill.index += 1;
  } else if (delta < 0) {
    if (drill.index <= 0) return;
    drill.index -= 1;
  } else {
    return;
  }
  render();
  updateDrillTimerDom();
}

function nextPoetryDrill() {
  stepPoetryDrill(1);
}

function renderPoetryDrill() {
  const drill = state.poetryDrill;
  if (!drill) return "";
  if (drill.done) {
    return `
      <div class="study-deck practice-deck">
        ${studyHead(t("drillDone"), `${t("drillTime")} ${formatDrillTime(drill.baseMs)}`, "", { homeBtn: true, bigTitle: true, leadClass: "drill-time-lead" })}
        <section class="practice-stage">
          <div class="practice-scroll">
            <p class="practice-gloss">${esc(`${drill.items.length} 則名句已問完。`)}</p>
          </div>
          <div class="actions">
            <button type="button" class="btn ghost" data-action="exit-poetry-drill">${esc(t("backPoetry"))}</button>
            <button type="button" class="btn hot speak-end" data-action="start-poetry-drill">${esc(t("againDrill"))}</button>
          </div>
        </section>
      </div>
    `;
  }
  const begun = Boolean(drill.begun);
  const item = begun ? drill.items[drill.index] : null;
  return `
    <div class="study-deck practice-deck">
      ${studyHead(t("drill"), t("poetryDrillLead"), "", { homeBtn: true, bigTitle: true })}
      <section class="practice-stage drill-stage">
        <div class="meta">
          <p class="count">${begun ? `${drill.index + 1} / ${drill.items.length}` : `0 / ${drill.items.length}`}</p>
          <div class="drill-timer-wrap">
            <p class="drill-timer" data-drill-timer>${esc(formatDrillTime(drillElapsed()))}</p>
            ${begun ? `<button type="button" class="btn ${drill.running ? "ghost" : "hot"} drill-timer-btn" data-action="toggle-drill-timer" aria-pressed="${drill.running}">${esc(drill.running ? t("stopTimer") : t("startTimer"))}</button>` : ""}
          </div>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${begun ? Math.round(((drill.index + 1) / drill.items.length) * 100) : 0}%"></span></div>
        <div class="drill-card">
          ${begun
            ? `<p class="practice-gloss drill-gloss drill-poem-hint"${drill.fontPx ? ` style="font-size:${drill.fontPx}px"` : ""}>${esc(poemDrillHint(item, drill))}</p>`
            : `<div class="drill-start-panel"><button type="button" class="btn ghost drill-start-btn" data-action="begin-poetry-drill">${esc(t("startTimer"))}</button></div>`}
        </div>
        <div class="actions drill-actions">
          <button type="button" class="btn ghost" data-action="exit-poetry-drill">${esc(t("backPoetry"))}</button>
          <button type="button" class="btn hot speak-end" data-action="next-poetry-drill" ${begun ? "" : "disabled"}>${esc(begun && drill.index + 1 === drill.items.length ? t("seeResult") : t("nextQ"))}</button>
        </div>
      </section>
    </div>
  `;
}

function renderIdiom() {
  state.idiomGroup = "all";
  if (state.idiomDrill) return renderIdiomDrill();
  if (state.idiomPractice) return renderIdiomPractice();
  const list = filteredIdioms();
  if (!list.length) state.idiomIndex = 0;
  else state.idiomIndex = Math.min(Math.max(state.idiomIndex, 0), list.length - 1);
  const item = list[state.idiomIndex];
  const atEnd = state.idiomIndex >= list.length - 1;
  return `
    <div class="study-deck">
      ${studyHead(t("idiom"), t("idiomLead"), "", { homeBtn: true, bigTitle: true })}
      ${item ? studyCard(item, state.idiomIndex, list.length, true, { showPractice: atEnd, showDrill: atEnd }) : `<p class="quiet">${esc(t("fresh"))}</p>`}
    </div>
  `;
}

function knowledgeCard(list, index, jumpAction, picksKey) {
  const item = list[index];
  const picked = state[picksKey][item.id];
  const options = item.options.map((option) => ({ text: option.t, ok: option.ok }));
  const atStart = index <= 0;
  const atEnd = index >= list.length - 1;
  return `
    <section class="study-stage">
      <div class="meta">
        ${badge(item.id)}
        <p class="count">${index + 1} / ${list.length}</p>
      </div>
      <div class="bar" aria-hidden="true"><span style="width:${Math.round(((index + 1) / list.length) * 100)}%"></span></div>
      <div class="study-stage-scroll">
        <div class="card-body" data-action="flip" role="button" tabindex="0" aria-pressed="${state.flipped}">
          ${state.flipped ? cardBack(item) : cardFront(item)}
        </div>
        ${state.flipped ? `
          <p class="ask">${esc(item.askT)}</p>
          ${choiceButtons(options, picked == null ? null : picked, "pick-know", `data-id="${item.id}" data-kind="${picksKey}"`)}
          ${picked == null ? "" : `<div class="why"><b>${esc(t("explain"))}</b> ${esc(item.whyT)}</div>`}
        ` : ""}
      </div>
    </section>
    <section class="study-controls">
      <div class="actions">
        <button type="button" class="btn ghost" data-action="prev" ${atStart ? "disabled" : ""}>${esc(t("prev"))}</button>
        <button type="button" class="btn ghost" data-action="next" ${atEnd ? "disabled" : ""}>${esc(t("next"))}</button>
        <button type="button" class="btn ghost speak-end" data-action="speak" data-part="word">${esc(isPoem(item) ? t("speakPoem") : t("speak"))}</button>
      </div>
    </section>
  `;
}

function renderCulture() {
  return `
    <div class="study-deck">
      ${studyHead(t("culture"), t("cultureLead"))}
      ${studyStrip(DATA.culture, state.cultureIndex, "jump-culture")}
      ${knowledgeCard(DATA.culture, state.cultureIndex, "jump-culture", "culturePicks")}
    </div>
  `;
}

function renderPoetry() {
  if (state.poetryDrill) return renderPoetryDrill();
  const list = DATA.poems;
  if (!list.length) state.poetryIndex = 0;
  else state.poetryIndex = Math.min(Math.max(state.poetryIndex, 0), list.length - 1);
  const item = list[state.poetryIndex];
  const atEnd = list.length && state.poetryIndex >= list.length - 1;
  return `
    <div class="study-deck">
      ${studyHead(t("poetry"), t("poetryLead"), "", { homeBtn: true, bigTitle: true })}
      ${item ? studyCard(item, state.poetryIndex, list.length, true, { showDrill: atEnd, drillAction: "start-poetry-drill" }) : `<p class="quiet">${esc(t("fresh"))}</p>`}
    </div>
  `;
}

function renderGrammar() {
  return `
    <h2>${esc(t("grammar"))}</h2>
    <p class="quiet">${esc(t("grammarLead"))}</p>
    ${DATA.grammar.map((item) => {
      const picked = state.grammarPicks[item.id];
      const options = item.options.map((option) => ({ text: head(option), ok: option.ok }));
      return `
        <article class="gcard">
          <p class="pattern">${esc(head(item))}</p>
          <p class="en" lang="en">${esc(item.en)}</p>
          <p>${esc(L(item, "explain"))}</p>
          ${item.trapT ? `<p class="trap"><b>${esc(t("watch"))}　</b>${esc(L(item, "trap"))}</p>` : ""}
          <ul class="examples">${item.examples.map((example) => `<li>${esc(head(example))}</li>`).join("")}</ul>
          <p class="ask">${esc(L(item, "prompt"))}</p>
          ${choiceButtons(options, picked == null ? null : picked, "pick-grammar", `data-id="${item.id}"`)}
          ${picked == null ? "" : `<div class="why"><b>${esc(t("explain"))}</b> ${esc(L(item, "why"))}</div>`}
        </article>
      `;
    }).join("")}
  `;
}

function renderFix() {
  const fx = state.fix;
  if (fx.done) {
    const seal = fx.score / fx.order.length >= 0.8 ? t("pass") : t("retry");
    return `
      <section class="result">
        <div class="seal two" aria-hidden="true">${[...seal].map((ch) => `<span>${esc(ch)}</span>`).join("")}</div>
        <h2>${esc(t("fix"))}</h2>
        <p class="scoreline">${fx.score}<span> / ${fx.order.length}</span></p>
        <div class="cta" style="justify-content:center">
          <button type="button" class="btn hot" data-action="restart-fix">${esc(t("redo"))}</button>
          <button type="button" class="btn ghost" data-action="nav" data-view="home">${esc(t("backHome"))}</button>
        </div>
      </section>
    `;
  }
  const id = fx.order[fx.index];
  const item = byId(DATA.fixes, id);
  const options = fx.optionOrder[id].map((index) => {
    const option = item.options[index];
    return { text: head(option), ok: option.ok };
  });
  return `
    <h2>${esc(t("fix"))}</h2>
    <p class="quiet">${esc(t("fixLead"))}</p>
    <p class="count">${fx.index + 1} / ${fx.order.length}</p>
    <div class="bar"><span style="width:${Math.round((fx.index / fx.order.length) * 100)}%"></span></div>
    <p class="fault">${esc(L(item, "fault"))}</p>
    ${choiceButtons(options, fx.picked, "pick-fix")}
    ${fx.picked == null ? "" : `<div class="why"><b>${esc(t("explain"))}</b> ${esc(L(item, "why"))}</div>`}
    <div class="cta">
      <button type="button" class="btn hot" data-action="next-fix" ${fx.picked == null ? "disabled" : ""}>${esc(fx.index + 1 === fx.order.length ? t("seeResult") : t("nextQ"))}</button>
    </div>
  `;
}

function renderReading() {
  const item = byId(DATA.readings, state.readingId) || DATA.readings[0];
  const bucket = state.reading[item.id] || { picks: {}, submitted: false, note: false };
  const paragraphs = item.bodyT;
  return `
    <h2>${esc(t("reading"))}</h2>
    <p class="quiet">${esc(t("readLead"))}</p>
    <div class="chips">
      ${DATA.readings.map((reading) => `<button type="button" class="chip ${reading.id === item.id ? "on" : ""}" data-action="choose-reading" data-id="${reading.id}">${esc(head(reading))}${progress.readings[reading.id]?.submitted ? " · ✓" : ""}</button>`).join("")}
    </div>
    <article class="passage">
      <h2>${esc(head(item))}</h2>
      <div class="body">${paragraphs.map((para) => `<p>${esc(para)}</p>`).join("")}</div>
    </article>
    ${item.questions.map((question, qIndex) => {
      const picked = pickedAt(bucket.picks, qIndex);
      const revealed = Boolean(bucket.submitted);
      return `
        <article class="qcard">
          <p class="ask">${qIndex + 1}. ${esc(head(question))}</p>
          ${question.options.map((option, index) => {
            const selected = picked === index;
            const cls = revealed ? (index === question.answer ? "right" : selected ? "wrong" : "dim") : (selected ? "on" : "");
            return `<button type="button" class="choice ${cls}" data-action="pick-read" data-reading="${item.id}" data-q="${qIndex}" data-choice="${index}" ${revealed ? "disabled" : ""}>${esc(head(option))}</button>`;
          }).join("")}
          ${revealed ? `<div class="why"><b>${esc(t("explain"))}</b> ${esc(L(question, "why"))}</div>` : ""}
        </article>
      `;
    }).join("")}
    ${bucket.note && !bucket.submitted ? `<p class="trap">${esc(t("needAll"))}</p>` : ""}
    <div class="cta">
      ${bucket.submitted
        ? `<p class="count">${esc(t("score"))} ${bucket.score} / ${item.questions.length}</p><button type="button" class="btn ghost" data-action="redo-reading" data-id="${item.id}">${esc(t("redo"))}</button>`
        : `<button type="button" class="btn hot" data-action="submit-read" data-reading="${item.id}">${esc(t("check"))}</button>`}
    </div>
  `;
}

function renderQuiz() {
  const quiz = state.quiz;
  if (quiz.done) {
    const seal = quiz.score / quiz.items.length >= 0.8 ? t("pass") : t("retry");
    return `
      <section class="result">
        <div class="seal two" aria-hidden="true">${[...seal].map((ch) => `<span>${esc(ch)}</span>`).join("")}</div>
        <h2>${esc(t("score"))}</h2>
        <p class="scoreline">${quiz.score}<span> / ${quiz.items.length}</span></p>
        <ul class="recap">
          ${quiz.items.map((q, index) => {
            const ok = questionCorrect(q, quiz.answers[index]);
            return `<li class="${ok ? "ok" : "bad"}"><b>${esc(shortPrompt(q))}</b><span>${esc(shortAnswer(q))}</span></li>`;
          }).join("")}
        </ul>
        <div class="cta" style="justify-content:center">
          <button type="button" class="btn hot" data-action="restart-quiz">${esc(t("againQuiz"))}</button>
          <button type="button" class="btn ghost" data-action="nav" data-view="home">${esc(t("backHome"))}</button>
        </div>
      </section>
    `;
  }
  const q = quiz.items[quiz.index];
  return `
    <h2>${esc(t("quiz"))}</h2>
    <p class="quiet">${esc(t("quizLead"))}</p>
    <div class="meta">
      <span class="kicker">${esc(quizKind(q))}</span>
      <p class="count">${quiz.index + 1} / ${quiz.items.length}</p>
    </div>
    <div class="bar"><span style="width:${Math.round((quiz.index / quiz.items.length) * 100)}%"></span></div>
    ${quizPromptHtml(q)}
    ${choiceButtons(quizOptions(q), quiz.picked, "choice")}
    ${quiz.picked == null ? "" : `<div class="why"><b>${esc(t("explain"))}</b> ${esc(quizWhy(q))}</div>`}
    <div class="cta">
      <button type="button" class="btn hot" data-action="next-quiz" ${quiz.picked == null ? "disabled" : ""}>${esc(quiz.index + 1 === quiz.items.length ? t("seeResult") : t("nextQ"))}</button>
    </div>
  `;
}

function renderSession() {
  const session = state.session;
  if (!session || session.phase === "summary") {
    const results = session?.results || [];
    const okCount = results.filter((item) => item.ok).length;
    const missed = results.filter((item) => !item.ok);
    const seal = results.length && okCount / results.length >= 0.8 ? t("pass") : t("retry");
    return `
      <section class="result">
        <div class="seal two" aria-hidden="true">${[...seal].map((ch) => `<span>${esc(ch)}</span>`).join("")}</div>
        <h2>${esc(t("summary"))}</h2>
        <p class="scoreline">${okCount}<span> / ${results.length}</span></p>
        ${results.length ? `<ul class="recap">${results.map((result) => {
          const item = findAny(result.id);
          return `<li class="${result.ok ? "ok" : "bad"}"><b>${esc(head(item))}</b><span lang="en">${esc(item.en || "")}</span></li>`;
        }).join("")}</ul>` : `<p>${esc(t("noMiss"))}</p>`}
        <div class="cta" style="justify-content:center">
          ${missed.length ? `<button type="button" class="btn warn" data-action="redo-missed">${esc(t("missed"))}</button>` : ""}
          <button type="button" class="btn hot" data-action="restart-session">${esc(t("another"))}</button>
          <button type="button" class="btn ghost" data-action="nav" data-view="home">${esc(t("backHome"))}</button>
        </div>
      </section>
    `;
  }
  const item = session.queue[session.index];
  return `
    <h2>${esc(t("start"))}</h2>
    <p class="quiet">${esc(t("sessionLead"))}</p>
    ${studyCard(item, session.index, session.queue.length, false)}
  `;
}

function viewHtml() {
  switch (state.view) {
    case "vocab": return renderVocab();
    case "idiom": return renderIdiom();
    case "grammar": return renderGrammar();
    case "fix": return renderFix();
    case "reading": return renderReading();
    case "culture": return renderCulture();
    case "poetry": return renderPoetry();
    case "quiz": return renderQuiz();
    case "session": return renderSession();
    default: return renderHome();
  }
}

function shell(content) {
  if (state.view === "home") {
    return `<div class="landing-shell">${content}</div>`;
  }
  const deckViews = new Set(["vocab", "idiom", "culture", "poetry"]);
  const hideTopbar = state.view === "idiom" || state.view === "poetry";
  const hideSettings = state.idiomPractice || state.idiomDrill || state.poetryDrill || state.view === "poetry";
  const frameClass = [
    deckViews.has(state.view) ? "page study-frame" : "page",
    hideSettings ? "no-settings" : "",
    hideTopbar ? "no-topbar" : ""
  ].filter(Boolean).join(" ");
  return `
    <p class="spine">${esc(t("spine"))}</p>
    <main class="${frameClass}">
      ${hideTopbar ? "" : `
      <header class="topbar">
        <div class="toprow">
          <div class="brandline">
            <div class="seal one" aria-hidden="true">溫</div>
            <div>
              <h1>${esc(t("studyBrand"))}</h1>
              <p class="en lede" lang="en">${esc(t("enBrand"))}</p>
            </div>
          </div>
          <button type="button" class="btn ghost" data-action="nav" data-view="home">${esc(t("backHome"))}</button>
        </div>
      </header>`}
      <div class="view">${content}</div>
      <footer class="foot">
        <button type="button" class="textlink" data-action="reset">${esc(t("clear"))}</button>
        ${hideSettings ? "" : settingsDock()}
      </footer>
    </main>
  `;
}

function render(options = {}) {
  if (state.view === "quiz" && !state.quiz) state.quiz = makeQuiz();
  if (state.view === "fix" && !state.fix) initFix();
  const list = filteredVocab();
  if (list.length) state.vocabIndex = Math.min(Math.max(state.vocabIndex, 0), list.length - 1);
  {
    const idiomList = filteredIdioms();
    state.idiomIndex = idiomList.length
      ? Math.min(Math.max(state.idiomIndex, 0), idiomList.length - 1)
      : 0;
  }
  state.cultureIndex = Math.min(Math.max(state.cultureIndex, 0), DATA.culture.length - 1);
  state.poetryIndex = Math.min(Math.max(state.poetryIndex, 0), DATA.poems.length - 1);
  document.documentElement.lang = "zh-Hant";
  document.title = t("brand");
  const deckViews = new Set(["vocab", "idiom", "culture", "poetry"]);
  const locked = deckViews.has(state.view);
  document.body.classList.toggle("landing", state.view === "home");
  document.body.classList.toggle("study-lock", locked);
  document.documentElement.classList.toggle("study-lock", locked);
  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute("content", state.view === "home" ? "#f6f3ec" : "#efe6d6");
  const root = document.getElementById("app");
  const keepFlipFocus = document.activeElement?.dataset?.action === "flip";
  root.innerHTML = shell(viewHtml());
  if (keepFlipFocus) root.querySelector("[data-action='flip']")?.focus();
  paintCangjieChars(root);
  window.scrollTo(0, 0);
  const activeChip = root.querySelector(".strip button.on");
  if (activeChip) {
    const strip = activeChip.closest(".strip");
    if (strip) {
      const left = activeChip.offsetLeft - (strip.clientWidth - activeChip.offsetWidth) / 2;
      strip.scrollLeft = Math.max(0, left);
    }
  }
  root.querySelectorAll("[data-strip]").forEach(bindStripScroll);
  {
    const drill = activeDrill();
    if (drill && drill.running && !drill.done) startDrillTick();
    else if (!(drill && drill.running)) clearDrillTick();
    else updateDrillTimerDom();
  }
  fitDrillGloss(root);
  fitPracticeGloss(root);
  fitPoetryDrillHint(root);
  requestAnimationFrame(() => fitPoemVerse(root));
  if (state.settingsOpen) armSettingsAutoClose();
  else clearSettingsAutoClose();
}

function fitPoetryDrillHint(root) {
  const drill = state.poetryDrill;
  const el = (root || document).querySelector(".drill-poem-hint");
  if (!drill || !el || drill.done || !drill.begun) return;
  const width = el.clientWidth || el.parentElement?.clientWidth || 0;
  if (!width) return;
  if (drill.fontPx == null) {
    let lo = 18;
    let hi = Math.min(36, Math.floor(width * 0.055));
    let best = lo;
    const host = document.createElement("div");
    host.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;font-family:\"Noto Serif TC\",\"PMingLiU\",serif;font-weight:700;letter-spacing:0.04em;box-sizing:border-box;";
    const probe = document.createElement("div");
    host.appendChild(probe);
    document.body.appendChild(host);
    host.style.width = `${width}px`;
    const longest = drill.items.reduce((bestText, item) => {
      const hint = poemDrillHint(item, drill);
      return hint.length > bestText.length ? hint : bestText;
    }, "");
    probe.textContent = longest;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      probe.style.fontSize = `${mid}px`;
      if (probe.scrollWidth <= width) {
        best = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    host.remove();
    drill.fontPx = best;
  }
  el.style.fontSize = `${drill.fontPx}px`;
  let size = drill.fontPx;
  while (size > 16 && el.scrollWidth > el.clientWidth) {
    size -= 1;
    el.style.fontSize = `${size}px`;
  }
  drill.fontPx = size;
}

function fitDrillGloss(root) {
  const drill = state.idiomDrill;
  const el = (root || document).querySelector(".drill-gloss");
  if (!drill || !el || drill.done) return;
  if (drill.fontPx == null) {
    drill.fontPx = measureDrillFontPx(drill.items);
  }
  el.style.whiteSpace = "normal";
  el.style.fontSize = `${drill.fontPx}px`;
}

function fitPracticeGloss(root) {
  const practice = state.idiomPractice;
  const el = (root || document).querySelector(".practice-stage > .practice-gloss");
  if (!practice || !el || practice.done) return;
  if (practice.fontPx == null) {
    practice.fontPx = measurePracticeFontPx(practice.items);
  }
  el.style.whiteSpace = "nowrap";
  el.style.fontSize = `${practice.fontPx}px`;
}

function measurePoemFontPx(availableWidth, text) {
  const host = document.createElement("div");
  host.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:nowrap;font-family:\"Noto Serif TC\",\"PMingLiU\",serif;font-weight:700;line-height:1.25;letter-spacing:0.02em;box-sizing:border-box;";
  const probe = document.createElement("div");
  host.appendChild(probe);
  document.body.appendChild(host);
  const width = Math.max(200, availableWidth || 0);
  host.style.width = `${width}px`;
  probe.textContent = text || "";
  let lo = 22;
  let hi = Math.min(120, Math.floor(width * 0.22));
  let best = lo;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    probe.style.fontSize = `${mid}px`;
    if (probe.scrollWidth <= width) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  host.remove();
  return best;
}

function fitPoemVerse(root) {
  const el = (root || document).querySelector(".poem-static .poem-verse");
  if (!el || state.view !== "poetry") return;
  el.style.whiteSpace = "nowrap";
  el.style.letterSpacing = "0.02em";
  el.style.lineHeight = "1.25";
  const card = el.closest(".card-body");
  const width = el.clientWidth
    || (card ? Math.max(0, card.clientWidth - 20) : 0)
    || (document.querySelector(".study-stage")?.clientWidth - 24)
    || 0;
  if (!width) return;
  const text = (el.textContent || "").trim();
  let size = measurePoemFontPx(width, text);
  el.style.fontSize = `${size}px`;
  while (size > 16 && el.scrollWidth > el.clientWidth) {
    size -= 1;
    el.style.fontSize = `${size}px`;
  }
  while (size < 120 && el.scrollWidth <= el.clientWidth) {
    el.style.fontSize = `${size + 1}px`;
    if (el.scrollWidth > el.clientWidth) {
      el.style.fontSize = `${size}px`;
      break;
    }
    size += 1;
  }
}

function bindStripScroll(strip) {
  if (strip.dataset.bound) return;
  strip.dataset.bound = "1";
  strip.addEventListener("wheel", (event) => {
    if (!strip.scrollWidth || strip.scrollWidth <= strip.clientWidth + 1) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    strip.scrollLeft += event.deltaY;
    event.preventDefault();
  }, { passive: false });
}

function go(view) {
  window.speechSynthesis?.cancel();
  state.view = view;
  state.flipped = false;
  state.settingsOpen = false;
  if (view !== "idiom") {
    state.idiomPractice = null;
    state.idiomDrill = null;
  }
  if (view !== "poetry") state.poetryDrill = null;
  clearDrillTick();
  render({ scroll: "top" });
}

function listForView() {
  if (state.view === "vocab") return filteredVocab();
  if (state.view === "idiom") return filteredIdioms();
  if (state.view === "culture") return DATA.culture;
  if (state.view === "poetry") return DATA.poems;
  return [];
}

function indexKeyForView() {
  if (state.view === "vocab") return "vocabIndex";
  if (state.view === "idiom") return "idiomIndex";
  if (state.view === "culture") return "cultureIndex";
  if (state.view === "poetry") return "poetryIndex";
  return null;
}

function advanceIndex(key, total, delta = 1) {
  if (!key || !total) return false;
  const before = state[key] || 0;
  const next = Math.min(Math.max(before + delta, 0), total - 1);
  state[key] = next;
  return next !== before;
}

function gradeCurrent(ok) {
  const card = currentCard();
  if (!card) return;
  record(card.id, ok);
  state.flipped = false;
  if (state.view === "session") {
    state.session.results.push({ id: card.id, ok });
    if (state.session.index + 1 >= state.session.queue.length) state.session.phase = "summary";
    else state.session.index += 1;
  } else {
    const key = indexKeyForView();
    const list = listForView();
    advanceIndex(key, list.length, 1);
  }
  const finished = state.view === "session" && state.session.phase === "summary";
  render(finished ? { scroll: "top" } : { scroll: "keep" });
}

function step(delta) {
  if (state.view === "idiom" && (state.idiomPractice || state.idiomDrill)) return;
  if (state.view === "poetry" && state.poetryDrill) return;
  const key = indexKeyForView();
  const list = listForView();
  const before = state[key] || 0;
  if (!advanceIndex(key, list.length, delta)) {
    if (state.view === "idiom" && delta > 0 && before >= list.length - 1) {
      startIdiomPractice();
    }
    return;
  }
  state.flipped = false;
  render();
}

function startIdiomPractice() {
  const practice = makeIdiomPractice(10);
  if (!practice) return;
  practice.answers = [];
  state.idiomDrill = null;
  clearDrillTick();
  state.idiomPractice = practice;
  state.flipped = false;
  state.settingsOpen = false;
  render({ scroll: "top" });
}

function pickIdiomPractice(choice) {
  const practice = state.idiomPractice;
  if (!practice || practice.done || practice.picked != null) return;
  const q = practice.items[practice.index];
  practice.picked = choice;
  practice.answers[practice.index] = choice;
  const ok = Boolean(idiomPracticeOptions(q)[choice]?.ok);
  if (ok) practice.score += 1;
  record(q.id, ok);
  render();
}

function nextIdiomPractice() {
  const practice = state.idiomPractice;
  if (!practice || practice.picked == null) return;
  if (practice.index + 1 >= practice.items.length) {
    practice.done = true;
    touchStreak();
    save();
    render({ scroll: "top" });
    return;
  }
  practice.index += 1;
  practice.picked = null;
  render();
}

function commitQuiz() {
  const quiz = state.quiz;
  if (!quiz || quiz.committed) return;
  quiz.committed = true;
  progress.quizzes.unshift({ date: todayStr(), score: quiz.score, total: quiz.items.length });
  progress.quizzes = progress.quizzes.slice(0, 8);
  touchStreak();
  save();
}

function pickQuiz(choice) {
  const quiz = state.quiz;
  if (!quiz || quiz.done || quiz.picked != null) return;
  const question = quiz.items[quiz.index];
  quiz.picked = choice;
  quiz.answers[quiz.index] = choice;
  const ok = questionCorrect(question, choice);
  if (ok) quiz.score += 1;
  record(question.id, ok);
  render();
}

function nextQuiz() {
  const quiz = state.quiz;
  if (!quiz || quiz.picked == null) return;
  if (quiz.index + 1 >= quiz.items.length) {
    quiz.done = true;
    commitQuiz();
    render({ scroll: "top" });
  } else {
    quiz.index += 1;
    quiz.picked = null;
    render();
  }
}

function onClick(event) {
  const el = event.target.closest("[data-action]");
  if (!el || !document.getElementById("app").contains(el)) return;
  const action = el.dataset.action;
  if (action === "nav") {
    go(el.dataset.view);
    return;
  }
  if (action === "flip") {
    state.flipped = !state.flipped;
    render();
    return;
  }
  if (action === "speak") {
    const card = currentCard();
    if (!card) return;
    if (isPoem(card)) {
      speak(card.linesT.join(""));
      return;
    }
    speak(el.dataset.part === "ex" ? L(card, "ex") : head(card));
    return;
  }
  if (action === "grade") {
    gradeCurrent(el.dataset.ok === "1");
    return;
  }
  if (action === "prev" || action === "next") {
    if (el.disabled) return;
    step(action === "next" ? 1 : -1);
    return;
  }
  if (action === "start-idiom-practice") {
    state.view = "idiom";
    state.settingsOpen = false;
    state.idiomDrill = null;
    clearDrillTick();
    startIdiomPractice();
    return;
  }
  if (action === "exit-idiom-practice") {
    state.idiomPractice = null;
    render({ scroll: "top" });
    return;
  }
  if (action === "idiom-practice-choice") {
    pickIdiomPractice(Number(el.dataset.choice));
    return;
  }
  if (action === "next-idiom-practice") {
    nextIdiomPractice();
    return;
  }
  if (action === "start-idiom-drill") {
    state.view = "idiom";
    state.settingsOpen = false;
    startIdiomDrill();
    return;
  }
  if (action === "exit-idiom-drill") {
    state.idiomDrill = null;
    clearDrillTick();
    render({ scroll: "top" });
    return;
  }
  if (action === "next-idiom-drill") {
    nextIdiomDrill();
    return;
  }
  if (action === "begin-idiom-drill") {
    beginIdiomDrill();
    return;
  }
  if (action === "toggle-idiom-drill-timer" || action === "toggle-drill-timer") {
    toggleDrillTimer();
    return;
  }
  if (action === "start-poetry-drill") {
    state.view = "poetry";
    state.settingsOpen = false;
    startPoetryDrill();
    return;
  }
  if (action === "exit-poetry-drill") {
    state.poetryDrill = null;
    clearDrillTick();
    render({ scroll: "top" });
    return;
  }
  if (action === "next-poetry-drill") {
    nextPoetryDrill();
    return;
  }
  if (action === "begin-poetry-drill") {
    beginPoetryDrill();
    return;
  }
  if (action === "topic") {
    state.topic = el.dataset.topic;
    state.vocabIndex = 0;
    state.flipped = false;
    render();
    return;
  }
  if (action === "idiom-group") {
    state.idiomGroup = el.dataset.group;
    state.idiomIndex = 0;
    state.flipped = false;
    render();
    return;
  }
  if (action === "jump-vocab" || action === "jump-idiom" || action === "jump-culture" || action === "jump-poetry") {
    state.flipped = false;
    if (action === "jump-vocab") state.vocabIndex = Number(el.dataset.index);
    else if (action === "jump-idiom") state.idiomIndex = Number(el.dataset.index);
    else if (action === "jump-culture") state.cultureIndex = Number(el.dataset.index);
    else state.poetryIndex = Number(el.dataset.index);
    render();
    return;
  }
  if (action === "pick-know") {
    const id = el.dataset.id;
    const kind = el.dataset.kind;
    if (state[kind][id] != null) return;
    const choice = Number(el.dataset.choice);
    state[kind][id] = choice;
    const item = kind === "poetryPicks" ? byId(DATA.poems, id) : byId(DATA.culture, id);
    record(id, Boolean(item.options[choice].ok));
    render();
    return;
  }
  if (action === "open-word") {
    const vocab = byId(DATA.vocab, el.dataset.id);
    state.flipped = false;
    if (vocab) {
      state.view = "vocab";
      state.topic = "all";
      state.vocabIndex = DATA.vocab.findIndex((item) => item.id === vocab.id);
    } else {
      const idx = DATA.idioms.findIndex((item) => item.id === el.dataset.id);
      state.view = "idiom";
      state.idiomGroup = "all";
      state.idiomIndex = Math.max(0, idx);
    }
    render({ scroll: "top" });
    return;
  }
  if (action === "start-session") {
    if (!state.session || state.session.phase === "summary") state.session = newSession();
    go("session");
    return;
  }
  if (action === "restart-session") {
    state.session = newSession();
    go("session");
    return;
  }
  if (action === "redo-missed") {
    const ids = state.session.results.filter((item) => !item.ok).map((item) => item.id);
    state.session = newSession(ids);
    go("session");
    return;
  }
  if (action === "pick-grammar") {
    const id = el.dataset.id;
    if (state.grammarPicks[id] != null) return;
    const choice = Number(el.dataset.choice);
    state.grammarPicks[id] = choice;
    const item = byId(DATA.grammar, id);
    record(id, Boolean(item.options[choice].ok));
    render();
    return;
  }
  if (action === "pick-fix") {
    const fx = state.fix;
    if (!fx || fx.picked != null || fx.done) return;
    const choice = Number(el.dataset.choice);
    fx.picked = choice;
    const item = byId(DATA.fixes, fx.order[fx.index]);
    const ok = Boolean(item.options[fx.optionOrder[item.id][choice]].ok);
    if (ok) fx.score += 1;
    record(item.id, ok);
    render();
    return;
  }
  if (action === "next-fix") {
    const fx = state.fix;
    if (!fx || fx.picked == null) return;
    if (fx.index + 1 >= fx.order.length) {
      fx.done = true;
      progress.fixBest = Math.max(progress.fixBest || 0, fx.score);
      progress.fixTotal = fx.order.length;
      save();
      render({ scroll: "top" });
    } else {
      fx.index += 1;
      fx.picked = null;
      render();
    }
    return;
  }
  if (action === "restart-fix") {
    state.fix = null;
    render();
    return;
  }
  if (action === "choose-reading") {
    state.readingId = el.dataset.id;
    render({ scroll: "top" });
    return;
  }
  if (action === "pick-read") {
    const bucket = state.reading[el.dataset.reading] || { picks: {}, submitted: false, note: false };
    if (bucket.submitted) return;
    bucket.note = false;
    bucket.picks[el.dataset.q] = Number(el.dataset.choice);
    state.reading[el.dataset.reading] = bucket;
    render();
    return;
  }
  if (action === "submit-read") {
    const item = byId(DATA.readings, el.dataset.reading);
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
    progress.readings[item.id] = {
      score: bucket.score,
      total: item.questions.length,
      picks: bucket.picks,
      submitted: true
    };
    touchStreak();
    save();
    render();
    return;
  }
  if (action === "redo-reading") {
    delete state.reading[el.dataset.id];
    delete progress.readings[el.dataset.id];
    save();
    render();
    return;
  }
  if (action === "choice") {
    pickQuiz(Number(el.dataset.choice));
    return;
  }
  if (action === "next-quiz") {
    nextQuiz();
    return;
  }
  if (action === "restart-quiz") {
    state.quiz = makeQuiz();
    go("quiz");
    return;
  }
  if (action === "toggle-settings") {
    if (state.settingsOpen) {
      clearSettingsAutoClose();
      state.settingsOpen = false;
    } else {
      state.settingsOpen = true;
    }
    render();
    return;
  }
  if (action === "code-mode") {
    progress.codeMode = el.dataset.mode === "jyutping" ? "jyutping" : "cangjie";
    state.settingsOpen = true;
    save();
    render();
    return;
  }
  if (action === "cangjie-color") {
    progress.cangjieColor = el.dataset.mode === "multi" ? "multi" : "single";
    state.settingsOpen = true;
    save();
    render();
    return;
  }
  if (action === "reset") {
    if (!window.confirm(t("confirmReset"))) return;
    const keptMode = progress.codeMode;
    const keptColor = progress.cangjieColor;
    progress = defaultProgress();
    progress.codeMode = keptMode === "jyutping" ? "jyutping" : "cangjie";
    progress.cangjieColor = keptColor === "multi" ? "multi" : "single";
    state.session = null;
    state.quiz = null;
    state.fix = null;
    state.reading = {};
    state.grammarPicks = {};
    state.culturePicks = {};
    state.poetryPicks = {};
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
    save();
    go("home");
  }
}

function onKey(event) {
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
  if (state.view === "idiom" && state.idiomPractice && !state.idiomPractice.done) {
    if (event.key === "Enter") {
      if (tag === "BUTTON") return;
      if (state.idiomPractice.picked == null) return;
      event.preventDefault();
      nextIdiomPractice();
      return;
    }
  }
  if (state.view === "idiom" && state.idiomDrill && !state.idiomDrill.done) {
    if (!state.idiomDrill.begun) {
      if (event.key === "Enter" || event.code === "Space") {
        if (tag === "BUTTON") return;
        event.preventDefault();
        beginIdiomDrill();
      }
      return;
    }
    if (event.code === "Space" || event.key === "Enter") {
      if (tag === "BUTTON") return;
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
      return;
    }
  }
  if (state.view === "poetry" && state.poetryDrill && !state.poetryDrill.done) {
    if (!state.poetryDrill.begun) {
      if (event.key === "Enter" || event.code === "Space") {
        if (tag === "BUTTON") return;
        event.preventDefault();
        beginPoetryDrill();
      }
      return;
    }
    if (event.code === "Space" || event.key === "Enter") {
      if (tag === "BUTTON") return;
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
      return;
    }
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
  if (event.code === "Space" && tag !== "BUTTON" && currentCard()) {
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
    return;
  }
  if (event.key === "Enter" && event.target?.dataset?.action === "flip") {
    event.preventDefault();
    state.flipped = !state.flipped;
    render();
  }
}

function boot() {
  if (!DATA) {
    document.body.textContent = "資料未能載入。";
    return;
  }
  progress = load();
  state = {
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
    drillTimerId: null
  };
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKey);
  window.addEventListener("resize", () => {
    const root = document.getElementById("app");
    if (state.idiomDrill && !state.idiomDrill.done) {
      state.idiomDrill.fontPx = null;
      fitDrillGloss(root);
    }
    if (state.idiomPractice && !state.idiomPractice.done) {
      state.idiomPractice.fontPx = null;
      fitPracticeGloss(root);
    }
    if (state.poetryDrill && !state.poetryDrill.done) {
      state.poetryDrill.fontPx = null;
      fitPoetryDrillHint(root);
    }
    fitPoemVerse(root);
  });
  document.addEventListener("wheel", (event) => {
    if (!document.body.classList.contains("study-lock")) return;
    if (event.target.closest("[data-strip], .strip, .study-stage-scroll, .practice-scroll")) return;
    event.preventDefault();
  }, { passive: false });
  document.addEventListener("touchmove", (event) => {
    if (!document.body.classList.contains("study-lock")) return;
    if (event.target.closest("[data-strip], .strip, .study-stage-scroll, .practice-scroll")) return;
    event.preventDefault();
  }, { passive: false });
  window.speechSynthesis?.getVoices();
  render();
}

boot();
