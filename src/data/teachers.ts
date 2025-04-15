import { ITeacher, ParityWeek, TypeOfLesson } from "./interfaces";
import { scheduleTest } from "./schedules";

export const TEACHERS: ITeacher[] = [
  {
    id: 0,
    name: "Нагуманова А.В.",
    schedule: [
      {
        first: [
          {
            name: "МК-201",
            teacher: 0,
            audience: "429",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        second: [
          {
            name: "МТ-103",
            teacher: 0,
            audience: "011",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        first: [
          {
            name: "ИИТ-2",
            teacher: 0,
            audience: "A-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
      },
      {},
      {
        third: [
          {
            name: "МК-202",
            teacher: 0,
            audience: "421",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        fourth: [
          {
            name: "ИИТ-1",
            teacher: 0,
            audience: "А-17",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        sixth: [
          {
            name: "ПрИ-201",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVEN,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        seventh: [
          {
            name: "МП-303",
            teacher: 0,
            audience: "427",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
      {
        first: [
          {
            name: "ПрИ-201",
            teacher: 0,
            audience: "132",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
        third: [
          {
            name: "МК-2",
            teacher: 0,
            audience: "А-13",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.LECTURE,
          },
        ],
        fourth: [
          {
            name: "ПрИ-103",
            teacher: 0,
            audience: "413",
            week: ParityWeek.EVERYWEEK,
            typeOfLesson: TypeOfLesson.PRACTICE,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Быкова В.В.",
    schedule: scheduleTest,
  },
  {
    id: 2,
    name: "Николаев И.Е.",
    schedule: scheduleTest,
  },
  {
    id: 3,
    name: "Скрипов С.А.",
    schedule: scheduleTest,
  },
  {
    id: 4,
    name: "Сиряченко К.Т.",
    schedule: scheduleTest,
  },
  {
    id: 5,
    name: "Панов А.В.",
    schedule: scheduleTest,
  },
  {
    id: 6,
    name: "Теске Г.П.",
    schedule: scheduleTest,
  },
  {
    id: 7,
    name: "Макарова Л.И.",
    schedule: scheduleTest,
  },
  {
    id: 8,
    name: "Ковальчук Л.П.",
    schedule: scheduleTest,
  },
  {
    id: 9,
    name: "Рыбалко А.А.",
    schedule: scheduleTest,
  },
  {
    id: 10,
    name: "Мингажева Е.А.",
    schedule: scheduleTest,
  },
  {
    id: 11,
    name: "Попов А.А.",
    schedule: scheduleTest,
  },
  {
    id: 12,
    name: "Бармасов А.А.",
    schedule: scheduleTest,
  },
  {
    id: 13,
    name: "Козырская И.Н.",
    schedule: scheduleTest,
  },
];
