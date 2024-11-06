"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEATHER_URL = void 0;
const keys_1 = require("./keys");
const WEATHER_URL = (city) => {
    return (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keys_1.KEY.WEATHER}`);
};
exports.WEATHER_URL = WEATHER_URL;
