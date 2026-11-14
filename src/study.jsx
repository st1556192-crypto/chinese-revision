import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createEngine } from "./lib/engine.js";

const StudyContext = createContext(null);

export function StudyProvider({ children }) {
  const [version, bump] = useState(0);
  const engineRef = useRef(null);
  if (!engineRef.current) engineRef.current = createEngine(() => bump((value) => value + 1));

  useEffect(() => engineRef.current.mount(), []);

  const engine = engineRef.current;
  const locked = ["vocab", "idiom", "culture", "poetry"].includes(engine.state.view);
  useEffect(() => {
    document.documentElement.classList.toggle("study-lock", locked);
    document.body.classList.toggle("study-lock", locked);
    document.title = "中文";
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) theme.setAttribute("content", "#ffffff");
  });

  return <StudyContext.Provider value={{ engine, version }}>{children}</StudyContext.Provider>;
}

export function useStudy() {
  return useContext(StudyContext).engine;
}
