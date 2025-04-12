import { ITeacher } from "../../data/interfaces";

export const sortTeachersAlphabet = (a: ITeacher, b: ITeacher) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
};
