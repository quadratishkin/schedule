export enum ParityWeek {
  EVEN = "EVEN",
  ODD = "ODD",
  EVERYWEEK = "EVERYWEEK",
}

export enum TypeOfLesson {
  LECTURE = "LECTURE",
  PRACTICE = "PRACTICE",
}

export interface ILesson {
  name: string;
  teacher: string;
  audience: number;
  week?: ParityWeek;
  typeOfLesson: TypeOfLesson;
}

export interface ISchedule {
  first?: ILesson;
  second?: ILesson;
  third?: ILesson;
  fourth?: ILesson;
  fifth?: ILesson;
  sixth?: ILesson;
  seventh?: ILesson;
  eighth?: ILesson;
}

export interface IGroup {
  id: number;
  courseNumber: number;
  typeOfEducation: string;
  groupNumber: number;
  // schedule: ISchedule;
}
