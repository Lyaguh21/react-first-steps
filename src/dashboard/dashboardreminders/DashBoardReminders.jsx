import RemindersSection from "../reminders/RemindersSection";
import "./DashBoardReminders.scss";
import { remindersColor } from "../../data";
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
                mainColor={remindersColor[0].main}
                boxColor={remindersColor[0].box}
              ></RemindersSection>
            </td>
            <td>
              {/* Добавляем проверку, что cell2 существует и имеет нужные свойства */}
              <RemindersSection
                mainText={cell2?.title}
                subText={cell2?.subtitle}
                mainColor={remindersColor[1].main}
                boxColor={remindersColor[1].box}
              ></RemindersSection>
            </td>
          </tr>
          <tr>
            <td>
              <RemindersSection
                mainText={cell3?.title}
                subText={cell3?.subtitle}
                mainColor={remindersColor[2].main}
                boxColor={remindersColor[2].box}
              ></RemindersSection>
            </td>
            <td>
              <RemindersSection
                mainText={cell4?.title}
                subText={cell4?.subtitle}
                mainColor={remindersColor[3].main}
                boxColor={remindersColor[3].box}
              ></RemindersSection>
            </td>
          </tr>
          <tr>
            <td>
              <RemindersSection
                mainText={cell5?.title}
                subText={cell5?.subtitle}
                mainColor={remindersColor[4].main}
                boxColor={remindersColor[4].box}
              ></RemindersSection>
            </td>
            <td>
              <RemindersSection
                mainText={cell6?.title}
                subText={cell6?.subtitle}
                mainColor={remindersColor[5].main}
                boxColor={remindersColor[5].box}
              ></RemindersSection>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
