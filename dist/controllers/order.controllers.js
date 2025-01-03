"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDeleteOrder = exports.handleUpdateOrderByUser = exports.handleGetOrder = exports.handleCreateOrder = void 0;
const OrderService = __importStar(require("../service/order.service"));
const order_validation_1 = require("../SchemaValidation/order.validation");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const handleCreateOrder = function (req, res) {
    const data = req.body;
    const { error } = order_validation_1.orderValidation.validate(data);
    if (error) {
        res.status(http_status_codes_1.default.BAD_REQUEST).send(error.details[0].message);
        return;
    }
    const result = OrderService.createOrder(data);
    result
        .then((response) => {
        res.status(response.status).json(response.message);
    });
};
exports.handleCreateOrder = handleCreateOrder;
const handleGetOrder = function (req, res) {
    const orderId = req.params.id;
    const result = OrderService.getOrderById(orderId);
    result
        .then((response) => {
        if (response.data === undefined)
            res.status(response.status).json(response.message);
        else
            res.status(response.status).json(response.data);
    });
};
exports.handleGetOrder = handleGetOrder;
const handleUpdateOrderByUser = function (req, res) {
    const orderId = req.params.id;
    const data = req.body;
    const result = OrderService.updateOrderByUser(orderId, data);
    result
        .then((response) => {
        if (response.data === undefined)
            res.status(response.status).json(response.message);
        else
            res.status(response.status).json(response.data);
    });
};
exports.handleUpdateOrderByUser = handleUpdateOrderByUser;
const handleDeleteOrder = function (req, res) {
    const orderId = req.params.id;
    const result = OrderService.deleteOrder(orderId);
    result
        .then((response) => res.status(response.status).json(response.message));
};
exports.handleDeleteOrder = handleDeleteOrder;
