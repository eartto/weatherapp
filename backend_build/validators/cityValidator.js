"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewCity = void 0;
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const parseCity = (city) => {
    if (!city || !isString(city)) {
        throw new Error('Incorrect or missing city');
    }
    return city;
};
const toNewCity = (object) => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    if ('city' in object) {
        const city = {
            city: parseCity(object.city)
        };
        return city;
    }
    throw new Error('Incorrect data: a field missing ');
};
exports.toNewCity = toNewCity;
