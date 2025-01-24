import { useState } from "react";
import Button from "../../components/Button/Button";
import "./DashBoardForm.scss";

export default function DashBoardForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const handleClick = (event) => {
    event.preventDefault(); // Предотвращаем стандартное поведение кнопки
    if (onSubmit) {
      onSubmit({ title, subtitle });
      setTitle("");
      setSubtitle("");
    } else {
      console.error("onSubmit function is not defined");
    }
  };

  return (
    <section>
      <form id="remindersForm">
        <label htmlFor="titleReminders" className="label">
          Введите заголовок
        </label>
        <input
          className="control"
          maxlength="32"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="descriptionReminders">Введите подзаголовок</label>
        <input
          className="control"
          maxlength="50"
          type="text"
          id="subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
        />
        <Button id="setOnDesk" type="submit" onClick={handleClick}>
          Разместить на доске
        </Button>
      </form>
    </section>
  );
}
