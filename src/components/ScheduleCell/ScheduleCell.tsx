import { Link } from "react-router-dom";
import { ILesson } from "../../data/interfaces";
import "./ScheduleCell.scss";

interface ScheduleCellProps {
  isEven: boolean;
  scheduleLesson?: ILesson | null;
  isMobile?: boolean;
}

export const ScheduleCell = ({
  isEven,
  scheduleLesson = null,
  isMobile,
}: ScheduleCellProps) => {
  if (isMobile) {
    if (isEven && scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even schedule-cell__wrapper--mobile">
          <h3 className="schedule-cell__subject-name">{scheduleLesson.name}</h3>
          <Link
            className="schedule-cell__teacher-name"
            to={`/teachers/${scheduleLesson.teacher.id}`}
          >
            {scheduleLesson.teacher.name}
          </Link>
          <div className="schedule-cell__type-of-lesson">
            {scheduleLesson.typeOfLesson}
          </div>
        </div>
      );
    } else if (isEven && !scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even schedule-cell__wrapper--mobile" />
      );
    } else if (!isEven && scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--mobile">
          <h3 className="schedule-cell__subject-name">{scheduleLesson.name}</h3>
          <Link
            className="schedule-cell__teacher-name"
            to={`/teachers/${scheduleLesson.teacher.id}`}
          >
            {scheduleLesson.teacher.name}
          </Link>
          <div className="schedule-cell__type-of-lesson">
            {scheduleLesson.typeOfLesson}
          </div>
        </div>
      );
    } else {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--mobile" />
      );
    }
  }

  if (isEven) {
    if (scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even">
          <h3 className="schedule-cell__subject-name">{scheduleLesson.name}</h3>
          <Link
            className="schedule-cell__teacher-name"
            to={`/teachers/${scheduleLesson.teacher.id}`}
          >
            {scheduleLesson.teacher.name}
          </Link>
          <div className="schedule-cell__type-of-lesson">
            {scheduleLesson.typeOfLesson}
          </div>
        </div>
      );
    } else {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even" />
      );
    }
  }
  if (scheduleLesson) {
    return (
      <div className="schedule-cell__wrapper">
        <h3 className="schedule-cell__subject-name">{scheduleLesson.name}</h3>
        <Link
          className="schedule-cell__teacher-name"
          to={`/teachers/${scheduleLesson.teacher.id}`}
        >
          {scheduleLesson.teacher.name}
        </Link>
        <div className="schedule-cell__type-of-lesson">
          {scheduleLesson.typeOfLesson}
        </div>
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
};
