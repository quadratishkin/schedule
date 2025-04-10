import { useParams } from "react-router";
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
        <div className="playlist">
          <p>Такой группы нет</p>
        </div>
      </div>
    );
  }

  return (
    <section className="groupInfoPage">
      <p className="groupInfoPage__number">номер группы: {group.groupNumber}</p>
      <Schedule scheduleTest={scheduleTest} />
    </section>
  );
};
