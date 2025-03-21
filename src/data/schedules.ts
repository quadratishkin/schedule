import { IScheduleDay, ParityWeek, TypeOfLesson } from "./interfaces";
import { TEACHERS } from "./teachers";

export const scheduleTest: IScheduleDay[] = [
  {
    first: [
      {
        name: "понедельник первая пара нечетная",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "понедельник первая пара типа четная неделя",
        teacher: TEACHERS[0],
        audience: "а13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    second: [
      {
        name: "понедельник вторая пара четная",
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
