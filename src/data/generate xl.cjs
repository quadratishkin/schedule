const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const CONFIG = {
    fileName: 'ПИ-101.xlsx',
    sheetIndex: 0,
    colDay: 0,
    colPeriod: 1,
    colMain: 2,
    colSub: 3,
    colMainName: 'E',
    colSubName: 'F'
};

const filePath = path.join(__dirname, CONFIG.fileName);

const LESSON_TYPES = { 'ЛЕК': 0, 'ПР': 1, 'ЛАБ': 2 };
const WEEK_TYPES = { EVERY: 0, ODD: 1, EVEN: 2 };
const DAY_ORDER = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
const WEEK_ENUM_MAP = {
    0: 'ParityWeek.EVERYWEEK', 1: 'ParityWeek.ODD', 2: 'ParityWeek.EVEN'
};
const LESSON_ENUM_MAP = {
    0: 'TypeOfLesson.LECTURE', 1: 'TypeOfLesson.PRACTICE', 2: 'TypeOfLesson.LAB'
};
const periodMap = { 
    1: 'first', 2: 'second', 3: 'third', 4: 'fourth', 
    5: 'fifth', 6: 'sixth', 7: 'seventh', 8: 'eighth' 
};
const periodMapKeys = Object.values(periodMap);

const TEACHER_IDS = {
    'Нагуманова А.В.': 0, 'Быкова В.В.': 1, 'Николаев И.Е.': 2, 'Скрипов С.А.': 3,
    'Сиряченко К.Т.': 4, 'Панов А.В.': 5, 'Теске Г.П.': 6, 'Макарова Л.И.': 7,
    'Ковальчук Л.П.': 8, 'Рыбалко А.А.': 9, 'Мингажева Е.А.': 10, 'Попов А.А.': 11,
    'Бармасов А.А.': 12, 'Козырская И.Н.': 13, 'Шепталин А.Г.': 14,'Петриченко Ю.В.': 15,
    'Мельников В.А.': 16,'Бойко К.В.': 17,'Барабанщиков И.В.': 18,'Гисс Е.И.': 19,
    'Ботов С.Г.': 20,'Воробьев В.И.': 21,'Новикова М.В.': 22,'Мирасов В.Ф.': 23,
    'Казаков А.А.': 24,'Сотникова Е.С.': 25,'Мелехина Д.В.': 26,'Кирсанов А.А.': 27,
    'Пономарева Д.С.': 28,'Бутько Л.Н.': 29, 'Корецкая Т. П.': 30, 'Земцова Е. М.': 31,
    'Черепанова Е. А.': 32, 'Тюрина И. А.': 33, 'Митина ОВ.': 34,'Панькин В.Е.': 35, 
    'Шайхуллина П.А.':36, 'Шкода Ю.Д.': 37
};

const TEACHER_LIST = Object.entries(TEACHER_IDS)
    .map(([fullName, tId]) => ({
        fullName: fullName,
        id: tId,
        lastName: fullName.split(' ')[0].toUpperCase(),
        initials: fullName.split(' ').slice(1).join(' ').replace(/\s/g, '').replace(/\./g, '\\.') 
    }))
    .sort((a, b) => b.lastName.length - a.lastName.length);

function isEnglishSubject(text) {
    if (!text) return false;
    const upperText = text.toUpperCase();
    return upperText.includes('АНГЛИЙСКИЙ') || 
           upperText.includes('ИНОСТРАННЫЙ') ||
           upperText.includes('ENGLISH') ||
           upperText.includes('FOREIGN') ||
           upperText.includes('ИНОСТРАННЫЙ ЯЗЫК');
}

function analyzeColumnsForEnglish(data) {
    const englishColumns = {
        [CONFIG.colMain]: false,
        [CONFIG.colSub]: false
    };
    
    for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row) continue;
        
        const cellE = safeStr(row[CONFIG.colMain]);
        if (isEnglishSubject(cellE)) {
            englishColumns[CONFIG.colMain] = true;
        }
        
        const cellF = safeStr(row[CONFIG.colSub]);
        if (isEnglishSubject(cellF)) {
            englishColumns[CONFIG.colSub] = true;
        }
    }
    
    
    return englishColumns;
}

function parseSchedule() {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[CONFIG.sheetIndex]];
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
    
    const englishColumns = analyzeColumnsForEnglish(data);
    const hasEnglishInColSub = englishColumns[CONFIG.colSub];
    
    const schedule = {};
    let currentDay = '';

    for (let i = 0; i < data.length - 4; i++) {
        const row = data[i];
        if (!row) continue;

        if (row[CONFIG.colDay] && DAY_ORDER.includes(safeStr(row[CONFIG.colDay]).toUpperCase())) {
            currentDay = safeStr(row[CONFIG.colDay]).toUpperCase();
            schedule[currentDay] = {};
        }

        if (!currentDay) continue;

        const periodVal = row[CONFIG.colPeriod];
        if (periodVal && parseInt(periodVal)) {
            const periodNum = parseInt(periodVal);
            const periodKey = periodMap[periodNum];

            if (!schedule[currentDay][periodKey]) schedule[currentDay][periodKey] = [];

            const blockRows = [data[i], data[i+1], data[i+2], data[i+3]];

            const lessonsLeft = parseColumnBlock(blockRows, CONFIG.colMain);
            const lessonsRight = parseColumnBlock(blockRows, CONFIG.colSub);
            
            lessonsLeft.forEach(l => {
                const isEnglish = isEnglishSubject(l.name);
                
                if (isEnglish) {
                    if (hasEnglishInColSub) {
                        l.name += " (Подгр. 1)";
                    }
                }
            });
            
            lessonsRight.forEach(l => {
                const isEnglish = isEnglishSubject(l.name);
                
                if (isEnglish) {
                    if (hasEnglishInColSub) {
                        l.name += " (Подгр. 2)";
                    }
                }
            });
            
            schedule[currentDay][periodKey].push(...lessonsLeft);
            schedule[currentDay][periodKey].push(...lessonsRight);
        }
    }

    generateTsFile(schedule, hasEnglishInColSub);
}

function parseColumnBlock(rows, colIndex) {
    const result = [];
    const c0 = safeStr(rows[0] ? rows[0][colIndex] : "");
    const c1 = safeStr(rows[1] ? rows[1][colIndex] : "");
    const c2 = safeStr(rows[2] ? rows[2][colIndex] : "");
    const c3 = safeStr(rows[3] ? rows[3][colIndex] : "");

    const fullText = [c0, c1, c2, c3].join(" ## ");
    const has2Marker = fullText.includes("2Н.");
    const has1Marker = fullText.includes("1Н.");

    if (has2Marker && has1Marker) {
        const split = fullText.split("2Н.");
        const part1 = split[0].replace(/##/g, " ");
        if (cleanText(part1).length > 3) result.push(createLesson(part1, WEEK_TYPES.ODD));
        const part2 = split[1].replace(/##/g, " ");
        if (cleanText(part2).length > 3) result.push(createLesson(part2, WEEK_TYPES.EVEN));

    } else if (has2Marker && !has1Marker) {
        const txt = fullText.replace(/##/g, " ");
        if (cleanText(txt).length > 3) result.push(createLesson(txt, WEEK_TYPES.EVEN));

    } else if (has1Marker && !has2Marker) {
        const txt = fullText.replace(/##/g, " ");
        if (cleanText(txt).length > 3) result.push(createLesson(txt, WEEK_TYPES.ODD));

    } else {
        const txt = fullText.replace(/##/g, " ");
        if (cleanText(txt).length > 3) {
            result.push(createLesson(txt, WEEK_TYPES.EVERY));
        }
    }

    return result;
}

function createLesson(rawText, weekType) {
    let clean = rawText.replace(/1Н\.|2Н\./g, "").trim();
    
    const lesson = {
        name: "",
        teacher: 0,
        audience: "",
        week: weekType,
        typeOfLesson: 0
    };

    if (clean.includes("(ЛЕК)")) { lesson.typeOfLesson = LESSON_TYPES['ЛЕК']; clean = clean.replace(/\(ЛЕК\.\)/g, ""); }
    else if (clean.includes("ЛЕК.")) { lesson.typeOfLesson = LESSON_TYPES['ЛЕК']; clean = clean.replace(/ЛЕК\./g, ""); }
    else if (clean.includes("(ПР)")) { lesson.typeOfLesson = LESSON_TYPES['ПР']; clean = clean.replace(/\(ПР\.\)/g, ""); }
    else if (clean.includes("(ПР.)")) { lesson.typeOfLesson = LESSON_TYPES['ПР']; clean = clean.replace(/\(ПР\.\)/g, ""); }
    
    const audMatch = clean.match(/АУД\.?\s*([А-ЯA-Z0-9\-\s\(\)\.]+)/i);
    if (audMatch) {
        let aud = audMatch[1].trim();
        aud = aud.split(/[(\.,]/)[0].trim() || aud.trim(); 
        lesson.audience = aud;
    }

    let foundTeacher = null;
    const searchArea = clean.toUpperCase(); 

    for (const teacher of TEACHER_LIST) {
        const lastName = teacher.lastName;
        if (searchArea.includes(lastName)) {
             const regex = new RegExp(`\\b${lastName}\\b`, "i");
             if (regex.test(clean) || clean.toUpperCase().includes(lastName)) {
                lesson.teacher = teacher.id;
                foundTeacher = teacher;
                break; 
             }
        }
    }

    let name = clean.split(',')[0]; 
    name = name.split(/АУД\./i)[0];
    
    if (foundTeacher) {
        const lastName = foundTeacher.lastName;
        const initialsPattern = foundTeacher.initials; 

        const lastNameReg = new RegExp(lastName, "i");
        name = name.replace(lastNameReg, " ").trim(); 
        
        if (initialsPattern.length > 0) {
            const initialsReg = new RegExp(`[\\s,]*${initialsPattern}[\\s,]*`, "i");
            name = name.replace(initialsReg, " ").trim(); 
        }
    }
    
    name = name.replace(/,\s*(доцент|ст\.?преп|преп|преподаватель|к\.т\.н|д\.т\.н|профессор).*/i, "").trim();
    
    name = name.replace(/[\s\(\),-\.]{2,}/g, ' ').trim(); 
    
    lesson.name = name.replace(/\s+/g, ' ').trim();

    return lesson;
}

function cleanText(text) {
    return text.replace(/[^а-яА-Яa-zA-Z0-9]/g, "");
}

function safeStr(val) {
    return (val === null || val === undefined) ? "" : val.toString();
}

function generateTsFile(schedule, hasEnglishInColSub) {
    let output = `import { IScheduleDay, ParityWeek, TypeOfLesson } from './interfaces';\n\n`;
    output += `export const scheduleTest: IScheduleDay[] = [\n`; 

    let hasData = false;
    
    for (const day of DAY_ORDER) {
        const periods = schedule[day];
        if (!periods || Object.keys(periods).length === 0) continue;
        
        hasData = true;
        
        output += `  {\n`;
        
        for (const pKey of periodMapKeys) {
            const lessons = periods[pKey];
            if (!lessons || lessons.length === 0) continue;
            
            output += `    ${pKey}: [\n`;
            lessons.forEach(l => {
                let audienceValue;
                const numberAudience = parseInt(l.audience);
                
                if (l.audience.length > 0 && !isNaN(numberAudience) && l.audience.match(/^[0-9]+$/)) {
                    audienceValue = numberAudience;
                } else {
                    audienceValue = `"${l.audience}"`;
                }

                output += `      {\n`;
                output += `        name: "${l.name}",\n`;
                output += `        teacher: ${l.teacher},\n`;
                output += `        audience: ${audienceValue},\n`;
                output += `        week: ${WEEK_ENUM_MAP[l.week]},\n`; 
                output += `        typeOfLesson: ${LESSON_ENUM_MAP[l.typeOfLesson]},\n`;
                output += `      },\n`;
            });
            output += `    ],\n`;
        }
        output += `  },\n`;
    }
    output += `];\n`;

    if (!hasData) {
        console.log("WARNING");
    } else {
        const outputPath = path.join(__dirname, 'schedules.ts');
        fs.writeFileSync(outputPath, output);
        console.log(':)');
    }
}

parseSchedule();