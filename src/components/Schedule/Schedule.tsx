import { IScheduleDay } from "../../data/interfaces";
import { ScheduleCell } from "../ScheduleCell/ScheduleCell";
import "./Schedule.scss";

interface ScheduleProps {
  scheduleTest: IScheduleDay[];
}

export const Schedule = ({ scheduleTest }: ScheduleProps) => {
  const scheduleTime = ["8:00", "9:40", "11:30", "13:15", "15:00", "16:40"];
  const headerNames = [
    "начало занятия",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  const days = ["first", "second", "third", "fourth", "fifth", "sixth"];

  return (
    <table className="schedule">
      <thead className="schedule__headers">
        {headerNames.map((_, index) => (
          <th className="schedule__cell schedule__cell--headers">
            {headerNames[index]}
          </th>
        ))}
      </thead>
      <tbody>
        {scheduleTime.map((_, index) => (
          <tr className="schedule__row">
            <td className="schedule__cell">{scheduleTime[index]}</td>
            {scheduleTest.map((day, index1) =>
              day.hasOwnProperty(days[index]) === true ? (
                <td className="schedule__cell">
                  <ScheduleCell
                    isEven={(index + index1) % 2 === 0}
                    scheduleDay={day[days[index] as keyof typeof day]}
                  />
                </td>
              ) : (
                <td className="schedule__cell">
                  <ScheduleCell isEven={(index + index1) % 2 === 0} />
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
