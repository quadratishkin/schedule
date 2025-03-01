import { ScheduleCell } from "../ScheduleCell/ScheduleCell";
import "./Schedule.scss";

export function Schedule() {
  const scheduleTime = ["8:00", "9:40", "11:30", "13:15", "15:00", "16:40"];
  const headerNames = [
    "начало занятий",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  const testArray = [0, 0, 0, 0, 0, 0];

  return (
    <table className="schedule">
      <thead className="schedule__headers">
        <tr>
          {headerNames.map((item) => (
            <th className="schedule__col">{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {testArray.map((item, index1) => (
          <tr>
            <td>{scheduleTime[index1]}</td>
            {testArray.map((index2) => (
              <td>
                <ScheduleCell isEven={(index1 + index2) % 2 === 0} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
