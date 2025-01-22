import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import SetColor from "./components/SetColor/SetColorSection";
import TabsSection from "./components/TabsSection";
import FeedbackSectionS from "./components/FeedbackSection";
import { useState } from "react";

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
      </main>
    </>
  );
}
