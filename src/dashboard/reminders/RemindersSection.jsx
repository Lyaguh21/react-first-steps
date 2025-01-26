import "./RemindersSection.scss";
import RemindersButton from "./RemindersButton";
import { remindersColor } from "../../data";
import { useState } from "react";
export default function RemindersSection({
  mainText,
  subText,
  mainColor,
  boxColor,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      id="remindersBox"
      style={{
        backgroundColor: mainColor,
        opacity: (mainText || subText) && isVisible ? 1 : 0,
        transition: "opacity 0.25s ease-in-out",
      }}
      {...props}
    >
      <div className="bordertext">
        <div className="heightReminders">
          <div className="box" style={{ backgroundColor: boxColor }}>
            {" "}
          </div>
          <h1> {mainText}</h1>
          <h5>{subText}</h5>
        </div>
        <div className="deleteSection">
          <RemindersButton
            changeVisible={() => {
              setIsVisible(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
