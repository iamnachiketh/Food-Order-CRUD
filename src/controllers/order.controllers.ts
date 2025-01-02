import { Request, Response } from "express";
import * as OrderService from "../service/user.service";
import { orderValidation } from "../SchemaValidation/order.validation";
import httpsStatus from "http-status-codes";


export const handleCreateOrder = function (req: Request, res: Response) {

    const data = req.body;

    const {error} = orderValidation.validate(data);

    if (error) {
        res.status(httpsStatus.BAD_REQUEST).send(error.details[0].message);
        return;
    }

    const result: Promise<{ status: number, message: string }> = OrderService.createOrder(data);

    result
        .then((response) => {
            res.status(response.status).json(response.message);
        })
}

