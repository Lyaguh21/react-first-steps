import RemindersSection from "../reminders/RemindersSection";
import "./DashBoardReminders.scss";
import { remindersColor } from "../../data";
export default function DashBoardReminders() {
  return (
    <section>
      <table id="remindersTable">
        <tbody>
          <tr>
            <td>
              <RemindersSection
              
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
