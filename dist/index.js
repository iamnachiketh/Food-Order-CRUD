"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connection_1 = require("./dbconnection/db.connection");
dotenv_1.default.config({ path: '.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_connection_1.dbconnect)();
app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
