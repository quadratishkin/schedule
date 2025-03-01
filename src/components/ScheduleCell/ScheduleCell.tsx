import { ILesson, IScheduleDay } from "../../data/interfaces";
import "./ScheduleCell.scss";

interface ScheduleCellProps {
  isEven: boolean;
  scheduleDay?: ILesson | null;
}

export function ScheduleCell({
  isEven,
  scheduleDay = null,
}: ScheduleCellProps) {
  if (isEven) {
    if (scheduleDay) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even">
          <h3 className="schedule-cell__subject-name">{scheduleDay.name}</h3>
          <p className="schedule-cell__teacher-name">{scheduleDay.teacher}</p>
          <div className="schedule-cell__type-of-lesson">
            {scheduleDay.typeOfLesson}
          </div>
        </div>
      );
    } else {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even" />
      );
    }
  }
  if (scheduleDay) {
    return (
      <div className="schedule-cell__wrapper">
        <h3 className="schedule-cell__subject-name">{scheduleDay.name}</h3>
        <p className="schedule-cell__teacher-name">{scheduleDay.teacher}</p>
        <div className="schedule-cell__type-of-lesson">
          {scheduleDay.typeOfLesson}
        </div>
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
}
