"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cityService_1 = __importDefault(require("../services/cityService"));
const cityValidator_1 = require("../validators/cityValidator");
const citiesRouter = express_1.default.Router();
citiesRouter.get('/', (_req, res) => {
    cityService_1.default.getCities().then(cities => {
        res.status(200).send(cities);
    }).catch(error => {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    });
});
citiesRouter.post('/', (req, res) => {
    try {
        const newCity = (0, cityValidator_1.toNewCity)(req.body);
        const city = cityService_1.default.addCity(newCity.city);
        res.status(201).json(city);
    }
    catch (error) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
citiesRouter.delete('/', (_req, res) => {
    cityService_1.default.popCity().then(result => {
        res.status(204).json(result);
    })
        .catch(error => {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    });
});
exports.default = citiesRouter;
