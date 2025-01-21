import "./SetColor.css";
import { useState } from "react";
import SetColorButton from "./setColorButton";
import { colors } from "../../data";

export default function SetColor() {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function ChangeColor(number) {
    setContextColor(colors[number]);
  }
  const [contextColor, setContextColor] = useState("Нажми на кнопку снизу");
  const [divColor, setDivColor] = useState("#fdf5e6");
  return (
    <section className="centered">
      <div className="selectColor">
        <p>{contextColor}</p>
      </div>
      <SetColorButton
        onClick={() => ChangeColor(getRandomInt(0, colors.length))}
      >
        Случайный цвет
      </SetColorButton>
    </section>
  );
}
