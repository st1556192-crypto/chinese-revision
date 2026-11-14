import { REVISION_DATA as DATA } from "../data/revision.js";
import { CANGJIE_MAP } from "../data/cangjie.js";
import { FCJ_IDS } from "../data/fcj.js";

export { DATA, CANGJIE_MAP, FCJ_IDS };

export const STORAGE_KEY = "zhongwen-revision-v1";
export const FCJ_GLYPH_BASE = "https://www.xn--0vqu8au0tro7d.com/char2";
export const CANGJIE_POS_COLORS = ["#4a4a4a", "#ef7d10", "#0099ff", "#8cc63f", "#92278f"];
export const CANGJIE_RADICALS = {
  A: "日", B: "月", C: "金", D: "木", E: "水", F: "火", G: "土",
  H: "竹", I: "戈", J: "十", K: "大", L: "中", M: "一", N: "弓",
  O: "人", P: "心", Q: "手", R: "口", S: "尸", T: "廿", U: "山",
  V: "女", W: "田", X: "難", Y: "卜", Z: "重"
};

export function head(obj) {
  if (!obj) return "";
  return obj.t || "";
}

export function L(obj, key) {
  if (!obj) return "";
  return obj[`${key}T`] || "";
}

export function byId(list, id) {
  return (list || []).find((item) => item.id === id);
}

export function findAny(id) {
  return byId(DATA.vocab, id)
    || byId(DATA.idioms, id)
    || byId(DATA.grammar, id)
    || byId(DATA.fixes, id)
    || byId(DATA.culture, id)
    || byId(DATA.poems, id);
}

export function isIdiom(item) {
  return Boolean(item && item.glossT && item.pinyin && !item.linesT && !item.tipT && !item.topic);
}

export function isCulture(item) {
  return Boolean(item && item.tipT && item.askT && !item.linesT);
}

export function isPoem(item) {
  return Boolean(item && item.linesT);
}

export function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function todayStr(date = new Date()) {
  const z = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${z(date.getMonth() + 1)}-${z(date.getDate())}`;
}

export function defaultProgress() {
  return {
    streak: 0,
    lastDate: "",
    seen: {},
    quizzes: [],
    readings: {},
    fixBest: 0,
    fixTotal: 0,
    codeMode: "cangjie",
    cangjieColor: "multi",
    pendingMistakes: []
  };
}

export function loadProgress() {
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
      readings: data.readings || {},
      pendingMistakes: data.pendingMistakes || []
    };
  } catch (err) {
    return base;
  }
}

export function cangjieCodes(text) {
  return [...String(text || "")].map((ch) => CANGJIE_MAP[ch]).filter(Boolean);
}

export function codeColors(code, multi) {
  const letters = [...String(code || "").toUpperCase()];
  if (!letters.length) return [];
  if (!multi) return letters.map(() => "#1f1a17");
  return letters.map((_, index) => CANGJIE_POS_COLORS[index % CANGJIE_POS_COLORS.length]);
}

export function radicalOf(letter) {
  return CANGJIE_RADICALS[String(letter || "").toUpperCase()] || letter;
}

export function fiveColorGlyphUrl(ch) {
  const id = FCJ_IDS?.[ch];
  return id ? `${FCJ_GLYPH_BASE}/${id}.png` : "";
}

export function poemVerseText(item) {
  return (item?.linesT || []).map((line) => String(line || "").trim()).join("");
}

export function poemDrillLines(item) {
  return (item?.linesT || []).map((line) => String(line || "").trim()).filter(Boolean);
}

export function stripPoemPunct(text) {
  return String(text || "")
    .replace(/[，,。．.；;：:！!？?、·—–\-…「」『』（）()《》〈〉\s]+/gu, "")
    .trim();
}

export function poemDrillHint(item, drill) {
  const lines = poemDrillLines(item);
  if (!lines.length) return { text: "", showBlank: false, blankChars: 4, blankSide: "right" };
  const side = drill?.hints?.[item.id];
  const idx = lines.length > 1 && (side === 0 || side === 1) ? side : 0;
  const text = stripPoemPunct(lines[idx] || lines[0]);
  return {
    text,
    showBlank: lines.length > 1,
    // First half shown → blank on right; second half shown → blank on left.
    blankSide: idx === 0 ? "right" : "left",
    blankChars: Math.max(text.length, 4)
  };
}

export function withDrillStop(text) {
  const raw = String(text || "").trim().replace(/[。．.]+$/u, "");
  return raw ? `${raw}。` : "";
}

export function drillGlossLines(text) {
  const raw = String(text || "").trim();
  if (!raw) return [""];
  const marker = "；或";
  const at = raw.indexOf(marker);
  if (at < 0) return [withDrillStop(raw)];
  const first = raw.slice(0, at).replace(/[；;，,\s]+$/u, "").trim();
  const second = raw.slice(at + marker.length).trim();
  if (!first || !second) return [withDrillStop(raw)];
  const firstBody = first.replace(/[。．.；;]+$/u, "");
  return [`1. ${firstBody}；`, `2. ${withDrillStop(second)}`];
}

export function pickedAt(picks, index) {
  if (!picks) return undefined;
  if (picks[index] != null) return Number(picks[index]);
  if (picks[String(index)] != null) return Number(picks[String(index)]);
  return undefined;
}

export function formatDrillTime(ms) {
  const total = Math.max(0, Math.floor(Number(ms) / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function hash(id) {
  let n = 0;
  for (const ch of id) n = (n + ch.charCodeAt(0) * 17) % 97;
  return n;
}

export function speak(text) {
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

let answerAudioCtx = null;

export function playAnswerSound(ok) {
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
    const freqs = ok ? [523.25, 659.25, 783.99] : [196, 165, 131];
    const step = ok ? 0.08 : 0.14;
    const hold = ok ? 0.16 : 0.26;
    freqs.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      osc.type = ok ? "sine" : "triangle";
      osc.frequency.value = freq;
      osc.connect(gain);
      const start = now + index * step;
      osc.start(start);
      osc.stop(start + hold);
    });
    gain.gain.exponentialRampToValueAtTime(ok ? 0.18 : 0.16, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (ok ? 0.42 : 0.62));
  } catch (err) {
    /* Sound is optional. */
  }
}
