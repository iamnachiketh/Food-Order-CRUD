"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_connection_1 = require("./dbconnection/db.connection");
const order_router_1 = __importDefault(require("./routes/order.router"));
const logger_uilt_1 = require("./utils/logger.uilt");
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config({ path: '.env' });
const app = (0, express_1.default)();
app.use(express_1.default.json());
const morganMiddleWare = (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', {
    stream: {
        write: (message) => logger_uilt_1.logger.info(message.trim())
    },
});
app.use(morganMiddleWare);
(0, db_connection_1.dbconnect)();
app.use("/api/v1/orders", order_router_1.default);
app.listen(process.env.PORT, () => logger_uilt_1.logger.info(`Server is running on port ${process.env.PORT}`));
