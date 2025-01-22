import "./SetColor.css";
import { useState } from "react";
import SetColorButton from "./setColorButton";
import { colors } from "../../data";

export default function SetColor() {
  // возвращает рандомное число дон

  function getRandomInt() {
    let min = 0,
      max = colors.length - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // меняет надпись и цвет дон
  function ChangeColor(number) {
    setContextColor(colors[number].title);
    setDivColor(colors[number].color);
    console.log(number);
  }
  const [contextColor, setContextColor] = useState("Нажми на кнопку снизу");
  const [divColor, setDivColor] = useState("#fdf5e6");
  return (
    <section className="centered">
      <div className="selectColor" style={{ backgroundColor: `${divColor}` }}>
        <p>{contextColor}</p>
      </div>
      <SetColorButton onClick={() => ChangeColor(getRandomInt())}>
        Случайный цвет
      </SetColorButton>
    </section>
  );
}
