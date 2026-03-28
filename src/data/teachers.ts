import { ITeacher, ParityWeek, TypeOfLesson } from "./interfaces";

export const TEACHERS: ITeacher[] = [
  {
    id: 0,
    name: "Нагуманова А.В.",
    schedule: [
      {
        third: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ПИ 101]",
            teacher: 0,
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        first: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [БИ 201, ПИ 201, ПрИ 201, ПрИ 202]",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [ПрИ 202]",
            teacher: 0,
            audience: "132",
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
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [БИ 201, ПИ 201]",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ПрИ 101]",
            teacher: 0,
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКАЯ СТАТИСТИКА [ПрИ 201]",
            teacher: 0,
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
    id: 1,
    name: "Быкова В.В.",
    schedule: [
      {},
      {},
      {
        fourth: [
          {
            name: "ИСТОРИЯ РОССИИ [БИ 101]",
            teacher: 1,
            audience: "427",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ИСТОРИЯ РОССИИ [ПИ 101]",
            teacher: 1,
            audience: "013",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ [ПрИ 102]",
            teacher: 1,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ [ПрИ 101]",
            teacher: 1,
            audience: "427",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИСТОРИЯ РОССИИ [ПрИ 103]",
            teacher: 1,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {
        sixth: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС) [БИ 101, ПИ 101]",
            teacher: 1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ИСТОРИЯ РОССИИ (ОНЛАЙН-КУРС) [ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 1,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Николаев И.Е.",
    schedule: [
      {},
      {},
      {
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [БИ 101, ПИ 101]",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [БИ 101, ПИ 101]",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        second: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [БИ 101, ПИ 101]",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНФОРМАТИКА И ПРОГРАММИРОВАНИЕ [БИ 101, ПИ 101]",
            teacher: 2,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [БИ 201, ПИ 201]",
            teacher: 2,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [БИ 201, ПИ 201]",
            teacher: 2,
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
    id: 3,
    name: "Скрипов С.А.",
    schedule: [
      {
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ [ПИ 101]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [БИ 201, ПИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ [БИ 201, ПИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        first: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ]
      },
      {
        eighth: [
          {
            name: "ВЫЧИСЛИТЕЛЬНЫЕ СИСТЕМЫ СЕТИ И ТЕЛЕКОММУНИКАЦИИ (ОНЛАЙН-КУРС) [БИ 201, ПИ 201, ПрИ 201, ПрИ 202]",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ (ОНЛАЙН-КУРС) [ПрИ 201, ПрИ 202]",
            teacher: 3,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {
        fourth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ [ПИ 101, ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 3,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fifth: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ [ПрИ 101]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        first: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        second: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 201]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        third: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ],
        fourth: [
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LAB
          }
        ]
      },
      {
        third: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ [ПрИ 102]",
            teacher: 3,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "АРХИТЕКТУРА ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ [ПрИ 103]",
            teacher: 3,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ОПЕРАЦИОННЫЕ СИСТЕМЫ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВЫЧ. СИСТЕМЫ СЕТИ И ТЕЛЕКОМ-ИИ [ПрИ 202]",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LAB
          }
        ]
      },
      {}
    ]
  },
  {
    id: 4,
    name: "Сиряченко К.Т.",
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
    id: 5,
    name: "Панов А.В.",
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
    id: 6,
    name: "Теске Г.П.",
    schedule: [
      {
        first: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ [БИ 101, ПИ 101]",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ [БИ 101, ПИ 101, ПрИ 101, ПрИ 103]",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. А-17 [ПрИ 102]",
            teacher: 6,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. 109 [ПрИ 101]",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ [ПрИ 102]",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ПСИХОЛОГИЯ ЛИДЕРСТВА И КОМАНДООБРАЗОВАНИЕ БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ АУД. 201 [ПрИ 103]",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
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
    id: 7,
    name: "Макарова Л.И.",
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
    id: 8,
    name: "Ковальчук Л.П.",
    schedule: [
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПИ 201]",
            teacher: 8,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПИ 201]",
            teacher: 8,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПИ 101]",
            teacher: 8,
            audience: "023",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПИ 101]",
            teacher: 8,
            audience: "023",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПИ 201]",
            teacher: 8,
            audience: "109",
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
    id: 9,
    name: "Рыбалко А.А.",
    schedule: [
      {},
      {},
      {
        fourth: [
          {
            name: "ИСТОРИЯ РОССИИ [БИ 101, ПИ 101, ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {},
      {},
      {}
    ]
  },
  {
    id: 10,
    name: "Мингажева Е.А.",
    schedule: [
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 201]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 201]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 202]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 202]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 102]",
            teacher: 10,
            audience: "027",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 103]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 103]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 103]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 103]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 103]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 103]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 201]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 201]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 202]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 202]",
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
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПИ 101]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПИ 101]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 102]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 201]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 102]",
            teacher: 10,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 202]",
            teacher: 10,
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
    id: 11,
    name: "Попов А.А.",
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
    id: 12,
    name: "Бармасов А.А.",
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
    id: 13,
    name: "Козырская И.Н.",
    schedule: [
      {
        fourth: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ [БИ 101]",
            teacher: 13,
            audience: "201",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        first: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ [ПИ 101]",
            teacher: 13,
            audience: "109",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
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
    id: 14,
    name: "Шепталин А.Г.",
    schedule: [
      {
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fifth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ЭКОНОМИКА ФИРМЫ И АВТОМАТИЗАЦИЯ УЧЕТА [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ [ПИ 401, ПрИ 401]",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ [ПИ 401, ПрИ 401]",
            teacher: 14,
            audience: "432",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fifth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПрИ 202]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПИ 301]",
            teacher: 14,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПрИ 202]",
            teacher: 14,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПИ 301]",
            teacher: 14,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПИ 301]",
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
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202]",
            teacher: 14,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПрИ 201]",
            teacher: 14,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [БИ 201, ПИ 201]",
            teacher: 14,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АРХИТЕКТУРА ПРЕДПРИЯТИЯ И МОДЕЛИРОВАНИЕ БИЗНЕС-ПРОЦЕССОВ [ПрИ 201]",
            teacher: 14,
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
    id: 15,
    name: "Петриченко Ю.В.",
    schedule: [
      {},
      {
        fourth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ [БИ 201, ПИ 201]",
            teacher: 15,
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
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202]",
            teacher: 15,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ [ПрИ 201]",
            teacher: 15,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "МЕНЕДЖМЕНТ В ИТ-СФЕРЕ [ПрИ 202]",
            teacher: 15,
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
    id: 16,
    name: "Мельников В.А.",
    schedule: [
      {},
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [БИ 201, ПИ 201]",
            teacher: 16,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 17,
    name: "Бойко К.В.",
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
    id: 18,
    name: "Барабанщиков И.В.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        first: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [БИ 201, ПИ 201]",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [ПрИ 201]",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [БИ 201, ПИ 201]",
            teacher: 18,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [ПрИ 201]",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [БИ 201, ПИ 201, ПрИ 201, ПрИ 202]",
            teacher: 18,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [ПрИ 202]",
            teacher: 18,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "БАЗЫ И ХРАНИЛИЩА ДАННЫХ ОДАВАТЕЛЬ [ПрИ 202]",
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
    id: 19,
    name: "Гисс Е.И.",
    schedule: [
      {},
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ [ПИ 301, ПрИ 301]",
            teacher: 19,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 19,
            audience: "А-13",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "СИСТЕМНЫЙ АНАЛИЗ И МОДЕЛИРОВАНИЕ [ПрИ 302]",
            teacher: 19,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 20,
    name: "Ботов С.Г.",
    schedule: [
      {},
      {},
      {
        sixth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 20,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПИ 301]",
            teacher: 20,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПрИ 301]",
            teacher: 20,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПИ 301]",
            teacher: 20,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПрИ 301]",
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
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПрИ 302]",
            teacher: 20,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ ОДАВАТЕЛЬ [ПрИ 302]",
            teacher: 20,
            audience: "326",
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
    id: 21,
    name: "Воробьев В.И.",
    schedule: [
      {},
      {
        seventh: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 21,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "УПРАВЛЕНИЕ ИТ-ПРОЕКТАМИ И ЖИЗНЕНЫМ ЦИКЛОМ ПО [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 21,
            audience: "А-13",
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
    id: 22,
    name: "Новикова М.В.",
    schedule: [
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [ПИ 301]",
            teacher: 22,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [ПИ 301]",
            teacher: 22,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИНТЕРНЕТ-МАРКЕТИНГ [ПИ 301]",
            teacher: 22,
            audience: "132А",
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
    id: 23,
    name: "Мирасов В.Ф.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        second: [
          {
            name: "В 10:00 АНАЛИЗ ДАННЫХ [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 23,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        third: [
          {
            name: "АНАЛИЗ ДАННЫХ [ПИ 301, ПрИ 302]",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АНАЛИЗ ДАННЫХ [ПрИ 301]",
            teacher: 23,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "АНАЛИЗ ДАННЫХ [ПИ 301, ПрИ 302]",
            teacher: 23,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "АНАЛИЗ ДАННЫХ [ПрИ 301]",
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
    id: 24,
    name: "Казаков А.А.",
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
    id: 25,
    name: "Сотникова Е.С.",
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
    id: 26,
    name: "Мелехина Д.В.",
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
    id: 27,
    name: "Кирсанов А.А.",
    schedule: [
      {},
      {},
      {},
      {
        sixth: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ [ПрИ 401]",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ [ПрИ 401]",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ [ПрИ 401]",
            teacher: 27,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ (ЛЕК+) [ПрИ 103]",
            teacher: 27,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 103]",
            teacher: 27,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 28,
    name: "Пономарева Д.С.",
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
    id: 29,
    name: "Бутько Л.Н.",
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
    id: 30,
    name: "Корецкая Т. П.",
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
    id: 31,
    name: "Земцова Е. М.",
    schedule: [
      {
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 31,
            audience: "А-15",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 102]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 101]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 101]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        third: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 102]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 103]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ДИСКРЕТНАЯ МАТЕМАТИКА [ПрИ 103]",
            teacher: 31,
            audience: "326",
            week: ParityWeek.ODD,
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
    id: 32,
    name: "Черепанова Е. А.",
    schedule: [
      {
        fourth: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ПрИ 103]",
            teacher: 32,
            audience: "432",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
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
    id: 33,
    name: "Тюрина И. А.",
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
    name: "Митина О.В.",
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
    id: 35,
    name: "Панькин В.Е.",
    schedule: [
      {
        third: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [ПрИ 101]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [ПрИ 201]",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [ПрИ 102]",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [БИ 201, ПИ 201]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [ПрИ 103]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [ПрИ 201]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        first: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [ПрИ 202]",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [БИ 101, ПИ 101]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [ПрИ 102]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        second: [
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [БИ 201, ПИ 201]",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        third: [
          {
            name: "ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ . 4 корпус [ПрИ 101]",
            teacher: 35,
            audience: "",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ПРИКЛАДНАЯ ФИЗИЧЕСКАЯ КУЛЬТУРА . 4 корпус [ПрИ 202]",
            teacher: 35,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 36,
    name: "Шайхуллина П.А.",
    schedule: [
      {
        third: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [БИ 101]",
            teacher: 36,
            audience: "413",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {},
      {},
      {
        first: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [БИ 101, ПИ 101, ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 36,
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        second: [
          {
            name: "МАТЕМАТИЧЕСКИЙ АНАЛИЗ.ДИФФЕРЕНЦИАЛЬНЫЕ И РАЗНОСТНЫЕ УРАВНЕНИЯ [ПрИ 102]",
            teacher: 36,
            audience: "425",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {}
    ]
  },
  {
    id: 37,
    name: "Шкода Ю.Д.",
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
    id: 38,
    name: "Соломко Д.В.",
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
    id: 39,
    name: "Власова О.С.",
    schedule: [
      {
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [БИ 101, ПИ 101, ПрИ 101, ПрИ 102, ПрИ 103]",
            teacher: 39,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        first: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [ПрИ 102]",
            teacher: 39,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        fourth: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [БИ 101, ПИ 101]",
            teacher: 39,
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
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [ПрИ 101]",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [ПрИ 103]",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [ПрИ 101]",
            teacher: 39,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ВВЕДЕНИЕ В НАПРАВЛЕНИЕ [ПрИ 103]",
            teacher: 39,
            audience: "132А",
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
    id: 40,
    name: "Новокшонова Н.А.",
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
    id: 41,
    name: "Викторова Е.В.",
    schedule: [
      {},
      {},
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 101]",
            teacher: 41,
            audience: "027",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 101]",
            teacher: 41,
            audience: "027",
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
    id: 42,
    name: "Ткач Е.С.",
    schedule: [
      {},
      {},
      {},
      {
        third: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ [БИ 101, ПИ 101]",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ [БИ 101, ПИ 101]",
            teacher: 42,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЭКОНОМИЧЕСКАЯ ТЕОРИЯ [БИ 101]",
            teacher: 42,
            audience: "326",
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
    id: 43,
    name: "Корнеева А.А.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        sixth: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС) [БИ 101, ПИ 101]",
            teacher: 43,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        seventh: [
          {
            name: "БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ (ОНЛАЙН-КУРС) [ПрИ 101, ПрИ 102, ПрИ 103]",
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
    id: 44,
    name: "Савко П.В.",
    schedule: [
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 101]",
            teacher: 44,
            audience: "011",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 102]",
            teacher: 44,
            audience: "025",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 101]",
            teacher: 44,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        third: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 101]",
            teacher: 44,
            audience: "013",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 2) [ПрИ 101]",
            teacher: 44,
            audience: "013",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        first: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 102]",
            teacher: 44,
            audience: "425",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПрИ 102]",
            teacher: 44,
            audience: "425",
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
    id: 45,
    name: "Бабин И.К.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        third: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 101, ПрИ 102]",
            teacher: 45,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          },
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 102]",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 101]",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        sixth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 101]",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "ПРОГРАММИРОВАНИЕ [ПрИ 102]",
            teacher: 45,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      }
    ]
  },
  {
    id: 46,
    name: "Кочнева Ю.Е.",
    schedule: [
      {},
      {},
      {},
      {
        fourth: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 201]",
            teacher: 46,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПИ 201]",
            teacher: 46,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК [БИ 201]",
            teacher: 46,
            audience: "431",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "ИНОСТРАННЫЙ ЯЗЫК (Подгр. 1) [ПИ 201]",
            teacher: 46,
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
    id: 47,
    name: "Долгов А.Ю.",
    schedule: [
      {},
      {
        first: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201, ПрИ 202]",
            teacher: 47,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        second: [
          {
            name: "ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ АНАЛИЗ И ПРОГРАММИРОВАНИЕ [ПрИ 201, ПрИ 202]",
            teacher: 47,
            audience: "",
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
    id: 48,
    name: "Митянина А.В.",
    schedule: [
      {
        seventh: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "МАШИННОЕ ОБУЧЕНИЕ И ИНТЕЛЛЕКТУАЛЬНЫЙ АНАЛИЗ ДАННЫХ [ПИ 301, ПрИ 301, ПрИ 302]",
            teacher: 48,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {},
      {
        seventh: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПрИ 301, ПрИ 302]",
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
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПрИ 301]",
            teacher: 48,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПрИ 302]",
            teacher: 48,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        eighth: [
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПрИ 301]",
            teacher: 48,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
          {
            name: "РАЗРАБОТКА ИНТЕРНЕТ-ПРИЛОЖЕНИЙ [ПрИ 302]",
            teacher: 48,
            audience: "132",
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
    id: 49,
    name: "Медведев И.А.",
    schedule: [
      {
        fifth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ [ПрИ 301, ПрИ 302]",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ПРОЕКТИРОВАНИЕ И РАЗРАБОТКА РАСПРЕДЕЛЕННЫХ ПРОГРАММНЫХ СИСТЕМ [ПрИ 301, ПрИ 302]",
            teacher: 49,
            audience: "",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
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
    id: 50,
    name: "Полторак С.Н.",
    schedule: [
      {},
      {},
      {
        seventh: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ [ПИ 401, ПрИ 401]",
            teacher: 50,
            audience: "432",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        eighth: [
          {
            name: "КОРПОРАТИВНЫЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ [ПИ 401, ПрИ 401]",
            teacher: 50,
            audience: "432",
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
    id: 51,
    name: "Рублев Е.Л.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        fifth: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ [ПИ 401]",
            teacher: 51,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        sixth: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ [ПИ 401]",
            teacher: 51,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        seventh: [
          {
            name: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ [ПИ 401]",
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
    id: 52,
    name: "Косенко М.Ю.",
    schedule: [
      {},
      {},
      {},
      {},
      {},
      {
        third: [
          {
            name: "с 12:00 ЗАЩИТА ИНФОРМАЦИИ [ПрИ 401]",
            teacher: 52,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fourth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ [ПрИ 401]",
            teacher: 52,
            audience: "",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fifth: [
          {
            name: "ЗАЩИТА ИНФОРМАЦИИ [ПрИ 401]",
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
