import RemindersSection from "../reminders/RemindersSection";
import "./DashBoardReminders.scss";

export default function DashBoardReminders({ cell1, cell2 }) {
  return (
    <section>
      <table id="remindersTable">
        <tbody>
          <tr>
            <td>
              {/* Добавляем проверку, что cell1 существует и имеет нужные свойства */}
              <RemindersSection
                mainText={cell1?.title}
                subText={cell1?.subtitle}
              ></RemindersSection>
            </td>
            <td>
              {/* Добавляем проверку, что cell2 существует и имеет нужные свойства */}
              <RemindersSection
                mainText={cell2?.title}
                subText={cell2?.subtitle}
              ></RemindersSection>
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
