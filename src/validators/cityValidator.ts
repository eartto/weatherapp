import { CityModel } from "../types/modelTypes";

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseCity = (city: unknown): string => {
    if (!city || !isString(city)) {
        throw new Error('Incorrect or missing city');
    }
    return city;
};

export const toNewCity = (object: unknown): CityModel => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    if ('city' in object) {
        const city: CityModel = {
            city: parseCity(object.city)
        };
        return city;
    }
    throw new Error('Incorrect data: a field missing ');
};