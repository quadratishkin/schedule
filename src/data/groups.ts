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
        third: [
        {
          name: "Физическая культура и спорт",
          teacher: 4,
          audience: "100 (4К.)",
          week: ParityWeek.EVEN,
          typeOfLesson: TypeOfLesson.PRACTICE,
        },
      ],
      fourth: [
      {
        name: "(9-16Н) Безопасность жизнедеятельности",
        teacher: 13,
        audience: 132,
        week: ParityWeek.ODD,
        typeOfLesson: TypeOfLesson.PRACTICE,
      },
      {
        name: "История России",
        teacher: 1,
        audience: 432,
        week: ParityWeek.EVEN,
        typeOfLesson: TypeOfLesson.PRACTICE,
      }
    ],
      fifth: [
        {
        name: "Информатика и программирование",
        teacher: 2,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.LECTURE
      }
    ],
      sixth: [
        {
        name: "Информатика и программирование",
        teacher: 2,
        audience: 132,
        week: ParityWeek.EVERYWEEK,
        typeOfLesson: TypeOfLesson.PRACTICE
      }
    ],
    },
    {
        second: [
          {
            name: "(1-8Н) Психология лидерства и командообразование",
             teacher: 6,
             audience: "А-25",
             week: ParityWeek.EVEN,
             typeOfLesson: TypeOfLesson.LECTURE
          },
        ],
        third: [
          {
            name: "Математический анализ",
            teacher: 5,
            audience: 432,
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ],
        fourth: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "(1-8Н) Психология лидерства и командообразование",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE
          }
        ]
      },
      {
        second: [
          {
            name: "Экономическая теория",
            teacher: 7,
            audience: 132,
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        third: [
          {
            name: "Экономическая теория",
            teacher: 7,
            audience: 132,
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Экономическая теория",
            teacher: 7,
            audience: 132,
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
        ],
      },
      {
        third: [
          {
          name: "Информатика и программирование",
          teacher: 2,
          audience: 132,
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.PRACTICE
          },
        ],
        fourth: [
          {
          name: "Математический анализ",
          teacher: 0,
          audience: "А-17",
          week: ParityWeek.EVERYWEEK,
          typeOfLesson: TypeOfLesson.LECTURE
          }
        ],
        fifth: [
          {
            name: "История России",
            teacher: 9,
            audience: "А-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE
          },
        ]
      },
      {
        first: [
          {
            name: "Иностранный язык",
            teacher: 8,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "Иностранный язык",
            teacher: 8,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [ 
          {
            name: "Прикладная физическая культура",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fifth: [
          {
            name: "Иностранный язык",
            teacher: 10,
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
            teacher: 11,
            audience: "Онлайн-курс",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "(9-16Н) Безопасность жизнедеятельности",
            teacher: 12,
            audience: "Онлайн-курс",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          }
        ],
      },
    ],
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
        fourth: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "(9-16Н) Безопасность жизнедеятельности",
            teacher: 13,
            audience: "316",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        first: [
          {
            name: "Психология лидерства и командообразование",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "Психология лидерства и командообразование",
            teacher: 6,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        second: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "История России",
            teacher: 1,
            audience: "429",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Иностранный язык",
            teacher: 25,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Архитектура вычислительных систем",
            teacher: 3,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Иностранный язык",
            teacher: 25,
            audience: "427",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        second: [
          {
            name: "Иностранный язык",
            teacher: 25,
            audience: "337",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third:
        [
          {
            name: "Математический анализ",
            teacher: 26,
            audience: "425",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Математический анализ",
            teacher: 0,
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "История России",
            teacher: 9,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        fourth: [
          {
            name: "Архитектура вычислительных систем",
            teacher: 3,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fifth: [
          {
            name: "Прикладная физическая культура",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        seventh: [ 
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        fourth: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fifth: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "История России",
            teacher: 11,
            audience: "Онлайн-курс",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "(9-16Н) Безопасность жизнедеятельности",
            teacher: 12,
            audience: "Онлайн-курс",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ-102",
    schedule: [
      {
        first: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "326",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "326",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Прикладная физическая культура",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "(9-16Н) Безопасность жизнедеятельности",
            teacher: 13,
            audience: "316",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        second: [ 
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Психология лидерства и командообразование",
            teacher: 6,
            audience: "А-25",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        third: [
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Психология лидерства и командообразование",
            teacher: 6,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        third: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Архитектура вычислительных систем",
            teacher: 3,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "История России",
            teacher: 1,
            audience: "413",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Иностранный язык (русский)",
            teacher: 28,
            audience: "334А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "Иностранный язык (русский)",
            teacher: 28,
            audience: "334А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        fourth: [
          {
            name: "Математический анализ",
            teacher: 0,
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "История России",
            teacher: 9,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        second: [
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "204",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "Архитектура вычислительных систем",
            teacher: 3,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Математический анализ",
            teacher: 26,
            audience: "431",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
        ],
        seventh: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        third: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "История России",
            teacher: 11,
            audience: "Онлайн-курс",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "(9-16Н) Безопасность жизнедеятельности",
            teacher: 12,
            audience: "Онлайн-курс",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    courseNumber: 1,
    typeOfEducation: "Бакалавриат",
    groupNumber: "ПрИ-103",
    schedule: [
      {
        second: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "Прикладная физическая культура",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "История России",
            teacher: 1,
            audience: "429",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Структуры и алгоритмы обработки данных",
            teacher: 2,
            audience: "132Б",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "А-17",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "Физика",
            teacher: 29 ,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        sixth: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "326",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        first: [ 
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "027",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "Физическая культура и спорт",
            teacher: 4,
            audience: "100 (4К.)",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Иностранный язык",
            teacher: 10,
            audience: "027",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "Структуры и алгоритмы обработки данных",
            teacher: 2,
            audience: "132Б",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        fourth: [
          {
            name: "Архитектура ЭВМ",
            teacher: 3,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "Архитектура ЭВМ",
            teacher: 3,
            audience: "132А",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
          {
            name: "Иностранный язык (русский)",
            teacher: 28,
            audience: "334А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "Иностранный язык (русский)",
            teacher: 28,
            audience: "334А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        fourth: [
          {
            name: "Математический анализ",
            teacher: 0,
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fifth: [
          {
            name: "История России",
            teacher: 9,
            audience: "A-17",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Физика",
            teacher: 29,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "Физика",
            teacher: 29,
            audience: "132А",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        second: [
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "132",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
          {
            name: "Дискретная математика",
            teacher: 24,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "Структуры и алгоритмы обработки данных",
            teacher: 2,
            audience: "132А",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "Математический анализ",
            teacher: 0,
            audience: "413",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE
          },
        ],
        seventh: [
          {
            name: "Программирование",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {
        first: [
          {
            name: "Программирование на языке C++",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "Программирование на языке C++",
            teacher: 27,
            audience: "Дистанционно",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        sixth: [
          {
            name: "История России",
            teacher: 11,
            audience: "Онлайн-курс",
            week: ParityWeek.ODD,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
    ],
  },
];
