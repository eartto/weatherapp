"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
exports.default = {
    MONGODB_URI,
    PORT
};
