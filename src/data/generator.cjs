const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const START_GROUP_ID = 0;
const LESSON_TYPES = { 'ЛЕК': 0, 'ПР': 1, 'ЛАБ': 2 };
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
    if (!fs.existsSync(TEACHERS_FILE)) return;
    const content = fs.readFileSync(TEACHERS_FILE, 'utf-8');
    const regex = /id:\s*(\d+),\s*name:\s*"([^"]+)"/g;
    let match;
    let maxId = -1;
    while ((match = regex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        const name = match[2];
        teachersRegistry.set(name.toUpperCase(), { id, originalName: name });
        if (id > maxId) maxId = id;
    }
    nextTeacherId = maxId >= 0 ? maxId + 1 : 0;
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

function createLesson(rawText, weekType) {
    let clean = rawText.replace(/(?:^|\s)[12][НH]\.?/gi, "").trim();
    
    const lesson = { name: "", teacher: -1, audience: "", week: weekType, typeOfLesson: 0 };

    const audRegex = /(?:АУД\.?\s*)?(\d+\s*корпус|[А-ЯЁA-Z0-9\-]+\s*(?:\([^)]+\))?)/gi;
    const audMatches = Array.from(clean.matchAll(audRegex));
    
    if (audMatches.length > 0) {
        for (let i = audMatches.length - 1; i >= 0; i--) {
            let fullMatch = audMatches[i][0];
            let audValue = audMatches[i][1] || fullMatch;
            
            if (fullMatch.toUpperCase().includes("КОРПУС") || /\d/.test(fullMatch)) {
                lesson.audience = audValue.replace(/АУД\.?/gi, "").trim();
                clean = clean.replace(fullMatch, "").trim();
                break;
            }
        }
    }

    const typeRegex = /\((ЛЕК\+?|ПР|ЛАБ)\.?\)|(ЛЕК\+?|ПР|ЛАБ)\./gi;
    const matchType = clean.match(typeRegex);
    if (matchType) {
        const t = matchType[0].toUpperCase();
        if (t.includes("ЛЕК")) lesson.typeOfLesson = LESSON_TYPES['ЛЕК'];
        else if (t.includes("ПР")) lesson.typeOfLesson = LESSON_TYPES['ПР'];
        else if (t.includes("ЛАБ")) lesson.typeOfLesson = LESSON_TYPES['ЛАБ'];
        clean = clean.replace(typeRegex, "");
    }

    let name = clean;

    const allMatches = name.match(/[А-ЯЁ]{2,}\s+[А-ЯЁ]\.\s?[А-ЯЁ]\.?/gi) || [];
    if (allMatches.length > 0) {
        lesson.teacher = getOrCreateTeacherId(allMatches[0]);
        allMatches.forEach(m => { name = name.replace(m, " "); });
    }

    name = name.replace(/(доцент|доц\.?|ст\.?преп|преп\.?|преподаватель|к\.т\.н|д\.т\.н|профессор|проф\.?)/gi, " ");
    name = name.replace(/[,\/]/g, " ");
    name = name.replace(/\s{2,}/g, ' ').trim();
    
    lesson.name = name.replace(/^[\s.+,/-]+|[\s.+,/-]+$/g, '');

    return lesson;
}

function parseColumnBlock(rows, colIndex) {
    const result = [];
    const r = rows.map(row => safeStr(row ? row[colIndex] : "").trim());
    const fullText = r.join(" ").replace(/\s+/g, " ").trim();

    if (fullText.length < 4) return result;

    const m1 = fullText.search(/(?<!^)[1][НH]\./i);
    const m2 = fullText.search(/(?<!^)[2][НH]\./i);
    const splitPos = (m1 !== -1) ? m1 : m2;

    if (splitPos > 0) {
        const part1 = fullText.substring(0, splitPos).trim();
        const part2 = fullText.substring(splitPos).trim();
        const w1 = /2[НH]\.?/i.test(part1) ? WEEK_TYPES.EVEN : WEEK_TYPES.ODD;
        const w2 = /2[НH]\.?/i.test(part2) ? WEEK_TYPES.EVEN : WEEK_TYPES.ODD;
        result.push(createLesson(part1, w1));
        result.push(createLesson(part2, w2));
    } else {
        let w = WEEK_TYPES.EVERY;
        if (/1[НH]\./i.test(fullText)) w = WEEK_TYPES.ODD;
        else if (/2[НH]\./i.test(fullText)) w = WEEK_TYPES.EVEN;
        
        const hasTwoAuds = (r[0]+r[1]).toUpperCase().includes("АУД") && (r[2]+r[3]).toUpperCase().includes("АУД");
        if (hasTwoAuds && w === WEEK_TYPES.EVERY) {
            result.push(createLesson(r[0] + " " + r[1], WEEK_TYPES.ODD));
            result.push(createLesson(r[2] + " " + r[3], WEEK_TYPES.EVEN));
        } else {
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
            if (!schedule[currentDay][periodKey]) schedule[currentDay][periodKey] = [];
            const block = [data[i], data[i+1], data[i+2], data[i+3]];
            const lessons = [...parseColumnBlock(block, colMain)];
            if (colMain !== colSub) lessons.push(...parseColumnBlock(block, colSub));
            const valid = lessons.filter(l => l.name && l.name.trim().length > 0);
            if (valid.length > 0) schedule[currentDay][periodKey].push(...valid);
        }
    }

    const formattedSchedule = DAY_ORDER.map(day => {
        const dayData = schedule[day] || {};
        const formattedDay = {};
        for (const [timeKey, lessons] of Object.entries(dayData)) {
            formattedDay[timeKey] = lessons.map(l => ({
                name: l.name,
                teacher: l.teacher,
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
                    const tId = lesson.teacher;
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
            }
        });
    });

    const teachersArray = Array.from(teachersRegistry.values()).sort((a,b) => a.id - b.id).map(t => {
        const finalSchedule = tSchedules[t.id].map(dayObj => {
            const formattedDay = {};
            for (const [timeKey, lessons] of Object.entries(dayObj)) {
                formattedDay[timeKey] = lessons.map(l => ({
                    name: `${l.subjectName} [${l.groups.join(', ')}]`,
                    teacher: t.id,
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
            let gIdx = -1;
            for (let i = 0; i < 40; i++) {
                if (data[i] && data[i].some(c => /[А-ЯЁ]{2,4}[\s-]?\d{3}/i.test(safeStr(c)))) { gIdx = i; break; }
            }
            if (gIdx === -1) return;
            const groupRow = data[gIdx];
            groupRow.forEach((cell, index) => {
                const txt = safeStr(cell).trim();
                const match = txt.match(/[А-ЯЁ]{2,4}[\s-]?\d{3}/i);
                if (match && !txt.toUpperCase().includes("СЕМЕСТР")) {
                    const groupName = match[0].trim();
                    const next = safeStr(groupRow[index + 1]).trim();
                    const isNextGroup = next.match(/[А-ЯЁ]{2,4}[\s-]?\d{3}/i);
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