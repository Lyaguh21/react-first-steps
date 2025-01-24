import "./RemindersSection.scss";
import { remindersColor } from "../../data";
import Button from "../../components/Button/Button";
import RemindersButton from "./RemindersButton";
export default function RemindersSection({ mainColor, boxColor }) {
  return (
    <div id="remindersBox" style={{ backgroundColor: { mainColor } }}>
      <div className="heightReminders">
        <div className="box" style={{ backgroundColor: { boxColor } }}></div>
        <h1>Заголовок напоминания</h1>
        <h5>Подзаголовок напоминания</h5>
      </div>
      <div className="deleteSection">
        <RemindersButton />
      </div>
    </div>
  );
}
