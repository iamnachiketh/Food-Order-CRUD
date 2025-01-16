import express from 'express';
import dotenv from 'dotenv';
import { dbconnect } from "./dbconnection/db.connection";
import OrderRouter from "./routes/order.router";
import { logger } from "./utils/logger.uilt";
import morgan from "morgan";

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

const morganMiddleWare = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream:{
            write: (message) => logger.info(message.trim()) 
        },
    }
);

app.use(morganMiddleWare);

dbconnect();

app.use("/api/v1/orders", OrderRouter);


app.listen(process.env.PORT, () => logger.info(`Server is running on port ${process.env.PORT}`));