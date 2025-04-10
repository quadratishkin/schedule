import { useParams } from "react-router";
import { Schedule } from "../../components/Schedule";
import { TEACHERS } from "../../data/teachers";
import "./TeachersInfoPage.scss";
import { scheduleTest } from "../../data/schedules";

export const TeachersInfoPage = () => {
  const { teacherId } = useParams();
  const teacher = TEACHERS[Number(teacherId)];

  if (!teacher) {
    return (
      <div className="teacherInfoPage">
        <h2 className="teacherInfoPage__header">TeacherInfoPage</h2>

        <div className="teacher">
          <p>Такого преподавателя нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="teacherInfoPage">
      <p className="teacherInfoPage__name">{teacher.name}</p>
      <Schedule scheduleTest={scheduleTest} />
    </div>
  );
};
