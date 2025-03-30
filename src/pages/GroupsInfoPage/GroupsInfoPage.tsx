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
    <section className="groupInfoPage">
      <h2 className="groupInfoPage__header">GroupInfoPage</h2>
      <p className="groupInfoPage__number">номер группы: {group.groupNumber}</p>
      <Schedule scheduleTest={scheduleTest} />
    </section>
  );
};
