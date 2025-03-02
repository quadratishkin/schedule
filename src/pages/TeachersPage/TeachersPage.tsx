import { Link, useSearchParams } from "react-router-dom";
import { TEACHERS } from "../../data/teachers";
import { ChangeEvent } from "react";

export const TeachersPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const searchTeacher = searchParam.get("searchTeacher")?.toLowerCase() || "";

  const handleSearchTeacher = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({ searchTeacher: value.toLowerCase() });
  };

  const fillteredTeachers = TEACHERS.filter(({ name }) => {
    return name.toLowerCase().includes(searchTeacher);
  });

  return (
    <div className="teachersPage">
      <h2 className="teachersPage__header">TeachersPage</h2>

      <div className="teacherss">
        <label>
          введите имя преподавателя:{" "}
          <input
            type="text"
            value={searchTeacher}
            onChange={handleSearchTeacher}
          />
        </label>
        <div className="groups__number">
          {fillteredTeachers.map(({ id, name }) => (
            <Link to={`/teachers/${id}`} key={id}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
