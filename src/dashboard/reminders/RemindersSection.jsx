import "./RemindersSection.scss"; 
import RemindersButton from "./RemindersButton";
export default function RemindersSection({ mainText, subText, ...props }) {
  return (
    <div id="remindersBox" {...props}>
      <div className="heightReminders">
        <div className="box"> </div>
        <h1>{mainText}</h1>
        <h5>{subText}</h5>
      </div>
      <div className="deleteSection">
        <RemindersButton />
      </div>
    </div>
  );
}
