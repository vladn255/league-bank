import { DAYS_AGO_COUNT, MILLISECONDS_IN_DAY } from './const.js';

const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));

    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const parseDateObject = (dateObject) => {
    const date = dateObject.getUTCDate();
    const month = dateObject.getUTCMonth();
    const year = dateObject.getUTCFullYear()
    return {
        date,
        month,
        year
    }
}

const getDateFormat = (dateObject) => {
    return dateObject.toISOString().slice(0, 10)
}

const getMinimumDate = (dateObject) => {
    const parsedDateObject = dateObject.valueOf()
    const newDateValue = parsedDateObject - DAYS_AGO_COUNT * MILLISECONDS_IN_DAY;
    const newDate = new Date(newDateValue);
    return newDate
}

const getCombinations = (elemArray) => {
    let newArray = [];

    elemArray.forEach((elem) => {
        const version = elemArray.slice();
        version.splice(version.indexOf(elem), 1)

        const itemArray = version.map((item) => `${elem}${item}`)
        newArray = newArray.concat(itemArray)
    })

    return newArray;
}


export {
    getRandomInteger,
    parseDateObject,
    getDateFormat,
    getMinimumDate,
    getCombinations
}