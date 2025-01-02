"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.createOrder = void 0;
const orders_model_1 = __importDefault(require("../model/orders.model"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const createOrder = function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        const order = new orders_model_1.default({
            orderId: data.orderId,
            customerId: data.customerId,
            orderDate: Date.now(),
            status: data.status,
            totalAmount: data.totalAmount,
            items: data.items
        });
        try {
            let result = yield order.save();
            if (!result) {
                return { status: http_status_codes_1.default.BAD_REQUEST, message: "Order not created" };
            }
            return { status: http_status_codes_1.default.CREATED, message: "Order created successfully" };
        }
        catch (err) {
            return { status: http_status_codes_1.default.INTERNAL_SERVER_ERROR, message: err.message };
        }
    });
};
exports.createOrder = createOrder;
const getOrderById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let orderDetails = yield orders_model_1.default.findById({ _id: id }, { __v: 0 });
            if (!orderDetails) {
                return { status: http_status_codes_1.default.NOT_FOUND, message: "Order not found" };
            }
            return { status: http_status_codes_1.default.OK, data: orderDetails };
        }
        catch (error) {
            return { status: http_status_codes_1.default.INTERNAL_SERVER_ERROR, message: error.message };
        }
    });
};
exports.getOrderById = getOrderById;
