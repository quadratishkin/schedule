import { IGroup, ParityWeek, TypeOfLesson } from "./interfaces";

export const GROUPS: IGroup[] = [
  {
    id: 0,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ИТ1-БИб-11",
    schedule: [
      {
        second: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teachers: [
              1
            ],
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teachers: [
              1
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              3
            ],
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРАВО",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              5
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              6
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              6
            ],
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              8
            ],
            audience: "А-15",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ АССИСТЕНТ",
            teachers: [
              9
            ],
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. А-15 (1НЕД.)",
            teachers: [
              4
            ],
            audience: "-7",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              10
            ],
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132Б (9НЕД.)",
            teachers: [
              4
            ],
            audience: "-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС ЧАСА)",
            teachers: [
              7
            ],
            audience: "22",
            week: ParityWeek.EVERYWEEK,
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
    groupNumber: "ИТ1-ПИб-11",
    schedule: [
      {
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teachers: [
              1
            ],
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              3
            ],
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "025",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр",
            teachers: [
              12
            ],
            audience: "436",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр",
            teachers: [
              11
            ],
            audience: "025",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРАВО",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              5
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        first: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (9НЕД.)",
            teachers: [
              4
            ],
            audience: "-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              8
            ],
            audience: "А-15",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ",
            teachers: [
              1
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. А-15 (1НЕД.)",
            teachers: [
              4
            ],
            audience: "-7",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              10
            ],
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС ЧАСА)",
            teachers: [
              7
            ],
            audience: "22",
            week: ParityWeek.EVERYWEEK,
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
    groupNumber: "ИТ1-ПрИб-11",
    schedule: [
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "425\n201",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРАВО",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              5
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (2НЕД.)",
            teachers: [
              4
            ],
            audience: "-8",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              14
            ],
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              8
            ],
            audience: "А-15",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. А-15 (1НЕД.)",
            teachers: [
              4
            ],
            audience: "-7",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              10
            ],
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              3
            ],
            audience: "427",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНФОРМАТИКА",
            teachers: [
              16
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИНФОРМАТИКА",
            teachers: [
              16
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС ЧАСА)",
            teachers: [
              7
            ],
            audience: "22",
            week: ParityWeek.EVERYWEEK,
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
    groupNumber: "ИТ1-ПрИб-12",
    schedule: [
      {},
      {
        third: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРАВО",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              5
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              6
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (2НЕД.)",
            teachers: [
              4
            ],
            audience: "-8",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ",
            teachers: [
              0
            ],
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИСТОРИЯ РОССИИ",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              6
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              8
            ],
            audience: "А-15",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              14
            ],
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. А-15 (1НЕД.)",
            teachers: [
              4
            ],
            audience: "-7",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ",
            teachers: [
              10
            ],
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ФИЗИКА",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ",
            teachers: [
              3
            ],
            audience: "427",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИНФОРМАТИКА",
            teachers: [
              16
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНФОРМАТИКА",
            teachers: [
              16
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС ЧАСА)",
            teachers: [
              7
            ],
            audience: "22",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 4,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "БИ 201",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ФИЛОСОФИЯ ус)",
            teachers: [
              20
            ],
            audience: "211 (4 корп.)",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ИНКЛЮЗИВНАЯ КОМПЕТЕНТНОСТЬ В СОЦИАЛЬНОЙ И",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНКЛЮЗИВНАЯ КОМПЕТЕНТНОСТЬ В СОЦИАЛЬНОЙ И ПРОФЕССИОНАЛЬНОЙ СФЕРАХ (ОНЛАЙН КУРС)",
            teachers: [
              23
            ],
            audience: "",
            week: ParityWeek.ODD,
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
    groupNumber: "ПИ 201",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ФИЛОСОФИЯ ус)",
            teachers: [
              20
            ],
            audience: "211 (4 корп.)",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 6,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 201",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "А-21",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ]
      },
      {
        third: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "204",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 7,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 202",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "А-21",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fifth: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        sixth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 8,
    courseNumber: 2,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 203",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "А-21",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ",
            teachers: [
              24,
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА ус)",
            teachers: [
              2
            ],
            audience: "100 (4 корп.)",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ",
            teachers: [
              17
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ",
            teachers: [
              1
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА",
            teachers: [
              10
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ФИЛОСОФИЯ",
            teachers: [
              20
            ],
            audience: "432",
            week: ParityWeek.ODD,
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
    groupNumber: "БИ 301",
    schedule: [
      {
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fourth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teachers: [
              26
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teachers: [
              26
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
            teachers: [
              30
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
            teachers: [
              30
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              31
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teachers: [
              19,
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teachers: [
              19,
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
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
    groupNumber: "ПИ 301",
    schedule: [
      {
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fourth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teachers: [
              26
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ",
            teachers: [
              26
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              31
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teachers: [
              19,
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ",
            teachers: [
              19,
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "с 19:00 РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teachers: [
              35
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teachers: [
              35
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
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
    groupNumber: "ПрИ 301",
    schedule: [
      {
        fourth: [
          {
            name: "ЭКОНОМИКА ПРОГРАММНОЙ ИНЖЕНЕРИИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИКА ПРОГРАММНОЙ ИНЖЕНЕРИИ",
            teachers: [
              37
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ПРОГРАММНОЙ ИНЖЕНЕРИИ",
            teachers: [
              37
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО",
            teachers: [
              27,
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
            teachers: [
              30
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА",
            teachers: [
              31
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "с 19:00 РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teachers: [
              35
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ",
            teachers: [
              35
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
            teachers: [
              30
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АНАЛИЗ ДАННЫХ",
            teachers: [
              33
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ",
            teachers: [
              30
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ТЕХНОЛОГИИ ПРИКЛАД. ПРОГРАМ-ИЯ 1гр",
            teachers: [
              36
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
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
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ИНФОРМАЦИОННЫЕ СИСТЕМЫ",
            teachers: [],
            audience: "КОРПОРАТИВНЫЕ",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 13,
    courseNumber: 4,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 401",
    schedule: [
      {
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "425",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fifth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 14,
    courseNumber: 4,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ 402",
    schedule: [
      {
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "425",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {
        fifth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ",
            teachers: [
              38
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ",
            teachers: [
              41
            ],
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  }
];
