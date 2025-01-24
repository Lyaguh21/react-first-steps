import { use, useState } from "react";
import Button from "../../components/Button/Button";
import "./DashBoardForm.scss";
export default function DashBoardForm() {
  const [formReminders, setFormReminders] = useState({
    titleReminders: "",
    descriptionReminders: "",
    hasErorSetTitle: false,
  });
  function handleTitleRemindersChange(event) {
    setFormReminders((prev) => ({
      ...prev,
      titleReminders: event.target.value,
      hasErorSetTitle: event.target.value.trim().length == 0,
    }));
  }
  return (
    <section>
      <form action="" id="remindersForm">
        <label htmlFor="titleReminders" className="label">
          Введите заголовок
        </label>
        <input
          className="control"
          id="titleReminders"
          type="text"
          value={formReminders.titleReminders}
          onChange={handleTitleRemindersChange}
          style={{
            border: formReminders.hasErorSetTitle ? "1.7px solid red" : null,
          }}
          placeholder={
            formReminders.hasErorSetTitle ? "Обязательное поле" : null
          }
        />

        <label htmlFor="descriptionReminders">Введите подзаголовок</label>
        <input
          className="control"
          id="descriptionReminders"
          type="text"
          value={formReminders.descriptionReminders}
          onChange={(event) =>
            setFormReminders((prev) => ({
              ...prev,
              descriptionReminders: event.target.value,
            }))
          }
        />
        <Button
          id="setOnDesk"
          disabled={
            formReminders.hasErorSetTitle ||
            formReminders.titleReminders.trim().length == 0
          }
        >
          Разместить на доске
        </Button>
      </form>
    </section>
  );
}
