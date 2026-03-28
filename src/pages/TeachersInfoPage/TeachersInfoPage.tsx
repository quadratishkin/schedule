import { useParams, useNavigate } from "react-router";
import { Schedule } from "../../components/Schedule";
import { TEACHERS } from "../../data/teachers";
import "./TeachersInfoPage.scss";

export const TeachersInfoPage = () => {
  const { teacherId } = useParams();
  const navigate = useNavigate();
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
      <div className="teacherInfoPage__header">
        <p className="teacherInfoPage__name">{teacher.name}</p>
        
        <button 
          onClick={() => navigate(-1)} 
          className="teacherInfoPage__back-btn"
        >
          &#8592; Назад
        </button>
      </div>
      
      <Schedule scheduleTest={teacher.schedule} />
    </div>
  );
};