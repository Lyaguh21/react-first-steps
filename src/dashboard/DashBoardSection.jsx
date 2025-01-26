import { useState } from "react";
import "./DashBoard.scss";
import DashBoardForm from "./dashboardform/DashBoardForm";
import DashBoardReminders from "./dashboardreminders/DashBoardReminders";

export default function DashBoardSection() {
  const [cell1, setCell1] = useState({ title: "", subtitle: "" });
  const [cell2, setCell2] = useState({ title: "", subtitle: "" });
  const [cell3, setCell3] = useState({ title: "", subtitle: "" });
  const [cell4, setCell4] = useState({ title: "", subtitle: "" });
  const [cell5, setCell5] = useState({ title: "", subtitle: "" });
  const [cell6, setCell6] = useState({ title: "", subtitle: "" });

  const [formSubmitCount, setFormSubmitCount] = useState(0);

  const handleFormSubmit = (data) => {
    setFormSubmitCount((prevCount) => prevCount + 1);
    if (formSubmitCount === 0) {
      setCell1(data);
    } else if (formSubmitCount === 1) {
      setCell2(data);
    } else if (formSubmitCount === 2) {
      setCell3(data);
    } else if (formSubmitCount === 3) {
      setCell4(data);
    } else if (formSubmitCount === 4) {
      setCell5(data);
    } else if (formSubmitCount === 5) {
      setCell6(data);
      setFormSubmitCount(0);
    }

    console.log(formSubmitCount);
  };
  return (
    <section id="dashboardsection">
      <div>
        <div id="lsideForm">
          <DashBoardForm onSubmit={handleFormSubmit} />
        </div>
        <div id="rsideReminders">
          <DashBoardReminders
            cell1={cell1}
            cell2={cell2}
            cell3={cell3}
            cell4={cell4}
            cell5={cell5}
            cell6={cell6}
          />
        </div>
      </div>
    </section>
  );
}
