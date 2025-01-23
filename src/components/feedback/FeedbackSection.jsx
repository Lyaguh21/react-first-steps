import { useState } from "react";
import Button from "../Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    reason: "help",
    hasEror: false,
    hasErorDescription: false,
  });

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasEror: event.target.value.trim().length == 0,
    }));
  }
  function handleDescriptionChange(event) {
    setForm((prev) => ({
      ...prev,
      description: event.target.value,
      hasErorDescription: event.target.value.trim().length == 0,
    }));
  }

  return (
    <section>
      <h1>Обратная связь</h1>

      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          type="text"
          className="control"
          value={form.name}
          onChange={handleNameChange}
          style={{ border: form.hasEror ? "1px solid red" : null }}
        />

        <label htmlFor="description">Опишите проблему</label>
        <textarea
          rows={"7"}
          id="description"
          className="control"
          value={form.description}
          onChange={handleDescriptionChange}
          style={{
            resize: "none",
            fontSize: "20px",
            width: "100%",
            border: form.hasErorDescription ? "1px solid red" : null,
          }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="eror">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button
          disabled={
            form.hasEror ||
            form.name.trim().length == 0 ||
            form.description.trim().length == 0
          }
          onClick={() => alert("Спасибо за обращение")}
        >
          Отправить
        </Button>

        {/* ТЕСТ ФОРМЫ JSONом */}
        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}
      </form>
    </section>
  );
}
