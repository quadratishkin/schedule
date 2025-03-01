import { IScheduleDay } from "../../data/interfaces";
import { ScheduleCell } from "../ScheduleCell/ScheduleCell";
import "./Schedule.scss";

interface ScheduleProps {
  scheduleTest: IScheduleDay[];
}

export function Schedule({ scheduleTest }: ScheduleProps) {
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
    <div className="schedule">
      <div className="schedule__headers">
        {headerNames.map((_, index) => (
          <div className="schedule__cell">{headerNames[index]}</div>
        ))}
      </div>

      {scheduleTime.map((_, index) => (
        <div className="schedule__row">
          <div className="schedule__cell">{scheduleTime[index]}</div>
          {scheduleTest.map((day, index1) =>
            day.hasOwnProperty(days[index]) === true ? (
              <div className="schedule__cell">
                <ScheduleCell
                  isEven={(index + index1) % 2 === 0}
                  scheduleDay={day[days[index] as keyof typeof day]}
                />
              </div>
            ) : (
              <div className="schedule__cell">
                <ScheduleCell isEven={(index + index1) % 2 === 0} />
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
}
