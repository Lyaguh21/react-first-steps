import RemindersSection from "../reminders/RemindersSection";
import "./DashBoardReminders.scss";

export default function DashBoardReminders() {
  return (
    <section>
      <table id="remindersTable">
        <tbody>
          <tr>
            <td>
              <RemindersSection
                mainText={"dede"}
                subText={"ded"}
              ></RemindersSection>
            </td>
            <td>
              <RemindersSection></RemindersSection>
            </td>
          </tr>
          <tr>
            <td>
              <RemindersSection></RemindersSection>
            </td>
            <td>
              <RemindersSection></RemindersSection>
            </td>
          </tr>
          <tr>
            <td>
              <RemindersSection></RemindersSection>
            </td>
            <td>
              <RemindersSection></RemindersSection>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
