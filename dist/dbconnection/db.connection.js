"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_uilt_1 = require("../utils/logger.uilt");
const dbconnect = function () {
    logger_uilt_1.logger.info("Connecting to the database....");
    mongoose_1.default.connect(process.env.MONGO_URI)
        .then(() => logger_uilt_1.logger.info("Connected to database"))
        .catch((err) => logger_uilt_1.logger.error(err.message));
};
exports.dbconnect = dbconnect;
