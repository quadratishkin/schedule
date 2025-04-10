import { useEffect, useState } from "react";
import { IScheduleDay } from "../../data/interfaces";
import { ScheduleCell } from "../ScheduleCell/ScheduleCell";
import {
  DAYS,
  HEADER_NAMES,
  SCHEDULE_TIMES_FINISH,
  SCHEDULE_TIMES_START,
  SMALL_SCREEN,
  WEEK_DAYS_NAMES,
} from "./const";
import "./Schedule.scss";

interface ScheduleProps {
  scheduleTest: IScheduleDay[];
}

export const Schedule = ({ scheduleTest }: ScheduleProps) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentDay, setCurrentDay] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > SMALL_SCREEN) {
    return (
      <table className="schedule">
        <thead className="schedule__headers">
          <tr className="schedule__row schedule__row--headers">
            {HEADER_NAMES.map((_, index) => (
              <th
                className="schedule__cell schedule__cell--headers"
                key={index}
              >
                {HEADER_NAMES[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SCHEDULE_TIMES_START.map((_, index) => (
            <tr className="schedule__row" key={index}>
              <td className="schedule__cell schedule__cell--time">
                <span className="schedule__time">
                  {SCHEDULE_TIMES_START[index]}
                </span>
                <span className="schedule__time schedule__time--finish">
                  {SCHEDULE_TIMES_FINISH[index]}
                </span>
              </td>
              {scheduleTest.map((day, index1) =>
                day.hasOwnProperty(DAYS[index]) === true ? (
                  <td className="schedule__cell" key={index1}>
                    <ScheduleCell
                      isEven={(index + index1) % 2 === 0}
                      scheduleLesson={day[DAYS[index] as keyof IScheduleDay]}
                    />
                  </td>
                ) : (
                  <td className="schedule__cell" key={index1}>
                    <ScheduleCell isEven={(index + index1) % 2 === 0} />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div className="schedule">
        <div className="schedule__headers schedule__headers--mobile">
          {WEEK_DAYS_NAMES.map((weekDay, index) => (
            <div
              className="schedule__cell schedule__cell--headers schedule__cell--mobile"
              key={index}
            >
              <button
                className="schedule__btn"
                type="button"
                onClick={() => setCurrentDay(index)}
              >
                {weekDay}
              </button>
            </div>
          ))}
        </div>
        {SCHEDULE_TIMES_START.map((scheduleTime, index) => (
          <div className="schedule__row schedule__row--mobile " key={index}>
            <div className="schedule__cell schedule__cell--mobile schedule__cell--gray">
              {scheduleTime}
            </div>
            {scheduleTest[currentDay].hasOwnProperty(DAYS[index]) === true ? (
              <ScheduleCell
                isEven={index % 2 === 0}
                isMobile={true}
                scheduleLesson={
                  scheduleTest[currentDay][DAYS[index] as keyof typeof Schedule]
                }
              />
            ) : (
              <ScheduleCell isEven={index % 2 === 0} isMobile={true} />
            )}
          </div>
        ))}
      </div>
    );
  }
};
