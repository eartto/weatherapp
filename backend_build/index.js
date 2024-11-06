"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./utils/config"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const logger_1 = __importDefault(require("./logger"));
const weatherReport_1 = __importDefault(require("./routes/weatherReport"));
const cities_1 = __importDefault(require("./routes/cities"));
app.use(express_1.default.static('frontend_build'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/weatherreport', weatherReport_1.default);
app.use('/api/cities', cities_1.default);
app.listen(config_1.default.PORT, () => {
    logger_1.default.info(`Server running on port ${config_1.default.PORT}`);
});
