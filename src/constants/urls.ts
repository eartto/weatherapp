import { KEY } from './keys';

export const WEATHER_URL = (city: string) => {
    return (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY.WEATHER}`
    );
};