import mongoose from "mongoose";
import { logger } from "../utils/logger.uilt";

export const dbconnect = function () {

    logger.info("Connecting to the database....");

    mongoose.connect(process.env.MONGO_URI as string)
        .then(() => logger.info("Connected to database"))
        .catch((err: Error) => logger.error(err.message));

}