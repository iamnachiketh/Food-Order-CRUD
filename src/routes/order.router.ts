import express from 'express';
import * as OrderController from "../controllers/order.controllers";

const router = express.Router();

router.post("/create-order", OrderController.handleCreateOrder);

export default router;

