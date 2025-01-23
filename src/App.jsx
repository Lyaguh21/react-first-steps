import Header from "./components/Header/Header";
import TeachingSection from "./components/main/TeachingSection";
import DifferencesSection from "./components/main/DifferencesSection";
import IntroSection from "./components/IntroSection";
import SetColor from "./components/main/SetColor/SetColorSection";
import TabsSection from "./components/TabsSection";
import FeedbackSectionS from "./components/feedback/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/effect/EffectSection";

export default function App() {
  const [tab, setTab] = useState("main");
  return (
    <>
      <Header />
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
            <SetColor />
          </>
        )}

        {tab == "feedback" && (
          <>
            <FeedbackSectionS />
          </>
        )}

        {tab == "effect" && (
          <>
            <EffectSection />
          </>
        )}
      </main>
    </>
  );
}
