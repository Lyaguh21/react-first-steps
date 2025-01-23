import "./DashBoard.scss";
import DashBoardForm from "./dashboardform/DashBoardForm";
import DashBoardReminders from "./dashboardreminders/DashBoardReminders";

export default function DashBoardSection() {
  return (
    <section id="dashboardsection">
      <h1 className="MainTitleBoard">Доска напоминаний</h1>
      <div>
        <div id="lsideForm">
          <DashBoardForm />
        </div>
        <div id="rsideReminders">
          <DashBoardReminders />
        </div>
      </div>
    </section>
  );
}
