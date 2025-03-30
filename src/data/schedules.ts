import { IScheduleDay, ParityWeek, TypeOfLesson } from "./interfaces";
import { TEACHERS } from "./teachers";

export const scheduleTest: IScheduleDay[] = [
  {
    third: [
      {
        name: "Физическая культура и спорт",
        teacher: TEACHERS[4],
        audience: "100 (4К.)",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "(9-16Н) Безопасность жизнедеятельности",
        teacher: TEACHERS[13],
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "История России",
        teacher: TEACHERS[1],
        audience: 432,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fifth: [
      {
        name: "Информатика и программирование",
        teacher: TEACHERS[2],
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    sixth: [
      {
        name: "Информатика и программирование",
        teacher: TEACHERS[2],
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    first: [
      {
        name: "Архитектура вычислительных систем",
        teacher: TEACHERS[3],
        audience: "132А",

        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "Архитектура вычислительных систем",
        teacher: TEACHERS[3],
        audience: "132А",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "(1-8Н) Психология лидерства и командообразование",
        teacher: TEACHERS[6],
        audience: "А-25",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    third: [
      {
        name: "Математический анализ",
        teacher: TEACHERS[5],
        audience: 432,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "Физическая культура и спорт",
        teacher: TEACHERS[4],
        audience: "100 (4К.)",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "(1-8Н) Психология лидерства и командообразование",
        teacher: TEACHERS[6],
        audience: "132",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    second: [
      {
        name: "Экономическая теория",
        teacher: TEACHERS[7],
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    third: [
      {
        name: "Экономическая теория",
        teacher: TEACHERS[7],
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "Архитектура вычислительных систем",
        teacher: TEACHERS[3],
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "Иностранный язык",
        teacher: TEACHERS[8],
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    third: [
      {
        name: "Информатика и программирование",
        teacher: TEACHERS[2],
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "Математический анализ",
        teacher: TEACHERS[0],
        audience: "А-17",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fifth: [
      {
        name: "История России",
        teacher: TEACHERS[9],
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
  {
    first: [
      {
        name: "Иностранный язык",
        teacher: TEACHERS[8],
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "Иностранный язык",
        teacher: TEACHERS[8],
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    third: [
      {
        name: "Прикладная физическая культура",
        teacher: TEACHERS[4],
        audience: "100 (4К.)",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "Иностранный язык",
        teacher: TEACHERS[10],
        audience: "429",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fifth: [
      {
        name: "Иностранный язык",
        teacher: TEACHERS[10],
        audience: "429",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    sixth: [
      {
        name: "История России",
        teacher: TEACHERS[11],
        audience: "Онлайн-курс",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "(9-16Н) Безопасность жизнедеятельности",
        teacher: TEACHERS[12],
        audience: "Онлайн-курс",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
];
