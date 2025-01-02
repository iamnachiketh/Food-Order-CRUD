import express from 'express';
import dotenv from 'dotenv';
import { dbconnect } from "./dbconnection/db.connection";
import OrderRouter from "./routes/order.router";

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

dbconnect();

app.use("/api/v1/orders", OrderRouter);


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));