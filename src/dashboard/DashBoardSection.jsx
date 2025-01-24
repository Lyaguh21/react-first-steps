import { useState } from "react";
import "./DashBoard.scss";
import DashBoardForm from "./dashboardform/DashBoardForm";
import DashBoardReminders from "./dashboardreminders/DashBoardReminders";

export default function DashBoardSection() {
  const [cell1, setCell1] = useState({ title: "", subtitle: "" });
  const [cell2, setCell2] = useState({ title: "", subtitle: "" });
  const [formSubmitCount, setFormSubmitCount] = useState(0);

  const handleFormSubmit = (data) => {
    setFormSubmitCount((prevCount) => prevCount + 1);
    console.log("JFE");
    if (formSubmitCount === 0) {
      setCell1(data);
    } else if (formSubmitCount === 1) {
      setCell2(data);
    }
  };

  return (
    <section id="dashboardsection">
      <h1 className="MainTitleBoard">Доска напоминаний</h1>
      <div>
        <div id="lsideForm">
          <DashBoardForm onSubmit={handleFormSubmit} />
        </div>
        <div id="rsideReminders">
          <DashBoardReminders cell1={cell1} cell2={cell2} />
        </div>
      </div>
    </section>
  );
}
