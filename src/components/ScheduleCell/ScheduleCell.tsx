import "./ScheduleCell.css";

interface ScheduleCellProps {
  isEven: boolean;
}

export function ScheduleCell({ isEven }: ScheduleCellProps) {
  if (isEven) {
    return (
      <div className="schedule-cell">
        <h3 className="schedule-cell__subject-name">subject-name</h3>
        <p className="schedule-cell__teacher-name">teacher-name</p>
        <div className="schedule-cell__type-of-lesson">type-of-lesson</div>
      </div>
    );
  } else
    return (
      <div className="schedule-cell schedule-cell--even">
        <h3 className="schedule-cell__subject-name">subject-name</h3>
        <p className="schedule-cell__teacher-name">teacher-name</p>
        <div className="schedule-cell__type-of-lesson">type-of-lesson</div>
      </div>
    );
}
