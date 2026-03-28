import { IScheduleDay, ParityWeek, TypeOfLesson } from './interfaces';

export const scheduleTest: IScheduleDay[] = [
  {
    first: [
    {
      name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ",
      teacher: 13,
      audience: 109,
      week: ParityWeek.ODD,
      typeOfLesson: TypeOfLesson.PRACTICE,
    },
    {
      name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
      teacher: 6,
      audience: 132,
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    second: [
    {
      name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
      teacher: 39,
      audience: "А-17",
      week: ParityWeek.ODD,
      typeOfLesson: TypeOfLesson.LECTURE,
    },
    {
      name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
      teacher: 6,
      audience: "А-17",
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ],
    third: [
    {
      name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
      teacher: 0,
      audience: 431,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    fourth: [
    {
      name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
      teacher: 3,
      audience: "132А",
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ]
  },
  {
    third: [
    {
      name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
      teacher: 35,
      audience: "4 корпус",
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    fourth: [
    {
      name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
      teacher: 39,
      audience: 132,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ]
  },
  {
    third: [
    {
      name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
      teacher: 2,
      audience: 132,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ],
    fourth: [
    {
      name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
      teacher: 3,
      audience: "А-17",
      week: ParityWeek.ODD,
      typeOfLesson: TypeOfLesson.LECTURE,
    },
    {
      name: "ИСТОРИЯ РОССИИ",
      teacher: 9,
      audience: "А-17",
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ],
    fifth: [
    {
      name: "ИСТОРИЯ РОССИИ",
      teacher: 1,
      audience: 13,
      week: ParityWeek.ODD,
      typeOfLesson: TypeOfLesson.PRACTICE,
    },
    {
      name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
      teacher: 2,
      audience: 132,
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ]
  },
  {
    first: [
    {
      name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
      teacher: 10,
      audience: "132Б",
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.PRACTICE,
    },
    {
      name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
      teacher: 8,
      audience: 23,
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    second: [
    {
      name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
      teacher: 10,
      audience: "132Б",
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    },
    {
      name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
      teacher: 8,
      audience: 23,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    third: [
    {
      name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
      teacher: 42,
      audience: 326,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ],
    fourth: [
    {
      name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
      teacher: 42,
      audience: 326,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ]
  },
  {
    first: [
    {
      name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
      teacher: 36,
      audience: "А-17",
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ],
    second: [
    {
      name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
      teacher: 2,
      audience: 132,
      week: ParityWeek.EVERYWEEK,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ],
    third: [
    {
      name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
      teacher: 2,
      audience: 132,
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.PRACTICE,
    }
    ]
  },
  {
    sixth: [
    {
      name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС)",
      teacher: 1,
      audience: "",
      week: ParityWeek.ODD,
      typeOfLesson: TypeOfLesson.LECTURE,
    },
    {
      name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
      teacher: 43,
      audience: "",
      week: ParityWeek.EVEN,
      typeOfLesson: TypeOfLesson.LECTURE,
    }
    ]
  }
];