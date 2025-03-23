import { Link } from "react-router-dom";
import { ILesson } from "../../data/interfaces";
import "./ScheduleCell.scss";

interface ScheduleCellProps {
  isEven: boolean;
  scheduleLesson?: ILesson[] | null;
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
          {scheduleLesson.map((subject, index) => (
            <div className="schedule-cell__subject" key={index}>
              <h3 className="schedule-cell__subject-name">{subject.name}</h3>
              <Link
                className="schedule-cell__teacher-name"
                to={`/schedule/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <div className="schedule-cell__type-of-lesson">
                {subject.typeOfLesson}
              </div>
            </div>
          ))}
        </div>
      );
    } else if (isEven && !scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even schedule-cell__wrapper--mobile" />
      );
    } else if (!isEven && scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--mobile">
          {scheduleLesson.map((subject, index) => (
            <div className="schedule-cell__subject" key={index}>
              <h3 className="schedule-cell__subject-name">{subject.name}</h3>
              <Link
                className="schedule-cell__teacher-name"
                to={`/schedule/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <div className="schedule-cell__type-of-lesson">
                {subject.typeOfLesson}
              </div>
            </div>
          ))}
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
          {scheduleLesson.map((subject, index) => (
            <div className="schedule-cell__subject" key={index}>
              <h3 className="schedule-cell__subject-name">{subject.name}</h3>
              <Link
                className="schedule-cell__teacher-name"
                to={`/schedule/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <div className="schedule-cell__type-of-lesson">
                {subject.typeOfLesson}
              </div>
            </div>
          ))}
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
        {scheduleLesson.map((subject, index) => (
          <div className="schedule-cell__subject" key={index}>
            <h3 className="schedule-cell__subject-name">{subject.name}</h3>
            <Link
              className="schedule-cell__teacher-name"
              to={`/schedule/teachers/${subject.teacher.id}`}
            >
              {subject.teacher.name}
            </Link>
            <div className="schedule-cell__type-of-lesson">
              {subject.typeOfLesson}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
};
