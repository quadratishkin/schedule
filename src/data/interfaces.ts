export enum ParityWeek {
  EVEN = "EVEN",
  ODD = "ODD",
  EVERYWEEK = "EVERYWEEK",
}

export enum TypeOfLesson {
  LECTURE = "LECTURE",
  PRACTICE = "PRACTICE",
}

export interface ITeacher {
  id: number;
  name: string;
}

export interface ILesson {
  name: string;
  teacher: ITeacher;
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
  groupNumber: number;
  // schedule: ISchedule;
}
