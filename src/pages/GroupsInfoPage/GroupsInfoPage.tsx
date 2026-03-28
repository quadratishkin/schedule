import { useParams, Link } from "react-router";
import "./GroupsInfoPage.scss";
import { GROUPS } from "../../data/groups";
import { Schedule } from "../../components/Schedule";

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
      <div className="groupInfoPage__header">
        <p className="groupInfoPage__number">{group.groupNumber}</p>
        <Link to="/groups" className="groupInfoPage__back-btn">
          &#8592; Назад
        </Link>
      </div>
      <Schedule scheduleTest={group.schedule} />
    </section>
  );
};