import { IGroup, ParityWeek, TypeOfLesson } from "./interfaces";
import { scheduleTest } from "./schedules";

export const GROUPS: IGroup[] = [
  {
    id: 0,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ-101",
    schedule: scheduleTest,
  },
  {
    id: 1,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "БИ-101",
    schedule: [
    {
      first: [
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
        audience: 431,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: 326,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК",
        teacher: 37,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК",
        teacher: 37,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
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
      }
      ],
      fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    },
    {
      first: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 32,
        audience: 326,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
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
      }
      ]
    },
    {
      second: [
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    },
    {
      first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК",
        teacher: 37,
        audience: 413,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
        teacher: 33,
        audience: 326,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
        teacher: 2,
        audience: 413,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fourth: [
      {
        name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
        teacher: 2,
        audience: "132А",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      fifth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС",
        teacher: 0,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      sixth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС https://moodle.uio.csu.ru/course/view.php?id=6422",
        teacher: 1,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    }
  ]
  },
  {
    id: 2,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ-201",
    schedule: [
      {
        fourth: [
        {
          name: "Иностранный язык",
          teacher: 8,
          audience: "011",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      fifth: [
        {
          name: "Экономика фирмы и автоматизация учета",
          teacher: 14,
          audience: "132Б",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.LECTURE,
        },
      ],
      sixth: [
        {
          name: "Экономика фирмы и автоматизация учета",
          teacher: 14,
          audience: "132Б",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      seventh: [
        {
          name: "Архитектура предприятия и моделирование бизнес-процессов",
          teacher: 14,
          audience: "132Б",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      },
      {
        first: [
          {
            name: "Теория вероятностей и мат. статистика",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        second: [
          {
            name: "Менеджмент в ИТ-сфере",
            teacher: 15,
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Вычислительные системы, сети и телекоммуникации",
            teacher: 3,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        third: [
          {
            name: "Прикладная физическая культура",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
    {},
    {
      first: [
        {
          name: "Иностранный язык",
          teacher: 8,
          audience: "429",
          week: ParityWeek.ODD,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      second: [
        {
          name: "Иностранный язык",
          teacher: 8,
          audience: "429",
          week: ParityWeek.ODD,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      fifth: [
        {
          name: "Архитектура предприятия и моделирование бизнес-процессов",
          teacher: 14,
          audience: "А-17",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.LECTURE,
        },
      ],
      sixth: [
        {
          name: "Вычислительные системы, сети и телекоммуникации",
          teacher: 3,
          audience: "132А",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      seventh: [
        {
          name: "Вычислительные системы, сети и телекоммуникации",
          teacher: 3,
          audience: "132А",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
    },
    {
      third: [ 
        {
          name: "Менеджмент в ИТ-сфере",
          teacher: 15,
          audience: "326",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      fourth: [
        {
          name: "Объектно-ориентированный анализ и программирование",
          teacher: 2,
          audience: "132Б",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.PRACTICE
        },
      ],
      fifth: [
        {
          name: "Объектно-ориентированный анализ и программирование",
          teacher: 16,
          audience: "132Б",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.LECTURE
        },
      ],
      sixth: [ 
        {
          name: "Теория вероятностей и мат. статистика",
          teacher: 17,
          audience: "013",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.PRACTICE
        },
      ],
    },
    {
      first: [
        {
          name: "Базы и хранилища данных",
          teacher: 18,
          audience: "132",
          week: ParityWeek.ODD,
          typeOfLesson: TypeOfLesson.PRACTICE
        },
      ],
      second: [
        {
          name: "Базы и хранилища данных",
          teacher: 18,
          audience: "132",
          week: ParityWeek.ODD,
          typeOfLesson: TypeOfLesson.PRACTICE
        },
      ],
      third: [ 
        {
          name: "Базы и хранилища данных",
          teacher: 18,
          audience: "А-13",
          week: ParityWeek.ODD,
          typeOfLesson: TypeOfLesson.LECTURE
        },
      ],
    },
    ],
  },
  {
    id: 3,
    courseNumber: 3,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПИ-301",
    schedule: [
      {
        first: [
          {
            name: "Системный анализ и моделирование",
            teacher: 19,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        second: [
          {
            name: "Системный анализ и моделирование",
            teacher: 19,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        seventh: [
          {
            name: "Корпоративные информационные системы",
            teacher: 20,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        eighth: [
          {
            name: "Корпоративные информационные системы",
            teacher: 20,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        seventh: [
          {
            name: "Управление ИТ-проектами и жизненным циклом ПО",
            teacher: 21,
            audience: "А-25",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        eighth: [
          {
            name: "Управление ИТ-проектами и жизненным циклом ПО",
            teacher: 21,
            audience: "А-25",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        seventh: [
          {
            name: "Машинное обучение и интеллектуальный анализ данных",
            teacher: 21,
            audience: "Дистанционно",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        eighth: [
          {
            name: "Машинное обучение и интеллектуальный анализ данных",
            teacher: 21,
            audience: "Дистанционно",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {},
      {
        fifth: [
          {
            name: "Архитектура предприятия и моделирование бизнес-процессов",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Интернет-маркетинг",
            teacher: 22,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        sixth: [
          {
            name: "Архитектура предприятия и моделирование бизнес-процессов",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Интернет-маркетинг",
            teacher: 22,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        seventh: [
          {
            name: "Архитектура предприятия и моделирование бизнес-процессов",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Интернет-маркетинг",
            teacher: 22,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        eighth: [
          {
            name: "Корпоративные информационные системы",
            teacher: 20,
            audience: "200",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        third: [
          {
            name: "Анализ данных",
            teacher: 23,
            audience: "Дистанционно",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fourth: [
          {
            name: "Анализ данных",
            teacher: 23,
            audience: "Дистанционно",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fifth: [
          {
            name: "Анализ данных",
            teacher: 23,
            audience: "Дистанционно",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ-101",
    schedule: [
    {
      first: [
      {
        name: "ИСТОРИЯ РОССИИ",
        teacher: 1,
        audience: 432,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
        teacher: 33,
        audience: 427,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: 337,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 25,
        audience: 337,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 326,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: "А-13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
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
      }
      ],
      fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    },
    {
      second: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: 431,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: "332А",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
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
      }
      ],
      fifth: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 25,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      sixth: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 25,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      third: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fifth: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: 425,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      third: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: "132А",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 0,
        audience: 413,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fifth: [
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "132А",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "А-15",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      third: [
      {
        name: "ПРОГРАММИРОВАНИЕ БАБИН И.К.",
        teacher: 0,
        audience: "А-13",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fifth: [
      {
        name: "ПРОГРАММИРОВАНИЕ БАБИН И.К.",
        teacher: 0,
        audience: "",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      sixth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС https://moodle.uio.csu.ru/course/view.php?id=6422",
        teacher: 1,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "ПРОГРАММИРОВАНИЕ",
        teacher: 0,
        audience: "",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    }
  ]
  },
  {
    id: 5,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ-102",
    schedule: [
    {
      second: [
      {
        name: "ИСТОРИЯ РОССИИ",
        teacher: 1,
        audience: 432,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fourth: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fifth: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "351А",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: 429,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: "А-13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
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
      }
      ],
      fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    },
    {
      second: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
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
      }
      ],
      fifth: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      sixth: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      third: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fifth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: 431,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      second: [
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 25,
        audience: 337,
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
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      second: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "А-15",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      third: [
      {
        name: "ПРОГРАММИРОВАНИЕ БАБИН И.К.",
        teacher: 0,
        audience: "А-13",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      },
      {
        name: "ПРОГРАММИРОВАНИЕ БАБИН И.К.",
        teacher: 0,
        audience: "",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fourth: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "132А",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ПРОГРАММИРОВАНИЕ БАБИН И.К.",
        teacher: 0,
        audience: "",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      sixth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС https://moodle.uio.csu.ru/course/view.php?id=6422",
        teacher: 1,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    }
  ]
  },
  {
    id: 6,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ-103",
    schedule: [
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
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fourth: [
      {
        name: "ИСТОРИЯ РОССИИ",
        teacher: 1,
        audience: 326,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      second: [
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: "А-13",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
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
      }
      ],
      fourth: [
      {
        name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ + ПР",
        teacher: 31,
        audience: "А-17",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fifth: [
      {
        name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
        teacher: 31,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 0,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
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
      }
      ],
      fifth: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: 200,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      first: [
      {
        name: "ФИЗИКА",
        teacher: 29,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
        teacher: 30,
        audience: 431,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ О.В.",
        teacher: 34,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fourth: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 36,
        audience: "А-15",
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    },
    {
      first: [
      {
        name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
        teacher: 35,
        audience: 100,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      second: [
      {
        name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
        teacher: 32,
        audience: 431,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      third: [
      {
        name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2)",
        teacher: 10,
        audience: "132Б",
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ]
    },
    {
      second: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "А-15",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      third: [
      {
        name: "ИНФОРМАТИКА ТЕРЮХИН А.Е.",
        teacher: 0,
        audience: "132А",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      fourth: [
      {
        name: "ПРОГРАММИРОВАНИЕ 1-8 НЕД",
        teacher: 27,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ],
      fifth: [
      {
        name: "ПРОГРАММИРОВАНИЕ",
        teacher: 27,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
      ],
      sixth: [
      {
        name: "ИСТОРИЯ РОССИИ ОНЛАЙН-КУРС https://moodle.uio.csu.ru/course/view.php?id=6422",
        teacher: 1,
        audience: "",
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.LECTURE,
      }
      ]
    }
  ]
  },
];
