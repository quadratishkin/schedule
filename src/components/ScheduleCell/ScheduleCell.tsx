import { Link } from "react-router";
import { ILesson, TypeOfLesson } from "../../data/interfaces";
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
  // const determineTeacher = (id: number) => {
  //   const teacher = TEACHERS.filter((teacher) => teacher.id === id);
  //   return teacher;
  // };

  if (isMobile) {
    if (isEven && scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even schedule-cell__wrapper--mobile">
          {scheduleLesson.map((subject, index) => (
            <div className="schedule-cell__subject" key={index}>
              <h3 className="schedule-cell__subject-name">{subject.name}</h3>
              <Link
                className="schedule-cell__teacher-name"
                to={`/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <span className="schedule-cell__audience">
                {subject.audience}
              </span>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              <div className="schedule-cell__week">{subject.week}</div>
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
                to={`/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <span className="schedule-cell__audience">
                {subject.audience}
              </span>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              <div className="schedule-cell__week">{subject.week}</div>
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
                to={`/teachers/${subject.teacher.id}`}
              >
                {subject.teacher.name}
              </Link>
              <span className="schedule-cell__audience">
                {subject.audience}
              </span>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              <div className="schedule-cell__week">{subject.week}</div>
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
              to={`/teachers/${subject.teacher.id}`}
            >
              {subject.teacher.name}
            </Link>
            <span className="schedule-cell__audience">{subject.audience}</span>
            {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
              <div className="schedule-cell__lesson-type">Пр</div>
            ) : (
              <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                Лек
              </div>
            )}
            <div className="schedule-cell__week">{subject.week}</div>
          </div>
        ))}
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
};
