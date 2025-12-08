import { IScheduleDay, ParityWeek, TypeOfLesson } from './interfaces';

export const scheduleTest: IScheduleDay[] = [
  {
    first: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: 441,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИСТОРИЯ РОССИИ",
        teacher: 1,
        audience: 432,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    third: [
      {
        name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
        teacher: 2,
        audience: "132А",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 10,
        audience: 436,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 10,
        audience: 436,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: "А-13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    third: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: "А-13",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "ПРАВО",
        teacher: 30,
        audience: "А-13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
        teacher: 33,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    third: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 8,
        audience: "132А",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    fourth: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: "А-15",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "ИСТОРИЯ РОССИИ",
        teacher: 9,
        audience: "А-15",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fifth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 32,
        audience: 429,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    first: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
        teacher: 0,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
        teacher: 33,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    third: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fifth: [
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 10,
        audience: 429,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 8,
        audience: 432,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    second: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
    third: [
      {
        name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
        teacher: 2,
        audience: 413,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
    ],
  },
  {
    fifth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС",
        teacher: 0,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
    sixth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС https://moodle.uio.csu.ru/course/view.php?id=6422",
        teacher: 1,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
    ],
  },
];
