import Header from "./components/Header/Header";
import TeachingSection from "./components/main/TeachingSection";
import DifferencesSection from "./components/main/DifferencesSection";
import IntroSection from "./components/IntroSection";
import SetColor from "./components/main/SetColor/SetColorSection";
import TabsSection from "./components/TabsSection";
import FeedbackSectionS from "./components/feedback/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/effect/EffectSection";
import DashBoardSection from "./dashboard/DashBoardSection";

export default function App() {
  const [tab, setTab] = useState("dashboard");
  return (
    <>
      <Header />
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab == "main" && (
          <>
            <IntroSection />
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

        {tab == "dashboard" && (
          <>
            <DashBoardSection />
          </>
        )}
      </main>
    </>
  );
}
