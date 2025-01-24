import "./RemindersSection.scss";
import RemindersButton from "./RemindersButton";
import { remindersColor } from "../../data";
export default function RemindersSection({
  mainText,
  subText,
  mainColor,
  boxColor,
  ...props
}) {
  return (
    <div id="remindersBox" style={{ backgroundColor: mainColor }} {...props}>
      <div className="bordertext">
        <div className="heightReminders">
          <div className="box" style={{ backgroundColor: boxColor }}>
            {" "}
          </div>
          <h1>{mainText}</h1>
          <h5>{subText}</h5>
        </div>
        <div className="deleteSection">
          <RemindersButton />
        </div>
      </div>
    </div>
  );
}
