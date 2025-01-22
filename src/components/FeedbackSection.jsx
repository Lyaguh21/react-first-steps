import { useState } from "react";
import Button from "./Button/Button";
export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [reason, setReason] = useState("help");
  const [hasEror, setHasEror] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
    setHasEror(event.target.value.trim().length == 0);
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
          value={name}
          onChange={handleNameChange}
          style={{ border: hasEror ? "1px solid red" : null }}
        />

        <label htmlFor="description">Опишите проблему</label>
        <textarea
          rows={"7"}
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="control"
          style={{ resize: "none", fontSize: "20px" }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="eror">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button
          disabled={hasEror || name.trim().length == 0}
          onClick={() => alert("Спасибо за обращение")}
        >
          Отправить
        </Button>
      </form>
    </section>
  );
}
