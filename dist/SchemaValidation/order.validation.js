"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.orderValidation = joi_1.default.object({
    orderId: joi_1.default.string().required(),
    customerId: joi_1.default.string().required(),
    status: joi_1.default.string().required(),
    totalAmount: joi_1.default.number().required(),
    items: joi_1.default.array().items(joi_1.default.object({
        productId: joi_1.default.string().required(),
        quantity: joi_1.default.number().required(),
        price: joi_1.default.number().required()
    }))
});
