import express from 'express';
import * as OrderController from "../controllers/order.controllers";

const router = express.Router();

router.get("/get-order/:id", OrderController.handleGetOrder);

router.post("/create-order", OrderController.handleCreateOrder);


export default router;

