export enum ParityWeek {
  EVEN = "2Н.",
  ODD = "1Н.",
  EVERYWEEK = "EVERYWEEK",
}

export enum TypeOfLesson {
  LECTURE = "LECTURE",
  PRACTICE = "PRACTICE",
  LAB = "LAB"
}

export interface ITeacher {
  id: number;
  name: string;
  schedule: IScheduleDay[];
}

export interface ILesson {
  name: string;
  teacher: number;
  audience: string | number;
  week?: ParityWeek;
  typeOfLesson: TypeOfLesson;
}

export interface IScheduleDay {
  first?: ILesson[];
  second?: ILesson[];
  third?: ILesson[];
  fourth?: ILesson[];
  fifth?: ILesson[];
  sixth?: ILesson[];
  seventh?: ILesson[];
  eighth?: ILesson[];
}

export interface IGroup {
  id: number;
  courseNumber: number;
  typeOfEducation: string;
  groupNumber: string;
  schedule: IScheduleDay[];
}
