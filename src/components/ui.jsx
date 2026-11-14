import { useEffect, useRef, useState } from "react";
import { t } from "../copy.js";
import { useStudy } from "../study.jsx";

export const hot = "inline-flex items-center justify-center min-h-11 rounded-full bg-cinnabar px-4 text-white disabled:cursor-default disabled:opacity-45";
export const ghost = "inline-flex items-center justify-center min-h-11 rounded-full border border-ink/20 bg-card px-4 text-ink disabled:cursor-default disabled:opacity-45";
export const linkBtn = "text-soft underline-offset-2 hover:underline";

export function Bar({ value, tall = false }) {
  return (
    <div className={`${tall ? "h-2" : "h-1.5"} overflow-hidden rounded-full bg-ink/10`} aria-hidden="true">
      <span className="block h-full bg-cinnabar" style={{ width: `${value}%` }} />
    </div>
  );
}

export function Choices({ options, picked, onPick }) {
  const revealed = picked != null && picked !== "";
  const hasDetail = options.some((option) => option.detail);
  return (
    <div className="grid gap-2">
      {options.map((option, index) => {
        const selected = Number(picked) === index;
        const tone = revealed
          ? option.ok
            ? "border-pine bg-pine/10"
            : selected
              ? "border-cinnabar bg-cinnabar/10"
              : "opacity-55"
          : "border-ink/15 bg-card hover:border-ink/40";
        return (
          <button
            key={index}
            type="button"
            disabled={revealed}
            onClick={() => onPick(index)}
            className={`rounded-2xl border text-left ${hasDetail ? "grid min-h-[7rem] grid-rows-[1fr_auto_1fr] px-4 py-2" : "min-h-12 px-4 py-3"} ${tone}`}
          >
            {hasDetail ? <span aria-hidden="true" /> : null}
            <span className="block">
              <span className="block font-serif text-3xl font-bold tracking-widest">{option.text}</span>
              {hasDetail && revealed ? (
                <span className="mt-1.5 block text-lg leading-snug text-soft">
                  {option.detail || "\u00a0"}
                </span>
              ) : null}
            </span>
            {hasDetail ? <span aria-hidden="true" /> : null}
          </button>
        );
      })}
    </div>
  );
}

export function StudyHead({ title, lead, home }) {
  const study = home;
  return (
    <header className="flex items-start justify-between gap-3">
      <div>
        <h2 className="font-serif text-3xl font-bold tracking-wide">{title}</h2>
        {lead ? <p className="mt-1 text-soft">{lead}</p> : null}
      </div>
      {study ? <button type="button" className={ghost} onClick={() => study.go("home")}>{t("backHome")}</button> : null}
    </header>
  );
}

export function Chip({ on, children, onClick }) {
  return (
    <button type="button" onClick={onClick} className={`min-h-9 rounded-full border px-3 ${on ? "border-ink bg-ink text-paper" : "border-ink/15 bg-card"}`}>
      {children}
    </button>
  );
}

export function SettingsDock({ menu = "up", className = "", buttonClassName = ghost }) {
  const study = useStudy();
  const panelRef = useRef(null);
  const [fading, setFading] = useState(false);
  const open = Boolean(study?.state.settingsOpen);
  useEffect(() => {
    if (!study || !open) {
      setFading(false);
      return;
    }
    let idleTimer = 0;
    let fadeTimer = 0;
    const closeSlowly = () => {
      setFading(true);
      fadeTimer = window.setTimeout(() => {
        if (study.state.settingsOpen) study.toggleSettings();
        setFading(false);
      }, 900);
    };
    const arm = () => {
      window.clearTimeout(idleTimer);
      window.clearTimeout(fadeTimer);
      setFading(false);
      idleTimer = window.setTimeout(closeSlowly, 3000);
    };
    arm();
    const panel = panelRef.current;
    panel?.addEventListener("pointerdown", arm);
    return () => {
      window.clearTimeout(idleTimer);
      window.clearTimeout(fadeTimer);
      panel?.removeEventListener("pointerdown", arm);
    };
  }, [study, open]);
  if (!study) return null;
  const mode = study.codeMode();
  const color = study.multiColor() ? "multi" : "single";
  return (
    <div className={`relative ${className}`}>
      <button type="button" className={buttonClassName} aria-expanded={open} onClick={study.toggleSettings}><span className="text-lg">{t("settings")}</span></button>
      {open ? (
        <div
          ref={panelRef}
          className={`absolute right-0 z-20 w-52 rounded-2xl border border-ink/10 bg-card p-3 shadow-lg transition-opacity duration-[900ms] ${menu === "down" ? "top-12" : "bottom-12"} ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <p className="mb-2 text-sm text-soft">{t("codeDisplay")}</p>
          <div className="flex flex-wrap gap-2">
            <Chip on={mode === "jyutping"} onClick={() => study.setCodeMode("jyutping")}>粵拼</Chip>
            <Chip on={mode === "cangjie"} onClick={() => study.setCodeMode("cangjie")}>倉頡</Chip>
          </div>
          {mode === "cangjie" ? (
            <>
              <p className="mb-2 mt-3 text-sm text-soft">倉頡顏色</p>
              <div className="flex flex-wrap gap-2">
                <Chip on={color === "single"} onClick={() => study.setCangjieColor("single")}>單色</Chip>
                <Chip on={color === "multi"} onClick={() => study.setCangjieColor("multi")}>五色</Chip>
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
