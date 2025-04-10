import { ChangeEvent } from "react";
import "./GroupsPage.scss";
import { Link, useSearchParams } from "react-router";
import { GROUPS } from "../../data/groups";

export const GroupsPage = () => {
  const [searchParam, setSearchParam] = useSearchParams();

  const searchGroup = searchParam.get("searchGroup")?.toLowerCase() || "";

  const handleSearchGroup = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setSearchParam({ searchGroup: value.toLowerCase() });
  };

  const fillteredGroups = GROUPS.filter(({ groupNumber }) => {
    const groupNumberString = groupNumber.toString();
    return groupNumberString.toLowerCase().includes(searchGroup);
  });

  return (
    <div className="groupsPage">
      <h2 className="groupsPage__header">Расписание групп</h2>

      <div className="groups">
        <input
          className="groups__input"
          type="text"
          value={searchGroup}
          onChange={handleSearchGroup}
          placeholder="Введите номер группы"
        />
        <div className="groups__number">
          {fillteredGroups.map(({ id, groupNumber }) => (
            <Link to={`/groups/${id}`} key={id}>
              {groupNumber}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
