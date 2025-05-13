import { Link } from "react-router";
import { ILesson, ParityWeek, TypeOfLesson } from "../../data/interfaces";
import "./ScheduleCell.scss";
import { TEACHERS } from "../../data/teachers";

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
  const determineTeacher = (id: number) => {
    const teacher = TEACHERS.find((teacher) => teacher.id === id);
    return teacher;
  };

  if (isMobile) {
    if (isEven && scheduleLesson) {
      return (
        <div className="schedule-cell__wrapper schedule-cell__wrapper--even schedule-cell__wrapper--mobile">
          {scheduleLesson.map((subject, index) => (
            <div className="schedule-cell__subject" key={index}>
              <div className="schedule-cell__subject-info">
                <h3 className="schedule-cell__subject-name">{subject.name}</h3>{" "}
                <span className="schedule-cell__audience">
                  {subject.audience}
                </span>
                <Link
                  className="schedule-cell__teacher-name"
                  to={`/teachers/${determineTeacher(subject.teacher)?.id}`}
                >
                  {determineTeacher(subject.teacher)?.name}
                </Link>
              </div>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              {subject.week !== ParityWeek.EVERYWEEK ? (
                <div className="schedule-cell__week">{subject.week}</div>
              ) : null}
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
              <div className="schedule-cell__subject-info">
                <h3 className="schedule-cell__subject-name">{subject.name}</h3>{" "}
                <span className="schedule-cell__audience">
                  {subject.audience}
                </span>
                <Link
                  className="schedule-cell__teacher-name"
                  to={`/teachers/${determineTeacher(subject.teacher)?.id}`}
                >
                  {determineTeacher(subject.teacher)?.name}
                </Link>
              </div>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              {subject.week !== ParityWeek.EVERYWEEK ? (
                <div className="schedule-cell__week">{subject.week}</div>
              ) : null}
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
            <div className="schedule-cell__subject-info" key={index}>
              <h3 className="schedule-cell__subject-name">{subject.name}</h3>
              <span className="schedule-cell__audience">
                {subject.audience}
              </span>
              <Link
                className="schedule-cell__teacher-name"
                to={`/teachers/${determineTeacher(subject.teacher)?.id}`}
              >
                {determineTeacher(subject.teacher)?.name}
              </Link>
              {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
                <div className="schedule-cell__lesson-type">Пр</div>
              ) : (
                <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                  Лек
                </div>
              )}
              {subject.week !== ParityWeek.EVERYWEEK ? (
                <div className="schedule-cell__week">{subject.week}</div>
              ) : null}
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
          <div className="schedule-cell__subject-info" key={index}>
            <h3 className="schedule-cell__subject-name">{subject.name}</h3>
            <span className="schedule-cell__audience">{subject.audience}</span>
            <Link
              className="schedule-cell__teacher-name"
              to={`/teachers/${determineTeacher(subject.teacher)?.id}`}
            >
              {determineTeacher(subject.teacher)?.name}
            </Link>
            {subject.typeOfLesson === TypeOfLesson.PRACTICE ? (
              <div className="schedule-cell__lesson-type">Пр</div>
            ) : (
              <div className="schedule-cell__lesson-type schedule-cell__lesson-type--lection">
                Лек
              </div>
            )}
            {subject.week !== ParityWeek.EVERYWEEK ? (
              <div className="schedule-cell__week">{subject.week}</div>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
  return <div className="schedule-cell__wrapper"></div>;
};
