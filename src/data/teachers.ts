import { ITeacher, ParityWeek, TypeOfLesson } from "./interfaces";

export const TEACHERS: ITeacher[] = [
  {
    id: 0,
    name: "Корецкая Т.П.",
    schedule: [
      {
        second: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ [ИТ1-БИб-11]",
            teachers: [
              0
            ],
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ [ИТ1-ПИб-11]",
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
        third: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРАВО [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              0
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ [ИТ1-ПрИб-11]",
            teachers: [
              0
            ],
            audience: "425\n201",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ОСНОВЫ РОССИЙСКОЙ ГОСУДАРСТВЕННОСТИ [ИТ1-ПрИб-12]",
            teachers: [
              0
            ],
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {}
    ]
  },
  {
    id: 1,
    name: "Николаев И.Е.",
    schedule: [
      {
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [ИТ1-БИб-11, ИТ1-ПИб-11]",
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
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [ИТ1-БИб-11]",
            teachers: [
              1
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fourth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [ПрИ 201, ПрИ 202, ПрИ 203]",
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
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [ПрИ 201]",
            teachers: [
              1
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [ПрИ 202]",
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
        fifth: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [ИТ1-ПИб-11]",
            teachers: [
              1
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [ПрИ 203]",
            teachers: [
              1
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 2,
    name: "Панькин В.Е.",
    schedule: [
      {
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ [ИТ1-БИб-11]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ [ИТ1-ПрИб-12]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА [ПрИ 202]",
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
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ [ИТ1-ПрИб-11]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА [БИ 201, ПИ 201]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА [БИ 201, ПИ 201]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА ус) [ПрИ 203]",
            teachers: [
              2
            ],
            audience: "100 (4 корп.)",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ [ИТ1-ПИб-11]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА [ПрИ 201]",
            teachers: [
              2
            ],
            audience: "ФОК",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 3,
    name: "Тюрина И.А.",
    schedule: [
      {
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ [ИТ1-ПИб-11]",
            teachers: [
              3
            ],
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ [ИТ1-БИб-11]",
            teachers: [
              3
            ],
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {
        third: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ [ИТ1-ПрИб-11]",
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
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ [ИТ1-ПрИб-12]",
            teachers: [
              3
            ],
            audience: "427",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 4,
    name: "Земцова Е.М.",
    schedule: [
      {
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-11]",
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
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-11]",
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
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              4
            ],
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (2НЕД.) [ИТ1-ПрИб-11]",
            teachers: [
              4
            ],
            audience: "-8",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-12]",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-12]",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (2НЕД.) [ИТ1-ПрИб-12]",
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
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПИб-11]",
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
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132 (9НЕД.) [ИТ1-ПИб-11]",
            teachers: [
              4
            ],
            audience: "-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПИб-11]",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-11]",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-ПрИб-12]",
            teachers: [
              4
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. А-15 (1НЕД.) [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              4
            ],
            audience: "-7",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-БИб-11]",
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
            name: "СОВР.ТЕХНОЛОГИИ ПОИСКА И ОБРАБОТКИ ИНФОРМАЦИИ АУД. 132Б (9НЕД.) [ИТ1-БИб-11]",
            teachers: [
              4
            ],
            audience: "-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ИТ1-БИб-11]",
            teachers: [
              4
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 5,
    name: "Рыбалко А.А.",
    schedule: [
      {},
      {
        fourth: [
          {
            name: "ИСТОРИЯ РОССИИ [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              5
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 6,
    name: "Сотникова Е.С.",
    schedule: [
      {},
      {
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПрИб-12]",
            teachers: [
              6
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
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-БИб-11]",
            teachers: [
              6
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-БИб-11]",
            teachers: [
              6
            ],
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПрИб-12]",
            teachers: [
              6
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {}
    ]
  },
  {
    id: 7,
    name: "Быкова В.В.",
    schedule: [
      {},
      {},
      {
        first: [
          {
            name: "ИСТОРИЯ РОССИИ [ИТ1-БИб-11]",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ [ИТ1-ПИб-11]",
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
            name: "ИСТОРИЯ РОССИИ [ИТ1-ПрИб-11]",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ [ИТ1-ПрИб-12]",
            teachers: [
              7
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС ЧАСА) [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
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
    id: 8,
    name: "Митина О.В.",
    schedule: [
      {},
      {},
      {},
      {
        fourth: [
          {
            name: "ЛИНЕЙНАЯ АЛГЕБРА И АНАЛИТИЧЕСКАЯ ГЕОМЕТРИЯ [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              8
            ],
            audience: "А-15",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 9,
    name: "Сомикова Т.А.",
    schedule: [
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ АССИСТЕНТ [ИТ1-БИб-11]",
            teachers: [
              9
            ],
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 10,
    name: "Нагуманова А.В.",
    schedule: [
      {
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [БИ 201, ПИ 201, ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              10
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [БИ 201, ПИ 201]",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [БИ 201, ПИ 201]",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [ПрИ 202]",
            teachers: [
              10
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [ПрИ 203]",
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
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ИТ1-БИб-11, ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
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
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ИТ1-ПИб-11]",
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
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [ПрИ 201]",
            teachers: [
              10
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 11,
    name: "Мингажева Е.А.",
    schedule: [
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр [ИТ1-ПрИб-11]",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр [ИТ1-ПрИб-11]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр [ИТ1-ПрИб-11]",
            teachers: [
              11
            ],
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр [ИТ1-ПрИб-11]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 203]",
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
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПИб-11]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр [ИТ1-ПИб-11]",
            teachers: [
              11
            ],
            audience: "025",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПИб-11]",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр [ИТ1-ПрИб-11]",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 2гр [ИТ1-ПрИб-11]",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 202]",
            teachers: [
              11
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 202]",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 203]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 202]",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 203]",
            teachers: [
              11
            ],
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 12,
    name: "Ковальчук Л.П.",
    schedule: [
      {},
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК 1гр [ИТ1-ПИб-11]",
            teachers: [
              12
            ],
            audience: "436",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПИб-11]",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПИ 201]",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ИТ1-ПИб-11]",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПИ 201]",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПИ 201]",
            teachers: [
              12
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 13,
    name: "Бутько Л.Н.",
    schedule: [
      {},
      {},
      {
        second: [
          {
            name: "ФИЗИКА [ИТ1-ПИб-11]",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ФИЗИКА [ИТ1-ПИб-11, ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              13
            ],
            audience: "А-15",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ФИЗИКА [ИТ1-ПрИб-11]",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ФИЗИКА [ИТ1-ПрИб-12]",
            teachers: [
              13
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 14,
    name: "Шайхуллина П.А.",
    schedule: [
      {},
      {},
      {
        first: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ИТ1-ПрИб-11]",
            teachers: [
              14
            ],
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ. ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ИТ1-ПрИб-12]",
            teachers: [
              14
            ],
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 15,
    name: "Кирсанов А.А.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        second: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ИТ1-ПрИб-11]",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
            teachers: [
              15
            ],
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ИТ1-ПрИб-11]",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРОГРАММИРОВАНИЕ [ИТ1-ПрИб-12]",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ИТ1-ПрИб-12]",
            teachers: [
              15
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 16,
    name: "Терюхин А.Е.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        second: [
          {
            name: "ИНФОРМАТИКА [ИТ1-ПрИб-11]",
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
            name: "ИНФОРМАТИКА [ИТ1-ПрИб-11, ИТ1-ПрИб-12]",
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
            name: "ИНФОРМАТИКА [ИТ1-ПрИб-12]",
            teachers: [
              16
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 17,
    name: "Скрипов С.А.",
    schedule: [
      {
        first: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202, ПрИ 203]",
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
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              17
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [БИ 201, ПИ 201]",
            teachers: [
              17
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ [ПрИ 401, ПрИ 402]",
            teachers: [
              17
            ],
            audience: "425",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [БИ 201, ПИ 201]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 201]",
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
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [БИ 201, ПИ 201]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 201]",
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
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 201]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 203]",
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
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 201]",
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
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 202]",
            teachers: [
              17
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 203]",
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
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ [ПрИ 401]",
            teachers: [
              17
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
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 201]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 201]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 202]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 202]",
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
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 202]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [ПрИ 202]",
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
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 203]",
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
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ [ПрИ 401]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 201]",
            teachers: [
              17
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 203]",
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
            name: "ОСНОВЫ ЭЛЕКТРОНИКИ И РОБОТОТЕХНИКИ [ПрИ 203]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ [ПрИ 402]",
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
            name: "ПРОГРАММИРОВАНИЕ МИКРОКОНТРОЛЛЕРОВ [ПрИ 402]",
            teachers: [
              17
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 18,
    name: "Савко П.В.",
    schedule: [
      {
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 201]",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 201]",
            teachers: [
              18
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 201]",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 201]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 201]",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [ПрИ 201]",
            teachers: [
              18
            ],
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 19,
    name: "Петриченко Ю.В.",
    schedule: [
      {
        seventh: [
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ [ПрИ 401]",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
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
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
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
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
            teachers: [
              19
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        sixth: [
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ [ПрИ 402]",
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
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [БИ 301, ПИ 301]",
            teachers: [
              19
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [БИ 301, ПИ 301]",
            teachers: [
              19
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ [ПИ 401]",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ [ПрИ 402]",
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
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ [ПИ 401, ПрИ 401, ПрИ 402]",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ [ПИ 401, ПрИ 401, ПрИ 402]",
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
            name: "СТРАТЕГИЯ РАЗВИТИЯ ЦИФРОВЫХ ПРОДУКТОВ [ПИ 401]",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ДЕЛОВЫЕ КОММУНИКАЦИИ [ПрИ 401]",
            teachers: [
              19
            ],
            audience: "А-13",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 20,
    name: "Соломко Д.В.",
    schedule: [
      {},
      {},
      {},
      {
        third: [
          {
            name: "ФИЛОСОФИЯ ус) [БИ 201, ПИ 201]",
            teachers: [
              20
            ],
            audience: "211 (4 корп.)",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ФИЛОСОФИЯ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              20
            ],
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "ФИЛОСОФИЯ [ПрИ 201]",
            teachers: [
              20
            ],
            audience: "204",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЛОСОФИЯ [ПрИ 202]",
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
            name: "ФИЛОСОФИЯ [ПрИ 203]",
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
    id: 21,
    name: "Мельников В.А",
    schedule: [
      {},
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [БИ 201, ПИ 201]",
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
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [БИ 201, ПИ 201]",
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
            name: "АЛГОРИТМЫ И АНАЛИЗ СЛОЖНОСТИ [БИ 201, ПИ 201]",
            teachers: [
              21
            ],
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 22,
    name: "Барабанщиков И.В.",
    schedule: [
      {
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 301, ПИ 301]",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 301, ПИ 301, ПрИ 301]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 301, ПИ 301]",
            teachers: [
              22
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              22
            ],
            audience: "А-21",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {},
      {},
      {
        sixth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 201]",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 301]",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 301]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 301]",
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
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202, ПрИ 203]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 201, ПИ 201]",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 203]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [БИ 201, ПИ 201]",
            teachers: [
              22
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 203]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 202]",
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
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПрИ 202]",
            teachers: [
              22
            ],
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ [ПИ 301]",
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
    id: 23,
    name: "Жигар А.И.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 24,
    name: "Поляков В.П.",
    schedule: [
      {},
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 202]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 202]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              24
            ],
            audience: "А-21",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 203]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 203]",
            teachers: [
              24
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 25,
    name: "Долгов А.Ю.",
    schedule: [
      {},
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 202]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 202]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201, ПрИ 202, ПрИ 203]",
            teachers: [
              25
            ],
            audience: "А-21",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 203]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 203]",
            teachers: [
              25
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 26,
    name: "Шепталин А.Г.",
    schedule: [
      {},
      {
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [БИ 301, ПИ 301]",
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
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [БИ 301, ПИ 301]",
            teachers: [
              26
            ],
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 27,
    name: "Воробьев В.И.",
    schedule: [
      {},
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              27
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              27
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 28,
    name: "Гнедкова Я.Е.",
    schedule: [
      {},
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕННЫМ ЦИКЛОМ ПО [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              28
            ],
            audience: "А-21",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 29,
    name: "Митянина А.В.",
    schedule: [
      {},
      {},
      {
        sixth: [
          {
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ [БИ 301, ПИ 301]",
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
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ [БИ 301, ПИ 301]",
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
            name: "ИНТЕРНЕТ-ТЕХНОЛОГИИ [БИ 301, ПИ 301]",
            teachers: [
              29
            ],
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {}
    ]
  },
  {
    id: 30,
    name: "Булавин Р.С.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        third: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ [ПрИ 301]",
            teachers: [
              30
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ТЕСТИРОВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ [ПрИ 301]",
            teachers: [
              30
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 31,
    name: "Гизатулина А.А.",
    schedule: [
      {},
      {},
      {},
      {
        fourth: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА [БИ 301, ПИ 301, ПрИ 301]",
            teachers: [
              31
            ],
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 32,
    name: "Новикова М.В.",
    schedule: [
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [БИ 301, ПИ 301]",
            teachers: [
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [БИ 301, ПИ 301]",
            teachers: [
              32
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {}
    ]
  },
  {
    id: 33,
    name: "Мирасов В.Ф.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 34,
    name: "Богатенков Д.С.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ [БИ 301]",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ [БИ 301]",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр [ПИ 301, ПрИ 301]",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр [ПИ 301, ПрИ 301]",
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
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ [БИ 301]",
            teachers: [
              34
            ],
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "СОЗДАНИЕ БИЗНЕС-ПРИЛОЖ. В СИС-МЕ 1С-ПРЕДПРИЯТИЕ 2гр [ПИ 301, ПрИ 301]",
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
    id: 35,
    name: "Павличенков Е.А.",
    schedule: [
      {},
      {},
      {},
      {
        seventh: [
          {
            name: "с 19:00 РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПИ 301, ПрИ 301]",
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
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПИ 301, ПрИ 301]",
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
      {}
    ]
  },
  {
    id: 36,
    name: "Веригин Н.В.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 37,
    name: "Ткач Е.С.",
    schedule: [
      {
        fifth: [
          {
            name: "ЭКОНОМИКА ПРОГРАММНОЙ ИНЖЕНЕРИИ [ПрИ 301]",
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
            name: "ЭКОНОМИКА ПРОГРАММНОЙ ИНЖЕНЕРИИ [ПрИ 301]",
            teachers: [
              37
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {},
      {},
      {},
      {}
    ]
  },
  {
    id: 38,
    name: "Мельников В.А.",
    schedule: [
      {
        sixth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПИ 401, ПрИ 401, ПрИ 402]",
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
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПИ 401]",
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
      {},
      {},
      {
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПрИ 401]",
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
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПрИ 402]",
            teachers: [
              38
            ],
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 39,
    name: "Ботов С.Г.",
    schedule: [
      {},
      {},
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПИ 401]",
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
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПИ 401, ПрИ 401, ПрИ 402]",
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
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПрИ 402]",
            teachers: [
              39
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
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПИ 401]",
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
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПИ 401]",
            teachers: [
              39
            ],
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ СТ.ПРЕПОД [ПрИ 401]",
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
    id: 40,
    name: "Полторак С.Н.",
    schedule: [
      {},
      {},
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ [ПИ 401, ПрИ 401, ПрИ 402]",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ [ПИ 401]",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ [ПрИ 401]",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "УПРАВЛЕНИЕ ИТ-СЕРВИСАМИ И КОНТЕНТОМ [ПрИ 402]",
            teachers: [
              40
            ],
            audience: "413",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {}
    ]
  },
  {
    id: 41,
    name: "Косенко М.Ю.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  }
];
