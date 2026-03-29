import { IGroup, ParityWeek, TypeOfLesson } from "./interfaces";

export const GROUPS: IGroup[] = [
  {
    id: 0,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "БИ 101",
    schedule: [
      {
        first: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teacher: 36,
            audience: "413",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ",
            teacher: 13,
            audience: "201",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 1,
            audience: "427",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teacher: 41,
            audience: "027",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teacher: 41,
            audience: "027",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
            teacher: 42,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 1,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ 101",
    schedule: [
      {
        first: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ",
            teacher: 13,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teacher: 0,
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 1,
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 8,
            audience: "023",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 8,
            audience: "023",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 2,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 101",
    schedule: [
      {
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. 109",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 44,
            audience: "011",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 44,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 44,
            audience: "013",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 44,
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 1,
            audience: "427",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teacher: 0,
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС)",
            teacher: 1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 3,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 102",
    schedule: [
      {
        first: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. А-17",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 44,
            audience: "025",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "027",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 1,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 44,
            audience: "425",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 44,
            audience: "425",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teacher: 36,
            audience: "425",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС)",
            teacher: 1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 4,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 103",
    schedule: [
      {
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. 201",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teacher: 32,
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teacher: 31,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teacher: 1,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ",
            teacher: 3,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ (ЛЕК+)",
            teacher: 27,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teacher: 27,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС)",
            teacher: 1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС)",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 5,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "БИ 201",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teacher: 46,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teacher: 46,
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 16,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 6,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ 201",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 8,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 8,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 46,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 8,
            audience: "109",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 46,
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 16,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 7,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 201",
    schedule: [
      {
        first: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 47,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 47,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        second: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 8,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 202",
    schedule: [
      {
        first: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 47,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teacher: 47,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ (ОНЛАЙН-КУРС)",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ",
            teacher: 15,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teacher: 35,
            audience: "4 корпус",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ]
      },
      {
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 9,
    courseNumber: 3,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ 301",
    schedule: [
      {
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teacher: 22,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teacher: 22,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teacher: 22,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teacher: 14,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "В 10:00 АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 10,
    courseNumber: 3,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 301",
    schedule: [
      {
        fifth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "В 10:00 АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 11,
    courseNumber: 3,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 302",
    schedule: [
      {
        fifth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ",
            teacher: 20,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teacher: 48,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ",
            teacher: 19,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "В 10:00 АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 12,
    courseNumber: 4,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ 401",
    schedule: [
      {
        sixth: [
          {
            name: "ДЕНЬ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "САМОСТОЯТЕЛЬНЫХ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ЗАНЯТИЙ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: -1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 50,
            audience: "432",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 50,
            audience: "432",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ДЕНЬ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "САМОСТОЯТЕЛЬНЫХ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ЗАНЯТИЙ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ДЕНЬ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "САМОСТОЯТЕЛЬНЫХ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ЗАНЯТИЙ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ",
            teacher: 51,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ",
            teacher: 51,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ",
            teacher: 51,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 13,
    courseNumber: 4,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 401",
    schedule: [
      {
        sixth: [
          {
            name: "ДЕНЬ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "САМОСТОЯТЕЛЬНЫХ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ЗАНЯТИЙ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: -1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 50,
            audience: "432",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teacher: 50,
            audience: "432",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ДЕНЬ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "САМОСТОЯТЕЛЬНЫХ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ЗАНЯТИЙ",
            teacher: -1,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        third: [
          {
            name: "с 12:00 ЗАЩИТА ИНФОРМАЦИИ",
            teacher: 52,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teacher: 52,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teacher: 52,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  }
];
