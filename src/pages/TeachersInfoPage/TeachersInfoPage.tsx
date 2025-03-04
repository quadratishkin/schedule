import { useParams } from "react-router-dom";
import { Schedule } from "../../components/Schedule";
import { scheduleTest } from "../../data/interfaces";
import { TEACHERS } from "../../data/teachers";
import "./TeachersInfoPage.scss";

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
      <div className="teacher">
        <p className="teacher__block">
          Имя преподавателя: <b>{teacher.name}</b>
        </p>
      </div>
      <Schedule scheduleTest={scheduleTest} />
    </div>
  );
};
