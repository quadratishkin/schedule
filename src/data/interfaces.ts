import { TEACHERS } from "./teachers";

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

export const scheduleTest: IScheduleDay[] = [
  {
    first: [
      {
        name: "понедельник первая пара",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "понедельник первая пара типа четная неделя",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    second: [
      {
        name: "понедельник вторая пара",
        teacher: TEACHERS[1],
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {},
  {
    first: [
      {
        name: "среда первая пара",
        teacher: TEACHERS[0],
        audience: "а13",
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    second: [
      {
        name: "среда вторая пара",
        teacher: TEACHERS[1],
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    fifth: [
      {
        name: "четверг 5 пара",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
  {
    fourth: [
      {
        name: "пятница 4 пара",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    sixth: [
      {
        name: "пятница 6 пара",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
  {
    sixth: [
      {
        name: "суббота 6 пара",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
];
