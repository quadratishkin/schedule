# План: несколько преподавателей в ячейке + ячейки без аудитории

(план уже одобрен ранее; повторная отправка из-за того, что правки блокируются устаревшим состоянием план-режима)

## 1. `src/data/generator.cjs`
- `createLesson`: `teacher: -1` → `teachers: []`; брать все совпадения `Фамилия И.О.` → `teachers: [id...]` (dedupe).
- `processGroup`: фильтр ячеек — только с непустым названием И непустой аудиторией; ключ периода создавать только при наличии валидных уроков; вывод `teachers: l.teachers`.
- `saveTeachersSchedule`: перебор `lesson.teachers`, вывод `teachers: [t.id]`.

## 2. `src/data/interfaces.ts`
`ILesson.teacher: number` → `teachers: number[]`.

## 3. `src/components/ScheduleCell/ScheduleCell.tsx`
Хелпер `renderTeachers(ids)` — ссылки через запятую, в 4 ветках рендера.

## 4. `src/data/schedules.ts`
`teacher: N` → `teachers: [N]`.

## 5. Регенерация и проверка
`node src/data/generator.cjs`; проверить отсутствие `audience: ""`, наличие двойных преподавателей; `npx tsc -b`.