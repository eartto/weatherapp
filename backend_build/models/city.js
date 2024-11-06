"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("../logger"));
const keys_1 = require("../constants/keys");
mongoose_1.default.set('strictQuery', false);
const url = keys_1.KEY.CITIES;
logger_1.default.info('connecting to MongoDB');
mongoose_1.default.connect(url)
    .catch((error) => {
    logger_1.default.info('error connecting to MongoDB:', error.message);
});
const citySchema = new mongoose_1.default.Schema({
    city: {
        type: String,
        required: true
    }
});
citySchema.set('toJSON', {
    transform: (_doc, ret) => {
        var _a;
        ret.id = (_a = ret._id) === null || _a === void 0 ? void 0 : _a.toString();
        delete ret._id;
        delete ret.__v;
    }
});
exports.default = mongoose_1.default.model('City', citySchema);
