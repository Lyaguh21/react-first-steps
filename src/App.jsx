import Header from "./components/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import SetColor from "./components/SetColor/SetColorSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
        <SetColor />
      </main>
    </>
  );
}
