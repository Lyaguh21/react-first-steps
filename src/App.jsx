import Header from "./components/Header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import React, { useState } from "react";
import { differences } from "./data";

export default function App() {
  const [content, setContent] = useState("Нажми на кнопку");
  function handleClick(type) {
    setContent(differences[type]);
    console.log(content);
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>BLABLABLA</h3>
          <Button
            isActive={content == differences.way}
            onClick={() => handleClick("way")}
          >
            Подход
          </Button>
          <Button
            isActive={content == differences.easy}
            onClick={() => handleClick("easy")}
          >
            Доступность
          </Button>
          <Button
            isActive={content == differences.program}
            onClick={() => handleClick("program")}
          >
            Концентрация
          </Button>
          <p>{content}</p>
        </section>
      </main>
    </div>
  );
}
