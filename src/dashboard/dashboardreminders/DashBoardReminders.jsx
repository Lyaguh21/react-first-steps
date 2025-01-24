import RemindersSection from "../reminders/RemindersSection";
import "./DashBoardReminders.scss";

export default function DashBoardReminders({
  cell1,
  cell2,
  cell3,
  cell4,
  cell5,
  cell6,
}) {
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
              <RemindersSection
                mainText={cell3?.title}
                subText={cell3?.subtitle}
              ></RemindersSection>
            </td>
            <td>
              <RemindersSection
                mainText={cell4?.title}
                subText={cell4?.subtitle}
              ></RemindersSection>
            </td>
          </tr>
          <tr>
            <td>
              <RemindersSection
                mainText={cell5?.title}
                subText={cell5?.subtitle}
              ></RemindersSection>
            </td>
            <td>
              <RemindersSection
                mainText={cell6?.title}
                subText={cell6?.subtitle}
              ></RemindersSection>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
