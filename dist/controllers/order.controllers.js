"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const orders_model_1 = __importDefault(require("../model/orders.model"));
const createOrder = function (req, res) {
    const order = new orders_model_1.default({
        orderId: req.body.orderId,
        customerId: req.body.customerId,
        orderDate: req.body.orderDate,
        status: req.body.status,
        totalAmount: req.body.totalAmount,
        items: req.body.items
    });
};
exports.createOrder = createOrder;
