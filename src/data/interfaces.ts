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
  first?: ILesson | ILesson[];
  second?: ILesson | ILesson[];
  third?: ILesson | ILesson[];
  fourth?: ILesson | ILesson[];
  fifth?: ILesson | ILesson[];
  sixth?: ILesson | ILesson[];
  seventh?: ILesson | ILesson[];
  eighth?: ILesson | ILesson[];
}

export interface IGroup {
  id: number;
  courseNumber: number;
  typeOfEducation: string;
  groupNumber: number;
  // schedule: ISchedule;
}
