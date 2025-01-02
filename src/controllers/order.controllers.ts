import mongoose from "mongoose";
import Orders from "../model/orders.model";
import { Request, Response } from "express";


export const createOrder = function(req:Request,res:Response){

    const order = new Orders({
        orderId: req.body.orderId,
        customerId: req.body.customerId,
        orderDate: req.body.orderDate,
        status: req.body.status,
        totalAmount: req.body.totalAmount,
        items: req.body.items
    })

}

