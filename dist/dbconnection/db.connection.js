"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbconnect = function () {
    mongoose_1.default.connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to database"))
        .catch((err) => console.log(err.message));
};
exports.dbconnect = dbconnect;
