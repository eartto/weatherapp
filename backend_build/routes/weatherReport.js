"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const urls_1 = require("../constants/urls");
const weatherReportRouter = express_1.default.Router();
weatherReportRouter.get('/', (req, res) => {
    const city = req.query.city;
    axios_1.default.get((0, urls_1.WEATHER_URL)(city)).then(response => {
        res.status(200).send(response.data);
    }).catch(error => {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    });
});
exports.default = weatherReportRouter;
