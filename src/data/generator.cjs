const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const START_GROUP_ID = 0;
const LESSON_TYPES_MAP = {
  'ЛЕК': 0,
  'ЛЕКЦ': 0,
  'ЛЕКЦИЯ': 0,
  'ПР': 1,
  'ПРАКТ': 1,
  'ПРАКТИКА': 1,
  'ЛАБ': 2,
  'ЛАБОР': 2,
  'ЛАБОРАТОРНАЯ': 2,
};
const WEEK_TYPES = { EVERY: 0, ODD: 1, EVEN: 2 };
const DAY_ORDER = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
const WEEK_ENUM_MAP = { 0: 'ParityWeek.EVERYWEEK', 1: 'ParityWeek.ODD', 2: 'ParityWeek.EVEN' };
const LESSON_ENUM_MAP = { 0: 'TypeOfLesson.LECTURE', 1: 'TypeOfLesson.PRACTICE', 2: 'TypeOfLesson.LAB' };
const periodMap = { 1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 5: 'fifth', 6: 'sixth', 7: 'seventh', 8: 'eighth' };

const TEACHERS_FILE = path.join(__dirname, 'teachers.ts');

const teachersRegistry = new Map();
let nextTeacherId = 0;
const allGroups = [];
let currentGroupId = START_GROUP_ID;

function loadExistingTeachers() {
    // Always start fresh - rebuild teachers from current xlsx files only
    teachersRegistry.clear();
    nextTeacherId = 0;
}

function safeStr(val) { return (val === null || val === undefined) ? "" : val.toString(); }

function cleanText(text) { 
    return text.replace(/[^а-яА-ЯёЁa-zA-Z0-9\s.,()\-]/g, ""); 
}

function getOrCreateTeacherId(teacherText) {
    if (!teacherText || teacherText.trim().length < 3) return -1;
    const cleanName = teacherText.replace(/\s+/g, ' ').trim();
    const upperName = cleanName.toUpperCase();
    
    if (teachersRegistry.has(upperName)) return teachersRegistry.get(upperName).id;
    
    for (const [key, t] of teachersRegistry.entries()) {
        if (key.replace(/\s/g, '') === upperName.replace(/\s/g, '')) return t.id;
    }

    const newId = nextTeacherId++;
    const prettyName = cleanName.split(' ').map((word, i) =>
        i === 0 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toUpperCase()
    ).join(' ');
    teachersRegistry.set(upperName, { id: newId, originalName: prettyName });
    return newId;
}

function getLessonType(text) {
    if (!text) return 0;
    const cleanText = text.toUpperCase();
    
    if (cleanText.includes('ЛАБ')) return LESSON_TYPES_MAP['ЛАБ'];
    if (cleanText.includes('ПР') || cleanText.includes('ПРАКТ')) return LESSON_TYPES_MAP['ПР'];
    if (cleanText.includes('ЛЕК')) return LESSON_TYPES_MAP['ЛЕК'];
    
    return 0;
}

// Служебная строка «ДЕНЬ САМОСТОЯТЕЛЬНЫХ ЗАНЯТИЙ» разбита по строкам таблицы — это не предмет
const isServiceText = t => /^(ДЕНЬ|САМОСТОЯТЕЛЬНЫХ|ЗАНЯТИЙ)$/i.test(safeStr(t).trim());

function createLesson(rawText, weekType) {
    let clean = rawText.replace(/(?:^|\s)[12][НH]\.?/gi, "").trim();
    const lesson = { name: "", teachers: [], audience: "", week: weekType, typeOfLesson: 0 };

    // 1. Извлечение аудитории и корпуса (с поддержкой слэша и нормализацией слитного написания)
    const audRegex = /(?:АУД\.?\s*)?((?:\d+[А-ЯЁ]*|[А-ЯЁA-Z0-9\-]+)\s*(?:\(\d+\s*КОРП\.?\)?|\d+\s*КОРПУС)?(?:\s*[\/]\s*(?:(?:\d+[А-ЯЁ]*|[А-ЯЁA-Z0-9\-]+)\s*(?:\(\d+\s*КОРП\.?\)?|\d+\s*КОРПУС)?))*)/gi;
    const audMatches = Array.from(clean.matchAll(audRegex));
    
    if (audMatches.length > 0) {
        for (let i = audMatches.length - 1; i >= 0; i--) {
            let fullMatch = audMatches[i][0];
            let audValue = audMatches[i][1];

            // Проверяем, что это аудитория (наличие цифр или слов КОРП/КОРПУС)
            if (fullMatch.toUpperCase().includes("КОРПУС") || fullMatch.toUpperCase().includes("КОРП") || /\d/.test(fullMatch)) {
                lesson.audience = audValue.split('/')
                    .map(part => part.trim()
                        .replace(/(\d+[А-ЯЁ]*)\s*\(?(\d+)\s*КОРП\.?\)?/gi, "$1 ($2 корп.)") // Чиним "111(1КОРП)"
                        .replace(/(\d+)\s*КОРПУС/gi, "($1 корп.)")
                        .replace(/АУД\.?/gi, "").trim()
                    )
                    .join('\n'); // Две аудитории будут отображаться одна под другой
                
                clean = clean.replace(fullMatch, "").trim();
                break;
            }
        }
    }

    // ФОК — место проведения физкультуры
    if (!lesson.audience && /ФОК/i.test(clean)) {
        lesson.audience = "ФОК";
        clean = clean.replace(/ФОК/gi, " ").replace(/\s{2,}/g, " ").trim();
    }

    // 2. Извлечение типа занятия
    const typeRegex = /\((ЛЕК[А-ЯЁ]*|ПРАКТ[А-ЯЁ]*|ПР[А-ЯЁ]*|ЛАБ[А-ЯЁ]*)\.?\s*(\/.*)?\)|(?:\s|^)(ЛЕК|ПР|ЛАБ|ПРАКТ)\./gi;
    const matchType = clean.match(typeRegex);
    if (matchType) {
        lesson.typeOfLesson = getLessonType(matchType[0]);
        clean = clean.replace(typeRegex, " ").replace(/\s+/g, " ").trim();
    }

    let name = clean;
    
    // 3. Извлечение преподавателей (в ячейке может быть несколько через /)
    const allMatches = name.match(/[А-ЯЁ][А-ЯЁа-яё]{2,}\s+[А-ЯЁ]\.\s?[А-ЯЁ]\.?/g) || [];
    if (allMatches.length > 0) {
        lesson.teachers = [...new Set(allMatches.map(getOrCreateTeacherId).filter(id => id !== -1))];
        allMatches.forEach(m => { name = name.replace(m, " "); });
    }

    // 4. Очистка должностей (границы слова вручную: \b в JS не работает с кириллицей)
    const rankRegex = /(?<![А-ЯЁа-яёA-Za-z])(?:старший\s+преподаватель|ст\.?\s*преподаватель|преподаватель|доцент|доц\.?|ст\.?\s*преп\.?|преп\.?|к\.т\.н\.?|д\.т\.н\.?|профессор|проф\.?)(?![А-ЯЁа-яёA-Za-z])/gi;
    name = name.replace(rankRegex, " ");

    // Финальная очистка названия
    name = name.replace(/[,\/]/g, " ");
    name = name.replace(/\s{2,}/g, ' ').trim();
    lesson.name = name.replace(/^[\s.+,/*-]+|[\s.+,/*-]+$/g, '');

    return lesson;
}

function parseColumnBlock(rows, colIndex) {
    const result = [];
    const r = rows.map(row => safeStr(row ? row[colIndex] : "").trim());
    const fullText = r.join(" ").replace(/\s+/g, " ").trim();

    if (fullText.includes("ПОРТРЕТ") || fullText.includes("ПРАКТИКУМ") || fullText.includes("ОДАВАТЕЛЬ")) {
        console.log("RAW BLOCK:", JSON.stringify(r));
        console.log("FULL TEXT:", fullText);
    }

    if (fullText.length < 4) return result;

    const m1 = fullText.search(/(?<!^)[1][НH]\./i);
    const m2 = fullText.search(/(?<!^)[2][НH]\./i);
    const splitPos = (m1 !== -1) ? m1 : m2;
    
    const hasStartMarker = fullText.match(/^([12]н)\.?\s+/i);

    if (splitPos !== -1 && hasStartMarker) {
        const part1 = fullText.substring(0, splitPos).trim();
        const part2 = fullText.substring(splitPos).trim();
        
        const w1 = /2[НH]\.?/i.test(part1) ? WEEK_TYPES.EVEN : WEEK_TYPES.ODD;
        const w2 = /2[НH]\.?/i.test(part2) ? WEEK_TYPES.EVEN : WEEK_TYPES.ODD;
        
        if (!isServiceText(part1)) result.push(createLesson(part1, w1));
        if (!isServiceText(part2)) result.push(createLesson(part2, w2));
    } else {
        let w = WEEK_TYPES.EVERY;
        if (/^1[НH]\./i.test(fullText)) w = WEEK_TYPES.ODD;
        else if (/^2[НH]\./i.test(fullText)) w = WEEK_TYPES.EVEN;
        
        const hasTwoAuds = (r[0]+r[1]).toUpperCase().includes("АУД") && (r[2]+r[3]).toUpperCase().includes("АУД");
        if (hasTwoAuds && w === WEEK_TYPES.EVERY) {
            result.push(createLesson(r[0] + " " + r[1], WEEK_TYPES.ODD));
            result.push(createLesson(r[2] + " " + r[3], WEEK_TYPES.EVEN));
        } else if (!isServiceText(fullText)) {
            result.push(createLesson(fullText, w));
        }
    }
    return result;
}

function processGroup(data, groupName, colMain, colSub) {
    const schedule = {};
    let currentDay = '';
    let localColDay = 0, localColPeriod = 1;

    for (let r = 0; r < 40; r++) {
        if (!data[r]) continue;
        const foundIdx = data[r].findIndex(c => safeStr(c).trim().toUpperCase() === 'ПОНЕДЕЛЬНИК');
        if (foundIdx !== -1) {
            localColDay = foundIdx;
            localColPeriod = foundIdx + 1;
            break;
        }
    }

    for (let i = 0; i < data.length - 3; i++) {
        const row = data[i];
        if (!row) continue;
        const dayName = safeStr(row[localColDay]).trim().toUpperCase();
        if (dayName && DAY_ORDER.includes(dayName)) {
            currentDay = dayName;
            if (!schedule[currentDay]) schedule[currentDay] = {};
        }
        if (!currentDay) continue;

        const periodVal = row[localColPeriod];
        if (periodVal && parseInt(periodVal)) {
            const periodKey = periodMap[parseInt(periodVal)];
            const block = [data[i], data[i+1], data[i+2], data[i+3]];
            const mainLessons = parseColumnBlock(block, colMain);
            const subLessons = colMain !== colSub ? parseColumnBlock(block, colSub) : [];
            // Ячейка разделена на левую и правую половину: слева 1-я подгруппа, справа 2-я
            if (mainLessons.some(l => l.name.trim()) && subLessons.some(l => l.name.trim())) {
                mainLessons.forEach(l => { if (l.name.trim()) l.name += " 1гр"; });
                subLessons.forEach(l => { if (l.name.trim()) l.name += " 2гр"; });
            }
            const lessons = [...mainLessons, ...subLessons];
            // Предметы без аудитории выводятся (аудитория остаётся пустой строкой)
            const valid = lessons.filter(l => l.name && l.name.trim().length > 0);
            if (valid.length > 0) {
                if (!schedule[currentDay][periodKey]) schedule[currentDay][periodKey] = [];
                schedule[currentDay][periodKey].push(...valid);
            }
        }
    }

    const formattedSchedule = DAY_ORDER.map(day => {
        const dayData = schedule[day] || {};
        const formattedDay = {};
        for (const [timeKey, lessons] of Object.entries(dayData)) {
            formattedDay[timeKey] = lessons.map(l => ({
                name: l.name,
                teachers: l.teachers,
                audience: String(l.audience || ""),
                week: `__ENUM__${WEEK_ENUM_MAP[l.week]}`,
                typeOfLesson: `__ENUM__${LESSON_ENUM_MAP[l.typeOfLesson]}`
            }));
        }
        return formattedDay;
    });

    allGroups.push({
        id: currentGroupId++,
        courseNumber: parseInt(groupName.match(/\d/)[0]) || 1,
        typeOfEducation: "Бакалавриат",
        groupNumber: groupName,
        schedule: formattedSchedule
    });
}

function saveTeachersSchedule() {
    console.log("🔄 Формируем расписание для преподавателей...");
    const tSchedules = {};
    for (const t of teachersRegistry.values()) {
        tSchedules[t.id] = DAY_ORDER.map(() => ({}));
    }

    allGroups.forEach(group => {
        group.schedule.forEach((dayObj, dayIndex) => {
            for (const [periodKey, lessons] of Object.entries(dayObj)) {
                lessons.forEach(lesson => {
                    (lesson.teachers || []).forEach(tId => {
                        if (tId === -1 || !tSchedules[tId]) return;
                        const tDay = tSchedules[tId][dayIndex];
                        if (!tDay[periodKey]) tDay[periodKey] = [];
                        const existing = tDay[periodKey].find(l =>
                            l.subjectName === lesson.name && l.week === lesson.week
                        );
                        if (existing) {
                            if (!existing.groups.includes(group.groupNumber)) existing.groups.push(group.groupNumber);
                        } else {
                            tDay[periodKey].push({
                                subjectName: lesson.name,
                                groups: [group.groupNumber],
                                audience: lesson.audience,
                                week: lesson.week,
                                typeOfLesson: lesson.typeOfLesson
                            });
                        }
                    });
                });
            }
        });
    });

    const teachersArray = Array.from(teachersRegistry.values()).sort((a,b) => a.id - b.id).map(t => {
        const finalSchedule = tSchedules[t.id].map(dayObj => {
            const formattedDay = {};
            for (const [timeKey, lessons] of Object.entries(dayObj)) {
                formattedDay[timeKey] = lessons.map(l => ({
                    name: `${l.subjectName} [${l.groups.join(', ')}]`,
                    teachers: [t.id],
                    audience: l.audience,
                    week: l.week,
                    typeOfLesson: l.typeOfLesson
                }));
            }
            return formattedDay;
        });
        return { id: t.id, name: t.originalName, schedule: finalSchedule };
    });

    const json = JSON.stringify(teachersArray, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"__ENUM__([^"]+)"/g, '$1');
    fs.writeFileSync(TEACHERS_FILE, `import { ITeacher, ParityWeek, TypeOfLesson } from "./interfaces";\n\nexport const TEACHERS: ITeacher[] = ${json};\n`);
    console.log(`✅ teachers.ts обновлен.`);
}

function start() {
    console.log("🚀 Запуск...");
    loadExistingTeachers();
    const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.xlsx') && !f.startsWith('~$'));
    files.forEach(file => {
        const workbook = XLSX.readFile(path.join(__dirname, file));
        workbook.SheetNames.forEach(sheetName => {
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: null });
            if (data.length === 0) return;
            // Группы: 2-3 цифры в номере ("БИ 201", "БИ-11"), возможен префикс ("ИТ1-ПрИб-11")
            const GROUP_RE = /^(?:[А-ЯЁа-яёA-Za-z]{1,4}\d[\s-]?)?[А-ЯЁа-яёA-Za-z]{2,8}[\s-]?\d{2,3}(\s*\(\d+\))?$/;
            let gIdx = -1;
            for (let i = 0; i < 60; i++) {
                if (data[i] && data[i].some(c => GROUP_RE.test(safeStr(c).trim()))) { gIdx = i; break; }
            }
            if (gIdx === -1) return;
            const groupRow = data[gIdx];
            groupRow.forEach((cell, index) => {
                const txt = safeStr(cell).trim();
                const match = txt.match(GROUP_RE);
                if (match && !txt.toUpperCase().includes("СЕМЕСТР")) {
                    const groupName = match[0].trim().replace(/\s*\(\d+\)$/, '');
                    console.log(`    ✅ Группа найдена: "${groupName}" col=${index}`);
                    const next = safeStr(groupRow[index + 1]).trim();
                    const isNextGroup = next.match(GROUP_RE);
                    const colSub = (index + 1 < groupRow.length && !isNextGroup && !next) ? (index + 1) : index;
                    processGroup(data, groupName, index, colSub);
                }
            });
        });
    });

    if (allGroups.length > 0) {
        const groupsJson = JSON.stringify(allGroups, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"__ENUM__([^"]+)"/g, '$1');
        fs.writeFileSync(path.join(__dirname, 'groups.ts'), `import { IGroup, ParityWeek, TypeOfLesson } from "./interfaces";\n\nexport const GROUPS: IGroup[] = ${groupsJson};\n`);
        saveTeachersSchedule();
    }
}

start();