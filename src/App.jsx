import { useStudy } from "./study.jsx";
import { Home, Shell, VocabView, IdiomView, CultureView, PoetryView, GrammarView, FixView, ReadingView, ReadingPageView, QuizView, SessionView, PracticeReviewView } from "./components/views.jsx";

const DECKS = new Set(["vocab", "idiom", "culture", "poetry"]);

export default function App() {
  const study = useStudy();
  const view = study.state.view;
  if (view === "home") return <Home />;
  if (view === "reading-page") return <ReadingPageView />;
  const deck = DECKS.has(view);
  const hideTop = view === "idiom" || view === "poetry" || view === "practice-review";
  const hideSettings = study.state.idiomPractice || study.state.idiomDrill || study.state.poetryDrill || view === "idiom" || view === "poetry" || view === "practice-review";
  let body = null;
  if (view === "vocab") body = <VocabView />;
  else if (view === "idiom") body = <IdiomView />;
  else if (view === "culture") body = <CultureView />;
  else if (view === "poetry") body = <PoetryView />;
  else if (view === "grammar") body = <GrammarView />;
  else if (view === "fix") body = <FixView />;
  else if (view === "reading") body = <ReadingView />;
  else if (view === "quiz") body = <QuizView />;
  else if (view === "session") body = <SessionView />;
  else if (view === "practice-review") body = <PracticeReviewView />;
  return (
    <Shell deck={deck} hideTop={hideTop} hideSettings={hideSettings}>
      {body}
    </Shell>
  );
}
