import { useParams } from "react-router-dom";
import "./GroupsInfoPage.scss";
import { GROUPS } from "../../data/groups";
import { Schedule } from "../../components/Schedule";
import { scheduleTest } from "../../data/schedules";

export const GroupsInfoPage = () => {
  const { groupId } = useParams();
  const group = GROUPS[Number(groupId)];

  if (!group) {
    return (
      <div className="groupInfoPage">
        <h2 className="groupInfoPage__header">GroupInfoPage</h2>

        <div className="playlist">
          <p>Такой группы нет</p>
        </div>
      </div>
    );
  }

  return (
    <div className="groupInfoPage">
      <h2 className="groupInfoPage__header">GroupInfoPage</h2>
      <div className="group">
        <p className="group__block">
          Номер группы: <b>{group.groupNumber}</b>
        </p>
        <p className="group__block">
          Вид образования: <b>{group.typeOfEducation}</b>
        </p>
      </div>
      <Schedule scheduleTest={scheduleTest} />
    </div>
  );
};
