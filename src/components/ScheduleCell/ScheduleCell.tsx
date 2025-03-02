import { Link } from "react-router-dom";
import { ILesson, IScheduleDay } from "../../data/interfaces";
import "./ScheduleCell.scss";

interface ScheduleCellProps {
  isEven: boolean;
  scheduleDay?: ILesson | null;
}

export const ScheduleCell = ({
  isEven,
  scheduleDay = null,
}: ScheduleCellProps) => {
  if (isEven) {
    if (scheduleDay) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even">
          <h3 className="schedule-cell__subject-name">{scheduleDay.name}</h3>
          <Link
            className="schedule-cell__teacher-name"
            to={`/teachers/${scheduleDay.teacher.id}`}
          >
            {scheduleDay.teacher.name}
          </Link>
          {/* <p className="schedule-cell__teacher-name">{scheduleDay.teacher}</p> */}
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
        <Link
          className="schedule-cell__teacher-name"
          to={`/teachers/${scheduleDay.teacher.id}`}
        >
          {scheduleDay.teacher.name}
        </Link>
        <div className="schedule-cell__type-of-lesson">
          {scheduleDay.typeOfLesson}
        </div>
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
};
