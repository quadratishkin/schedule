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
];
