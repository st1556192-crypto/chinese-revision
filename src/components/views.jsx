import { useLayoutEffect, useRef, useState } from "react";
import { t } from "../copy.js";
import { useStudy } from "../study.jsx";
import { Bar, Chip, Choices, SettingsDock, ghost, hot, linkBtn } from "./ui.jsx";
import {
  CANGJIE_MAP,
  codeColors,
  drillGlossLines,
  fiveColorGlyphUrl,
  head,
  isIdiom,
  isPoem,
  poemDrillHint,
  poemVerseText,
  radicalOf,
  withDrillStop
} from "../lib/helpers.js";

function toneClass(tone) {
  if (tone === "ink") return "text-navy";
  if (tone === "pine") return "text-pine";
  if (tone === "clay") return "text-clay";
  return "text-cinnabar";
}

function toneButton(tone) {
  if (tone === "ink") return "bg-navy";
  if (tone === "pine") return "bg-pine";
  if (tone === "clay") return "bg-clay";
  return "bg-cinnabar";
}

export function Home() {
  const study = useStudy();
  const cards = [
    { mark: "一", tone: "ink", title: t("reading"), blurb: `第一學期摘要 · 共 ${study.data.readings.length} 篇古文（《小石潭記》《岳陽樓記》《買柑者言》《閒情記趣》）。先看背景與手法，再讀原文譯文，最後做理解題。`, actions: [["reading", t("openReading")], ["vocab", t("openVocab")]] },
    { mark: "二", tone: "pine", title: t("idiom"), blurb: `共 ${study.data.idioms.length} 則成語。先溫習解釋，再做練習或測驗鞏固。`, actions: [["idiom", t("openIdiom")], ["practice", t("practice")], ["drill", t("drill")]] },
    { mark: "三", tone: "clay", title: t("culture"), blurb: `共 ${study.data.culture.length} 則常識。涵蓋宋元明清至現代作家、名著與文學流派。`, actions: [["culture", t("openCulture")]] },
    { mark: "四", tone: "cinnabar", title: t("poetry"), blurb: `共 ${study.data.poems.length} 首詩。先誦讀名句，再做測驗鞏固。`, actions: [["poetry", t("openPoetry")], ["poetry-drill", t("drill")]] }
  ];
  return (
    <div className="relative mx-auto w-[min(1040px,calc(100%-32px))] pt-20 pb-4">
      {study.state.authUser ? (
        <div className="fixed top-3 right-3 z-30 flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-ink/10 bg-white px-3 py-1.5 text-ink shadow-sm">
            {study.state.authUser.photoURL ? (
              <img src={study.state.authUser.photoURL} alt="" referrerPolicy="no-referrer" className="size-9 shrink-0 rounded-full object-cover" />
            ) : null}
            <span className="max-w-56 truncate">{study.state.authUser.displayName || study.state.authUser.email || "已登入"}</span>
          </div>
          <button type="button" className="rounded-xl border border-ink/10 bg-white px-4 py-2 text-ink shadow-sm" onClick={study.signOut}>{t("signOut")}</button>
        </div>
      ) : (
        <button type="button" className="fixed top-3 right-3 z-30 rounded-xl border border-ink/10 bg-white px-4 py-2 text-ink shadow-sm" onClick={study.signIn}>{t("signIn")}</button>
      )}
      {study.state.authError ? <p className="relative mb-4 text-clay">{study.state.authError}</p> : null}
      <section className="relative grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <article key={card.title} className={`relative flex min-h-52 flex-col gap-3 overflow-hidden rounded-[20px] border border-ink/10 bg-card/95 p-5 shadow-sm ${toneClass(card.tone)}`}>
            <span className="absolute top-1 right-3 font-serif text-6xl opacity-15" aria-hidden="true">{card.mark}</span>
            <span className="absolute top-4 bottom-4 left-0 w-1 rounded-full bg-current" />
            <h2 className="font-serif text-3xl font-bold tracking-widest text-ink">{card.title}</h2>
            <p className="flex-1 text-soft">{card.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {card.actions.map((action, index) => (
                <button
                  key={action[0]}
                  type="button"
                  className={index
                    ? "inline-flex min-h-11 items-center rounded-full border-2 border-current bg-transparent px-4 font-medium text-current"
                    : `inline-flex min-h-11 items-center rounded-full px-4 text-white ${toneButton(card.tone)}`}
                  onClick={() => {
                    if (action[0] === "practice") study.startIdiomPractice();
                    else if (action[0] === "drill") study.startIdiomDrill();
                    else if (action[0] === "poetry-drill") study.startPoetryDrill();
                    else study.go(action[0]);
                  }}
                >
                  {action[1]}
                </button>
              ))}
            </div>
          </article>
        ))}
      </section>
      {study.state.authUser ? <MistakeBoard /> : null}
      <footer className="relative mt-4 flex flex-wrap items-end justify-between gap-3 text-sm text-soft">
        <div>
          <p>{t("saved")}</p>
          <p>{study.state.authUser ? t("cloudSaved") : t("signInHint")}</p>
        </div>
        <button type="button" className={linkBtn} onClick={study.reset}>{t("clear")}</button>
      </footer>
    </div>
  );
}

function MistakeBoard() {
  const study = useStudy();
  const rows = study.state.mistakes || [];
  return (
    <section className="relative mt-6 rounded-[20px] border border-ink/10 bg-card/90 p-5">
      <h2 className="mb-2 font-serif text-2xl tracking-widest">{t("mistakesTitle")}</h2>
      {rows.length ? (
        <ul>
          {rows.map((row) => (
            <li key={row.idiomId} className="grid gap-0.5 border-t border-ink/10 py-2.5">
              <button type="button" className="justify-self-start text-lg font-bold" onClick={() => study.openWord(row.idiomId)}>{row.text || row.idiomId}</button>
              <span className="text-soft">{row.gloss}</span>
              <span className="text-sm text-clay">練習 {row.practice || 0} · 測驗 {row.test || 0}</span>
            </li>
          ))}
        </ul>
      ) : <p className="text-soft">{t("noMistakes")}</p>}
    </section>
  );
}

export function Shell({ children, deck = false, hideTop = false, hideSettings = false }) {
  const study = useStudy();
  return (
    <main className={`mx-auto flex min-h-dvh w-[min(980px,calc(100%-28px))] flex-col bg-paper shadow-lg ${deck ? "h-dvh max-h-dvh w-[min(920px,calc(100%-16px))] overflow-hidden shadow-none" : "my-5 px-5 py-5"}`}>
      {hideTop ? null : (
        <header className={`flex items-start justify-between gap-3 ${deck ? "border-b border-ink/10 px-4 py-2" : "sticky top-0 -mx-5 mb-5 border-b border-ink/10 bg-paper/95 px-5 py-4 backdrop-blur"}`}>
          <div className="flex items-center gap-3">
            <div className="grid size-16 place-items-center rounded-full border border-cinnabar/40 font-serif text-3xl text-cinnabar">溫</div>
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-widest">{t("studyBrand")}</h1>
              {deck ? null : <p className="font-en text-lg text-soft italic">{t("enBrand")}</p>}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {hideSettings ? null : <SettingsDock menu="down" buttonClassName={`${ghost} min-h-12 min-w-24 px-5`} />}
            <button type="button" className={`${ghost} min-h-12 min-w-24 px-5`} onClick={() => study.go("home")}><span className="text-lg">{t("backHome")}</span></button>
          </div>
        </header>
      )}
      <div className={`min-h-0 flex-1 ${deck ? "overflow-hidden px-4 pt-3 pb-5" : ""}`}>{children}</div>
    </main>
  );
}

const GLYPH_CELL = 190;

function glyphRowWidth(count) {
  const n = Math.min(Math.max(count, 1), 4);
  return `min(100%, ${n * GLYPH_CELL}px)`;
}

function Tian({ word }) {
  const chars = [...word];
  const n = Math.min(Math.max(chars.length, 1), 4);
  const nine = {
    backgroundImage: "linear-gradient(rgba(197,54,43,0.4), rgba(197,54,43,0.4)), linear-gradient(rgba(197,54,43,0.4), rgba(197,54,43,0.4)), linear-gradient(rgba(197,54,43,0.4), rgba(197,54,43,0.4)), linear-gradient(rgba(197,54,43,0.4), rgba(197,54,43,0.4))",
    backgroundSize: "1px 100%, 1px 100%, 100% 1px, 100% 1px",
    backgroundPosition: "33.33% 0, 66.67% 0, 0 33.33%, 0 66.67%",
    backgroundRepeat: "no-repeat"
  };
  return (
    <div className="mx-auto grid max-w-full border-2 border-ink/80 bg-white" style={{ width: glyphRowWidth(n), gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
      {chars.slice(0, n).map((ch, index) => (
        <span key={`${ch}-${index}`} className="grid aspect-square place-items-center overflow-hidden border-r-2 border-ink/80 [container-type:size] last:border-r-0" style={nine}>
          <span className="font-serif text-[72cqmin] leading-none font-bold">{ch}</span>
        </span>
      ))}
    </div>
  );
}

function CodeLine({ item }) {
  const study = useStudy();
  if (study.codeMode() === "jyutping") {
    if (!item?.pinyin) return null;
    return <p className="text-xl text-ink italic"><span className="mr-2 font-sans text-xs tracking-widest text-soft not-italic">粵拼</span>{item.pinyin}</p>;
  }
  if (isIdiom(item)) return null;
  const codes = [...head(item)].map((ch) => CANGJIE_MAP[ch]).filter(Boolean);
  if (!codes.length) return null;
  const multi = study.multiColor();
  return (
    <p className={`text-xl italic ${multi ? "text-clay" : "text-ink"}`}>
      <span className="mr-2 font-sans text-xs tracking-widest text-soft not-italic">倉頡</span>
      {codes.map((code, index) => (
        <span key={`${code}-${index}`} className="mr-2">
          {[...code].map((letter, letterIndex) => (
            <span key={letterIndex} style={{ color: codeColors(code, multi)[letterIndex] }}>{letter}</span>
          ))}
        </span>
      ))}
    </p>
  );
}

function IdiomBoard({ text, showCodes = true, compact = false }) {
  const study = useStudy();
  const multi = study.multiColor();
  const inkOnly = !showCodes || !multi;
  const chars = [...String(text || "")].slice(0, 4);
  const n = Math.max(chars.length, 1);
  const width = compact ? `min(100%, ${n * 200}px)` : glyphRowWidth(n);
  return (
    <div>
      <div className={`mx-auto grid max-w-full ${compact ? "gap-2.5" : "gap-3"}`} style={{ width, gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {chars.map((ch, index) => {
          const code = CANGJIE_MAP[ch] || "";
          const colors = codeColors(code, !inkOnly && multi);
          const url = inkOnly ? "" : fiveColorGlyphUrl(ch);
          return (
            <article key={`${ch}-${index}`} className={`min-w-0 rounded-2xl border border-ink/10 bg-card text-center ${compact ? "p-1.5" : "p-2"}`}>
              {url ? <img src={url} alt={ch} className="mx-auto aspect-square w-full object-contain" /> : (
                <div className="grid aspect-square w-full place-items-center [container-type:size]">
                  <span className={`font-serif leading-none font-bold text-ink ${compact ? "text-[72cqmin]" : "text-[72cqmin]"}`}>{ch}</span>
                </div>
              )}
              {showCodes ? (
                <>
                  <div className={`flex overflow-hidden rounded-full ${compact ? "mt-1 h-1.5" : "mt-1 h-1.5"}`}>
                    {colors.map((color, colorIndex) => <span key={colorIndex} className="flex-1" style={{ background: color }} />)}
                  </div>
                  <div className={`flex justify-center gap-1 ${compact ? "mt-1" : "mt-1"}`}>
                    {[...code.toUpperCase()].map((letter, letterIndex) => (
                      <div key={letterIndex} className={`leading-tight ${compact ? "text-sm" : "text-sm"}`} style={{ color: colors[letterIndex] }}>
                        <div>{radicalOf(letter)}</div>
                        <div>{letter}</div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}

function CardFace({ item, flipped }) {
  const study = useStudy();
  if (isPoem(item)) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <p className="mb-6 text-3xl text-soft">{item.dynastyT} · {item.authorT} · 《{head(item)}》</p>
        <PoemLine text={poemVerseText(item)} />
      </div>
    );
  }
  if (!flipped) {
    const kicker = isIdiom(item)
      ? ""
      : item.tipT || study.data.topics.find((topic) => topic.id === item.topic)?.t || "";
    return (
      <div className="flex h-full w-full flex-col text-center">
        <div className="flex min-h-0 flex-1 flex-col items-center justify-center">
          {kicker ? <p className="tracking-widest text-gold">{kicker}</p> : null}
          <Tian word={head(item)} />
        </div>
        <p className="mt-2 shrink-0 text-sm text-soft">{t("flipHint")}</p>
      </div>
    );
  }
  if (item.tipT) {
    return (
      <div>
        <p className="font-serif text-3xl">{head(item)}</p>
        <CodeLine item={item} />
        <p>{item.glossT}</p>
        <p className="rounded-xl bg-[#f4efe2] p-3"><b>{t("detail")}　</b>{item.detailT}</p>
        <p className="text-sm text-soft">{t("hide")}</p>
      </div>
    );
  }
  const glossLines = drillGlossLines(item.glossT);
  return (
    <div className="flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden">
      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-hidden text-center">
        {isIdiom(item) ? (
          <IdiomBoard text={head(item)} showCodes={study.codeMode() === "cangjie"} compact />
        ) : (
          <p className="font-serif text-3xl">{head(item)}</p>
        )}
        {isIdiom(item) && study.codeMode() === "jyutping" ? <CodeLine item={item} /> : null}
        {!isIdiom(item) ? <CodeLine item={item} /> : null}
        {glossLines.length > 1 ? (
          <div className="mx-auto mt-5 w-fit space-y-5 text-left font-serif text-[2rem] leading-snug font-semibold">
            {glossLines.map((line) => <p key={line}>{line}</p>)}
          </div>
        ) : (
          <FitLine text={glossLines[0]} className="mx-auto mt-5 max-w-full px-2 font-serif font-semibold" maxPx={32} minPx={20} />
        )}
        {item.en ? <p lang="en" className="mx-auto mt-2 font-en text-[1.65rem] leading-snug font-medium text-soft italic">{item.en}</p> : null}
        {item.trapT ? <p className="mt-2 rounded-xl bg-[#fdeceb] p-2 text-left text-sm"><b>{t("watch")}　</b>{item.trapT}</p> : null}
        {item.storyT ? <p className="mt-2 rounded-xl bg-[#f4efe2] p-2 text-left text-sm"><b>{t("story")}　</b>{item.storyT}</p> : null}
        {item.exT ? (
          <div className="mt-2 text-left">
            <h3 className="font-serif tracking-widest">{t("example")}</h3>
            <p className="font-serif text-base leading-snug font-semibold">{item.exT}</p>
            {item.exEn ? <p lang="en" className="font-en text-sm text-soft italic">{item.exEn}</p> : null}
          </div>
        ) : null}
      </div>
      <p className="mt-2 shrink-0 text-center text-sm text-soft">{t("hide")}</p>
    </div>
  );
}

const POEM_FIT_CHARS = 19;

function FitLine({ text, className = "", maxPx = 36, minPx = 22 }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    let size = maxPx;
    el.style.fontSize = `${size}px`;
    el.style.whiteSpace = "nowrap";
    while (size > minPx && el.scrollWidth > el.clientWidth) {
      size -= 1;
      el.style.fontSize = `${size}px`;
    }
  }, [text, maxPx, minPx]);
  return <p ref={ref} className={`w-full overflow-hidden text-center whitespace-nowrap ${className}`}>{text}</p>;
}

function PoemLine({ text }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const width = el.clientWidth || 320;
    const size = Math.max(52, Math.min(176, Math.floor(width / (POEM_FIT_CHARS * 0.78))));
    el.style.fontSize = `${size}px`;
  }, [text]);
  return <p ref={ref} className="w-full overflow-hidden text-center font-serif font-bold whitespace-nowrap">{text}</p>;
}

function DeckCard({ item, index, total, showPractice = false, showDrill = false, drillAction = "idiom", roomy = false }) {
  const study = useStudy();
  const poem = isPoem(item);
  const atStart = index <= 0;
  const atEnd = index >= total - 1;
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_minmax(0,1fr)_auto] gap-2">
      <div className="flex items-center justify-between">
        <span className={`rounded-full bg-gold/15 text-gold ${roomy ? "px-3 py-1 text-base" : "px-3 py-1 text-sm"}`}>{t("learning")}</span>
        <p className={roomy ? "font-serif text-xl" : ""}>{index + 1} / {total}</p>
      </div>
      <Bar tall={roomy} value={Math.round(((index + 1) / total) * 100)} />
      <div className={`min-h-0 overflow-hidden rounded-3xl border border-ink/10 bg-card [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${poem || study.state.flipped ? "flex flex-col p-4" : "flex flex-col p-3"}`}>
        {poem ? (
          <div className="flex min-h-0 w-full flex-1 flex-col">
            <CardFace item={item} flipped />
          </div>
        ) : (
          <button type="button" className="flex min-h-0 w-full flex-1 flex-col text-left outline-none focus:outline-none" onClick={study.flip}>
            <CardFace item={item} flipped={study.state.flipped} />
          </button>
        )}
      </div>
      <div className="relative flex flex-wrap items-center gap-2">
        <button type="button" className={ghost} disabled={atStart} onClick={() => study.step(-1)}>{t("prev")}</button>
        <button type="button" className={ghost} disabled={atEnd} onClick={() => study.step(1)}>{t("next")}</button>
        {showPractice || showDrill ? (
          <div className="pointer-events-none absolute inset-x-0 flex justify-center gap-2">
            {showPractice ? <button type="button" className={`${hot} pointer-events-auto`} onClick={study.startIdiomPractice}>{t("startPractice")}</button> : null}
            {showDrill ? <button type="button" className={`${hot} pointer-events-auto`} onClick={drillAction === "poetry" ? study.startPoetryDrill : study.startIdiomDrill}>{t("startDrill")}</button> : null}
            <button type="button" className={`${hot} pointer-events-auto`} onClick={() => study.go("home")}>{t("leave")}</button>
          </div>
        ) : null}
        {poem ? null : <button type="button" className={`${ghost} ml-auto`} onClick={() => study.speak(head(item))}>{t("speak")}</button>}
      </div>
    </div>
  );
}

function Strip({ list, index, kind }) {
  const study = useStudy();
  const ref = useRef(null);
  useLayoutEffect(() => {
    const strip = ref.current;
    const active = strip?.querySelector("[data-on='1']");
    if (!strip || !active) return;
    strip.scrollLeft = Math.max(0, active.offsetLeft - (strip.clientWidth - active.offsetWidth) / 2);
  }, [index, list]);
  return (
    <div ref={ref} className="flex gap-2 overflow-x-auto pb-1">
      {list.map((item, i) => (
        <button key={item.id} type="button" data-on={i === index ? "1" : "0"} className={`shrink-0 rounded-full border px-3 py-1 ${i === index ? "border-ink bg-ink text-paper" : "border-ink/15 bg-card"}`} onClick={() => study.jump(kind, i)}>
          {head(item)}
        </button>
      ))}
    </div>
  );
}

export function VocabView() {
  const study = useStudy();
  const list = study.filteredVocab();
  const item = list[study.state.vocabIndex];
  const topics = [{ id: "all", t: t("all") }, ...study.data.topics];
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_minmax(0,1fr)] gap-2">
      <div>
        <h2 className="font-serif text-3xl font-bold">{t("vocab")}</h2>
        <p className="text-soft">{t("vocabLead")}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {topics.map((topic) => <Chip key={topic.id} on={study.state.topic === topic.id} onClick={() => study.setTopic(topic.id)}>{topic.t}</Chip>)}
        </div>
      </div>
      <Strip list={list} index={study.state.vocabIndex} kind="vocab" />
      {item ? <DeckCard item={item} index={study.state.vocabIndex} total={list.length} /> : <p className="text-soft">{t("fresh")}</p>}
    </div>
  );
}

export function IdiomView() {
  const study = useStudy();
  if (study.state.idiomDrill) return <IdiomDrill />;
  if (study.state.idiomPractice) return <IdiomPractice />;
  const list = study.filteredIdioms();
  const item = list[study.state.idiomIndex];
  const atEnd = study.state.idiomIndex >= list.length - 1;
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-3">
      <div className="flex items-center justify-end gap-2">
        <SettingsDock menu="down" buttonClassName={`${ghost} min-h-12 min-w-24 px-5`} />
        <button type="button" className={`${ghost} min-h-12 min-w-24 px-5`} onClick={() => study.go("home")}><span className="text-lg">{t("backHome")}</span></button>
      </div>
      {item ? <DeckCard item={item} index={study.state.idiomIndex} total={list.length} showPractice={atEnd} showDrill={atEnd} roomy /> : <p>{t("fresh")}</p>}
    </div>
  );
}

function IdiomPractice() {
  const study = useStudy();
  const practice = study.state.idiomPractice;
  if (practice.done) {
    const missed = practice.items.some((q, index) => {
      const picked = practice.answers?.[index];
      return !(picked != null && q.optionIds[picked] === q.answerId);
    });
    return (
      <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-serif text-4xl font-bold">{t("practiceDone")}</h2>
            <p>{practice.score} / {practice.items.length}</p>
          </div>
          <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
        </div>
        <div className="overflow-auto">
          <ul className="grid gap-3">
            {practice.items.map((q) => {
              const item = study.byId(study.data.idioms, q.id);
              return (
                <li key={q.id} className="rounded-2xl border border-ink/10 bg-card px-4 py-3 text-left">
                  <p className="font-serif text-3xl font-bold tracking-widest">{head(item)}</p>
                  <p className="mt-1.5 font-serif text-lg leading-snug">{withDrillStop(item.glossT)}</p>
                </li>
              );
            })}
          </ul>
          {missed ? <p className="mt-3 text-clay">{study.state.authUser ? t("mistakeCloud") : t("mistakeQueued")}</p> : null}
          {missed && !study.state.authUser ? <button type="button" className={`${ghost} mt-2`} onClick={study.signIn}>{t("signIn")}</button> : null}
        </div>
        <div className="flex gap-2">
          <button type="button" className={ghost} onClick={study.exitPractice}>{t("backIdiom")}</button>
          <button type="button" className={hot} onClick={study.startIdiomPractice}>{t("againPractice")}</button>
        </div>
      </div>
    );
  }
  const q = practice.items[practice.index];
  const item = study.byId(study.data.idioms, q.id);
  const options = q.optionIds.map((id) => {
    const option = study.byId(study.data.idioms, id);
    return { text: head(option), detail: withDrillStop(option.glossT), ok: id === q.answerId };
  });
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)_auto] gap-3">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-4xl font-bold">{t("practice")}</h2>
        <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
      </div>
      <div className="flex justify-between"><span className="text-gold">{t("learning")}</span><span>{practice.index + 1} / {practice.items.length}</span></div>
      <Bar value={Math.round(((practice.index + 1) / practice.items.length) * 100)} />
      <div className="flex min-h-0 flex-col justify-center gap-4 overflow-auto">
        <p className="text-center font-serif text-2xl">{withDrillStop(item.glossT)}</p>
        <Choices options={options} picked={practice.picked} onPick={study.pickPractice} />
      </div>
      <div className="flex gap-2">
        <button type="button" className={ghost} onClick={study.exitPractice}>{t("backIdiom")}</button>
        <button type="button" className={hot} disabled={practice.picked == null} onClick={study.nextPractice}>{practice.index + 1 === practice.items.length ? t("seeResult") : t("nextQ")}</button>
      </div>
    </div>
  );
}

function IdiomDrill() {
  const study = useStudy();
  const drill = study.state.idiomDrill;
  const elapsed = study.formatDrillTime(study.drillElapsed());
  if (drill.done) {
    const marked = Object.keys(drill.marked || {}).length;
    return (
      <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-4">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold">{t("drillDone")}</h2>
          <p className="mt-1 text-xl">{t("drillTime")} {study.formatDrillTime(drill.baseMs)}</p>
        </div>
        <div className="min-h-0 overflow-auto">
          <div className="flex min-h-full flex-col justify-center py-2">
            <ul className="grid gap-3">
              {drill.items.map((entry) => (
                <li key={entry.id} className="rounded-2xl border border-ink/10 bg-card px-4 py-3 text-left">
                  <p className="font-serif text-3xl font-bold tracking-widest">{head(entry)}</p>
                  <div className="mt-1.5 font-serif text-lg leading-snug">
                    {drillGlossLines(entry.glossT).map((line) => <p key={line}>{line}</p>)}
                  </div>
                </li>
              ))}
            </ul>
            {marked ? <p className="mt-3 text-center text-clay">{study.state.authUser ? t("mistakeCloud") : t("mistakeQueued")}</p> : null}
            {marked && !study.state.authUser ? <button type="button" className={`${ghost} mx-auto mt-2 block`} onClick={study.signIn}>{t("signIn")}</button> : null}
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" className={`${ghost} min-h-12 px-5`} onClick={study.exitIdiomDrill}><span className="text-lg">{t("backIdiom")}</span></button>
          <button type="button" className={`${hot} min-h-12 px-5`} onClick={study.startIdiomDrill}><span className="text-lg">{t("againDrill")}</span></button>
        </div>
      </div>
    );
  }
  const begun = Boolean(drill.begun);
  const item = begun ? drill.items[drill.index] : null;
  const lines = item ? drillGlossLines(item.glossT) : [];
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)_auto] gap-3">
      <div className="flex items-center justify-end gap-2">
        <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
      </div>
      <div className="flex items-center justify-between gap-3">
        <p>{begun ? `${drill.index + 1} / ${drill.items.length}` : `0 / ${drill.items.length}`}</p>
        <p className="font-serif text-2xl">{elapsed}</p>
      </div>
      <Bar value={begun ? Math.round(((drill.index + 1) / drill.items.length) * 100) : 0} />
      <div className="grid min-h-0 place-items-center">
        {begun ? (
          lines.length > 1 ? (
            <div className="w-fit space-y-6 text-left font-serif text-3xl">
              {lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          ) : (
            <FitLine text={lines[0]} className="max-w-full px-4 font-serif font-semibold" maxPx={36} minPx={22} />
          )
        ) : (
          <button type="button" className="text-ink" onClick={study.beginIdiomDrill}><span className="font-serif text-8xl font-bold">{t("startTimer")}</span></button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={`${hot} ml-auto`} disabled={!begun} onClick={() => study.stepIdiomDrill(1)}>{begun && drill.index + 1 === drill.items.length ? t("seeResult") : t("nextQ")}</button>
      </div>
    </div>
  );
}

export function CultureView() {
  const study = useStudy();
  const list = study.data.culture;
  const item = list[study.state.cultureIndex];
  const picked = study.state.culturePicks[item.id];
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_minmax(0,1fr)] gap-2">
      <div>
        <h2 className="font-serif text-3xl font-bold">{t("culture")}</h2>
        <p className="text-soft">{t("cultureLead")}</p>
      </div>
      <Strip list={list} index={study.state.cultureIndex} kind="culture" />
      <Knowledge item={item} index={study.state.cultureIndex} total={list.length} picked={picked} kind="culturePicks" />
    </div>
  );
}

function Knowledge({ item, index, total, picked, kind }) {
  const study = useStudy();
  const options = item.options.map((option) => ({ text: option.t, ok: option.ok }));
  return (
    <div className="grid min-h-0 grid-rows-[auto_auto_minmax(0,1fr)_auto] gap-2">
      <div className="flex justify-between"><span className="text-gold">{t("learning")}</span><span>{index + 1} / {total}</span></div>
      <Bar value={Math.round(((index + 1) / total) * 100)} />
      <div className="min-h-0 overflow-auto rounded-3xl border border-ink/10 bg-card p-4">
        <button type="button" className="block w-full text-left outline-none focus:outline-none" onClick={study.flip}>
          <CardFace item={item} flipped={study.state.flipped} />
        </button>
        {study.state.flipped ? (
          <div className="mt-4">
            <p className="mb-2 font-serif text-xl">{item.askT}</p>
            <Choices options={options} picked={picked} onPick={(choice) => study.pickKnow(kind, item.id, choice)} />
            {picked == null ? null : <p className="mt-3 rounded-xl bg-[#f4efe2] p-3"><b>{t("explain")}</b> {item.whyT}</p>}
          </div>
        ) : null}
      </div>
      <div className="flex gap-2">
        <button type="button" className={ghost} disabled={index <= 0} onClick={() => study.step(-1)}>{t("prev")}</button>
        <button type="button" className={ghost} disabled={index >= total - 1} onClick={() => study.step(1)}>{t("next")}</button>
        <button type="button" className={`${ghost} ml-auto`} onClick={() => study.speak(head(item))}>{t("speak")}</button>
      </div>
    </div>
  );
}

export function PoetryView() {
  const study = useStudy();
  if (study.state.poetryDrill) return <PoetryDrill />;
  const list = study.data.poems;
  const item = list[study.state.poetryIndex];
  const atEnd = list.length && study.state.poetryIndex >= list.length - 1;
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)] gap-2">
      <div className="flex items-center justify-end gap-2">
        <SettingsDock menu="down" buttonClassName={`${ghost} min-h-12 min-w-24 px-5`} />
        <button type="button" className={`${ghost} min-h-12 min-w-24 px-5`} onClick={() => study.go("home")}><span className="text-lg">{t("backHome")}</span></button>
      </div>
      {item ? <DeckCard item={item} index={study.state.poetryIndex} total={list.length} showDrill={atEnd} drillAction="poetry" roomy /> : <p>{t("fresh")}</p>}
    </div>
  );
}

function PoetryDrill() {
  const study = useStudy();
  const drill = study.state.poetryDrill;
  if (drill.done) {
    return (
      <div className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-4">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold">{t("drillDone")}</h2>
          <p className="mt-1 text-xl">{t("drillTime")} {study.formatDrillTime(drill.baseMs)}</p>
        </div>
        <div className="min-h-0 overflow-auto">
          <div className="flex min-h-full flex-col justify-center py-2">
            <ul className="grid gap-3">
              {drill.items.map((entry) => (
                <li key={entry.id} className="rounded-2xl border border-ink/10 bg-card px-4 py-3 text-center">
                  <p className="text-soft">{entry.dynastyT} · {entry.authorT} · 《{head(entry)}》</p>
                  <p className="mt-2 overflow-hidden font-serif text-2xl font-bold whitespace-nowrap">{poemVerseText(entry)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-3">
          <button type="button" className={`${ghost} min-h-12 px-5`} onClick={study.exitPoetryDrill}><span className="text-lg">{t("backPoetry")}</span></button>
          <button type="button" className={`${hot} min-h-12 px-5`} onClick={study.startPoetryDrill}><span className="text-lg">{t("againDrill")}</span></button>
        </div>
      </div>
    );
  }
  const begun = Boolean(drill.begun);
  const item = begun ? drill.items[drill.index] : null;
  return (
    <div className="grid h-full min-h-0 grid-rows-[auto_auto_minmax(0,1fr)_auto] gap-3">
      <div className="flex items-center justify-end gap-2">
        <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
      </div>
      <div className="flex items-center justify-between">
        <p>{begun ? `${drill.index + 1} / ${drill.items.length}` : `0 / ${drill.items.length}`}</p>
        <p className="font-serif text-2xl">{study.formatDrillTime(study.drillElapsed())}</p>
      </div>
      <div className="grid place-items-center text-center font-serif text-4xl">
        {begun ? (() => {
          const prompt = poemDrillHint(item, drill);
          const blank = prompt.showBlank ? (
            <span
              className="mb-1 inline-block h-0 shrink-0 border-b-2 border-ink"
              style={{ width: `${prompt.blankChars}em` }}
              aria-hidden="true"
            />
          ) : null;
          return (
            <div className="flex w-full max-w-4xl flex-nowrap items-end justify-center gap-4 px-4">
              {prompt.blankSide === "left" ? blank : null}
              <p className="shrink-0 font-serif text-4xl font-bold whitespace-nowrap">{prompt.text}</p>
              {prompt.blankSide === "right" ? blank : null}
            </div>
          );
        })() : <button type="button" className="text-ink" onClick={study.beginPoetryDrill}><span className="font-serif text-8xl font-bold">{t("startTimer")}</span></button>}
      </div>
      <div className="flex gap-2">
        <button type="button" className={`${hot} ml-auto`} disabled={!begun} onClick={() => study.stepPoetryDrill(1)}>{begun && drill.index + 1 === drill.items.length ? t("seeResult") : t("nextQ")}</button>
      </div>
    </div>
  );
}

export function GrammarView() {
  const study = useStudy();
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold">{t("grammar")}</h2>
      <p className="mb-4 text-soft">{t("grammarLead")}</p>
      <div className="grid gap-4">
        {study.data.grammar.map((item) => {
          const picked = study.state.grammarPicks[item.id];
          const options = item.options.map((option) => ({ text: head(option), ok: option.ok }));
          return (
            <article key={item.id} className="rounded-3xl border border-ink/10 bg-card p-4">
              <p className="font-serif text-2xl">{head(item)}</p>
              <p className="font-en text-soft">{item.en}</p>
              <p>{study.L(item, "explain")}</p>
              {item.trapT ? <p className="rounded-xl bg-[#fdeceb] p-3"><b>{t("watch")}　</b>{study.L(item, "trap")}</p> : null}
              <ul className="my-2 list-disc pl-5">{item.examples.map((example) => <li key={head(example)}>{head(example)}</li>)}</ul>
              <p className="mb-2 font-serif">{study.L(item, "prompt")}</p>
              <Choices options={options} picked={picked} onPick={(choice) => study.pickGrammar(item.id, choice)} />
              {picked == null ? null : <p className="mt-3 rounded-xl bg-[#f4efe2] p-3"><b>{t("explain")}</b> {study.L(item, "why")}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function FixView() {
  const study = useStudy();
  const fx = study.state.fix;
  if (!fx) return null;
  if (fx.done) {
    const seal = fx.score / fx.order.length >= 0.8 ? t("pass") : t("retry");
    return (
      <section className="text-center">
        <p className="font-serif text-5xl text-cinnabar">{seal}</p>
        <h2 className="mt-2 font-serif text-3xl">{t("fix")}</h2>
        <p className="font-serif text-5xl">{fx.score}<span className="text-2xl text-soft"> / {fx.order.length}</span></p>
        <div className="mt-4 flex justify-center gap-2">
          <button type="button" className={hot} onClick={study.restartFix}>{t("redo")}</button>
          <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
        </div>
      </section>
    );
  }
  const item = study.byId(study.data.fixes, fx.order[fx.index]);
  const options = fx.optionOrder[item.id].map((index) => ({ text: head(item.options[index]), ok: item.options[index].ok }));
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold">{t("fix")}</h2>
      <p className="text-soft">{t("fixLead")}</p>
      <p className="my-2">{fx.index + 1} / {fx.order.length}</p>
      <Bar value={Math.round((fx.index / fx.order.length) * 100)} />
      <p className="my-4 font-serif text-2xl">{study.L(item, "fault")}</p>
      <Choices options={options} picked={fx.picked} onPick={study.pickFix} />
      {fx.picked == null ? null : <p className="mt-3 rounded-xl bg-[#f4efe2] p-3"><b>{t("explain")}</b> {study.L(item, "why")}</p>}
      <button type="button" className={`${hot} mt-4`} disabled={fx.picked == null} onClick={study.nextFix}>{fx.index + 1 === fx.order.length ? t("seeResult") : t("nextQ")}</button>
    </div>
  );
}

function ReadingPanel({ immersive = false }) {
  const study = useStudy();
  const list = study.data.readings;
  const item = study.byId(list, study.state.readingId) || list[0];
  const [tab, setTab] = useState("bg");
  const bucket = study.state.reading[item.id] || { picks: {}, submitted: false, note: false };
  const tabs = [
    { id: "bg", label: t("readingBg") },
    { id: "text", label: t("readingText") },
    { id: "practice", label: t("readingPractice") }
  ];

  return (
    <div className={`grid min-h-0 gap-3 ${immersive ? "h-full grid-rows-[auto_auto_auto_minmax(0,1fr)]" : ""}`}>
      <div>
        <p className="text-sm tracking-widest text-gold">{t("readingTerm")} · {t("readingSummary")}</p>
        <h2 className="font-serif text-3xl font-bold tracking-widest">{t("reading")}</h2>
        <p className="text-soft">{t("readLead")}</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {list.map((row) => (
          <button
            key={row.id}
            type="button"
            className={`shrink-0 rounded-full border px-3 py-1 ${row.id === item.id ? "border-ink bg-ink text-paper" : "border-ink/15 bg-card"}`}
            onClick={() => {
              study.chooseReading(row.id);
              setTab("bg");
            }}
          >
            {row.t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm tracking-widest text-gold">{item.dynastyT} · {item.authorT} · {item.tipT}</p>
          <h3 className="font-serif text-3xl font-bold tracking-widest">{item.t}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tabs.map((entry) => (
            <Chip key={entry.id} on={tab === entry.id} onClick={() => setTab(entry.id)}>{entry.label}</Chip>
          ))}
        </div>
      </div>
      <div className={`min-h-0 overflow-auto rounded-3xl border border-ink/10 bg-card p-4 ${immersive ? "" : "max-h-[70vh]"}`}>
        {tab === "bg" ? (
          <div className="grid gap-4">
            <ReadingBlock title={t("readingBio")} items={item.bioT} />
            <ReadingBlock title={t("readingPoints")} items={item.pointsT} />
            <ReadingBlock title={t("readingCraft")} items={item.craftT} />
          </div>
        ) : null}
        {tab === "text" ? (
          <div className="grid gap-3">
            {(item.lines || []).map((line, index) => (
              <article key={`${item.id}-${index}`} className="rounded-2xl border border-ink/10 bg-paper/70 px-4 py-3">
                <p className="mb-1 text-xs tracking-widest text-soft">{t("readingOriginal")}</p>
                <p className="font-serif text-xl leading-relaxed font-semibold">{line.t}</p>
                <p className="mt-3 mb-1 text-xs tracking-widest text-soft">{t("readingGloss")}</p>
                <p className="text-soft leading-relaxed">{line.glossT}</p>
              </article>
            ))}
          </div>
        ) : null}
        {tab === "practice" ? (
          <div className="grid gap-5">
            {(item.questions || []).map((question, qIndex) => {
              const picked = study.pickedAt(bucket.picks, qIndex);
              const options = question.options.map((option, index) => ({
                text: option.t || option,
                ok: index === question.answer
              }));
              return (
                <article key={`${item.id}-q${qIndex}`} className="rounded-2xl border border-ink/10 bg-paper/70 p-4">
                  <p className="mb-3 font-serif text-xl">{qIndex + 1}. {question.t}</p>
                  {bucket.submitted ? (
                    <Choices options={options} picked={picked} onPick={() => {}} />
                  ) : (
                    <div className="grid gap-2">
                      {options.map((option, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`min-h-12 rounded-2xl border px-4 py-3 text-left ${Number(picked) === index ? "border-ink bg-ink/5" : "border-ink/15 bg-card hover:border-ink/40"}`}
                          onClick={() => study.pickRead(item.id, qIndex, index)}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}
                  {bucket.submitted ? (
                    <p className="mt-3 rounded-xl bg-[#f4efe2] p-3"><b>{t("explain")}</b> {question.whyT}</p>
                  ) : null}
                </article>
              );
            })}
            <div className="flex flex-wrap gap-2">
              {bucket.submitted ? (
                <>
                  <p className="w-full font-serif text-2xl">{bucket.score} / {(item.questions || []).length}</p>
                  <button type="button" className={hot} onClick={() => study.redoReading(item.id)}>{t("redo")}</button>
                </>
              ) : (
                <>
                  {bucket.note ? <p className="w-full text-clay">{t("needAll")}</p> : null}
                  <button type="button" className={hot} onClick={() => study.submitRead(item.id)}>{t("check")}</button>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ReadingBlock({ title, items }) {
  return (
    <section className="rounded-2xl border border-ink/10 bg-paper/70 p-4">
      <h4 className="mb-3 font-serif text-2xl tracking-widest text-cinnabar">{title}</h4>
      <ul className="grid gap-2">
        {(items || []).map((line) => (
          <li key={line} className="relative pl-4 text-[1.05rem] leading-relaxed before:absolute before:top-2.5 before:left-0 before:size-1.5 before:rounded-full before:bg-cinnabar/70">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ReadingView() {
  return <ReadingPanel />;
}

export function ReadingPageView() {
  const study = useStudy();
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-paper text-ink">
      <div className="flex items-center justify-end px-4 py-3">
        <button type="button" className={ghost} onClick={() => study.go("home")}>{t("leave")}</button>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden px-4 pb-4">
        <ReadingPanel immersive />
      </div>
    </div>
  );
}

export function QuizView() {
  const study = useStudy();
  const quiz = study.state.quiz;
  if (!quiz) return null;
  if (quiz.done) {
    const seal = quiz.score / quiz.items.length >= 0.8 ? t("pass") : t("retry");
    return (
      <section className="text-center">
        <p className="font-serif text-5xl text-cinnabar">{seal}</p>
        <h2 className="font-serif text-3xl">{t("score")}</h2>
        <p className="font-serif text-5xl">{quiz.score}<span className="text-2xl text-soft"> / {quiz.items.length}</span></p>
        <ul className="mx-auto mt-4 max-w-xl text-left">
          {quiz.items.map((q, index) => {
            const ok = study.questionCorrect(q, quiz.answers[index]);
            return <li key={index} className={`mb-2 rounded-2xl p-3 ${ok ? "bg-pine/10" : "bg-cinnabar/10"}`}><b>{shortPrompt(study, q)}</b><span className="mt-1 block">{shortAnswer(study, q)}</span></li>;
          })}
        </ul>
        <div className="mt-4 flex justify-center gap-2">
          <button type="button" className={hot} onClick={study.restartQuiz}>{t("againQuiz")}</button>
          <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
        </div>
      </section>
    );
  }
  const q = quiz.items[quiz.index];
  const options = study.quizOptions(q);
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold">{t("quiz")}</h2>
      <p className="text-soft">{t("quizLead")}</p>
      <div className="my-2 flex justify-between"><span>{quizKind(q)}</span><span>{quiz.index + 1} / {quiz.items.length}</span></div>
      <Bar value={Math.round((quiz.index / quiz.items.length) * 100)} />
      <div className="my-4">{quizPrompt(study, q)}</div>
      <Choices options={options} picked={quiz.picked} onPick={study.pickQuiz} />
      {quiz.picked == null ? null : <p className="mt-3 rounded-xl bg-[#f4efe2] p-3"><b>{t("explain")}</b> {quizWhy(study, q)}</p>}
      <button type="button" className={`${hot} mt-4`} disabled={quiz.picked == null} onClick={study.nextQuiz}>{quiz.index + 1 === quiz.items.length ? t("seeResult") : t("nextQ")}</button>
    </div>
  );
}

function quizKind(q) {
  if (q.type === "vocab") return t("vocab");
  if (q.type === "idiom") return t("idiom");
  if (q.type === "grammar") return t("grammar");
  return t("fix");
}

function quizPrompt(study, q) {
  if (q.type === "idiom") {
    const item = study.byId(study.data.idioms, q.id);
    return <><p className="font-serif text-xl">{t("whichIdiom")}</p><p>{item.glossT}</p></>;
  }
  if (q.type === "fix") {
    const item = study.byId(study.data.fixes, q.id);
    return <><p className="font-serif text-xl">{t("chooseFix")}</p><p>{study.L(item, "fault")}</p></>;
  }
  if (q.type === "vocab") return <p className="font-serif text-xl">「{head(study.byId(study.data.vocab, q.id))}」{t("meaningQ")}</p>;
  return <p className="font-serif text-xl">{study.L(study.byId(study.data.grammar, q.id), "prompt")}</p>;
}

function quizWhy(study, q) {
  if (q.type === "vocab") {
    const item = study.byId(study.data.vocab, q.id);
    return `${head(item)}（${item.pinyin}）· ${item.en}。${item.exT || ""}`;
  }
  if (q.type === "idiom") {
    const item = study.byId(study.data.idioms, q.id);
    return `${head(item)}：${item.trapT || item.glossT}`;
  }
  if (q.type === "grammar") return study.L(study.byId(study.data.grammar, q.id), "why");
  return study.L(study.byId(study.data.fixes, q.id), "why");
}

function shortPrompt(study, q) {
  if (q.type === "vocab") return head(study.byId(study.data.vocab, q.id));
  if (q.type === "idiom") return head(study.byId(study.data.idioms, q.id));
  if (q.type === "grammar") return head(study.byId(study.data.grammar, q.id));
  return study.L(study.byId(study.data.fixes, q.id), "fault");
}

function shortAnswer(study, q) {
  if (q.type === "vocab") return study.byId(study.data.vocab, q.id).en;
  if (q.type === "idiom") return study.byId(study.data.idioms, q.id).en;
  if (q.type === "grammar") return head(study.byId(study.data.grammar, q.id).options.find((option) => option.ok));
  return head(study.byId(study.data.fixes, q.id).options.find((option) => option.ok));
}

export function SessionView() {
  const study = useStudy();
  const session = study.state.session;
  if (!session || session.phase === "summary") {
    const results = session?.results || [];
    const okCount = results.filter((item) => item.ok).length;
    const missed = results.filter((item) => !item.ok);
    const seal = results.length && okCount / results.length >= 0.8 ? t("pass") : t("retry");
    return (
      <section className="text-center">
        <p className="font-serif text-5xl text-cinnabar">{seal}</p>
        <h2 className="font-serif text-3xl">{t("summary")}</h2>
        <p className="font-serif text-5xl">{okCount}<span className="text-2xl text-soft"> / {results.length}</span></p>
        {results.length ? (
          <ul className="mx-auto mt-4 max-w-xl text-left">
            {results.map((result) => {
              const item = study.findAny(result.id);
              return <li key={result.id} className={`mb-2 rounded-2xl p-3 ${result.ok ? "bg-pine/10" : "bg-cinnabar/10"}`}><b>{head(item)}</b><span className="block font-en">{item?.en || ""}</span></li>;
            })}
          </ul>
        ) : <p>{t("noMiss")}</p>}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {missed.length ? <button type="button" className="inline-flex min-h-11 items-center rounded-full border border-cinnabar/50 px-4 text-cinnabar" onClick={study.redoMissed}>{t("missed")}</button> : null}
          <button type="button" className={hot} onClick={study.restartSession}>{t("another")}</button>
          <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button>
        </div>
      </section>
    );
  }
  const item = session.queue[session.index];
  return (
    <div>
      <h2 className="font-serif text-3xl font-bold">{t("start")}</h2>
      <p className="mb-3 text-soft">{t("sessionLead")}</p>
      <CardFace item={item} flipped={study.state.flipped} />
      <div className="mt-4 flex gap-2">
        <button type="button" className={ghost} onClick={study.flip}>{study.state.flipped ? t("hide") : t("flipHint")}</button>
        <button type="button" className={ghost} onClick={() => study.grade(false)}>{t("again")}</button>
        <button type="button" className={hot} onClick={() => study.grade(true)}>{t("got")}</button>
      </div>
    </div>
  );
}
