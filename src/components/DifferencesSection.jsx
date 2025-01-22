import { useState } from "react";
import { differences } from "../data";
import Button from "./Button/Button";

export default function DifferencesSection() {
  const [content, setContent] = useState("Нажми на кнопки сверху");
  function handleClick(type) {
    setContent(differences[type]);
  }
  return (
    <section
      style={{
        paddingTop: "20px",
        backgroundColor: "#8d8c89",
        height: "175px",
        marginBottom: "20px",
      }}
    >
      <h3 className="centered">Ниже тест всяких приколюх</h3>
      <div className="centered" style={{ marginTop: "10px" }}>
        <Button
          className="buttonDifferences"
          isActive={content == differences.way}
          onClick={() => handleClick("way")}
        >
          Подход
        </Button>
        <Button
          className="buttonDifferences"
          isActive={content == differences.easy}
          onClick={() => handleClick("easy")}
        >
          Доступность
        </Button>
        <Button
          className="buttonDifferences"
          isActive={content == differences.program}
          onClick={() => handleClick("program")}
        >
          Концентрация
        </Button>
      </div>
      <p className="centered">{content}</p>
    </section>
  );
}
