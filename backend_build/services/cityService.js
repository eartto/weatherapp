"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const city_1 = __importDefault(require("../models/city"));
const getCities = () => {
    const cities = city_1.default.find({})
        .catch(error => {
        throw new Error(error);
    });
    return cities;
};
const addCity = (cityName) => {
    const cityToAdd = new city_1.default({
        city: cityName
    });
    cityToAdd.save().catch(error => {
        throw new Error(error);
    });
    return cityToAdd;
};
const popCity = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield city_1.default.findOneAndDelete({}, { "_id": 1 });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.default = { getCities, addCity, popCity };
