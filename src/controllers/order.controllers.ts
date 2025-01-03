import { Request, Response } from "express";
import * as OrderService from "../service/order.service";
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





export const handleGetOrder = function(req:Request,res:Response){

    const orderId = req.params.id;

    const result:Promise<{status:number,message?:string,data?:any}> = OrderService.getOrderById(orderId);

    result
    .then((response)=>{
        if(response.data === undefined) res.status(response.status).json(response.message);
        else res.status(response.status).json(response.data);
    })
}


export const handleUpdateOrderByUser = function(req:Request,res:Response){

    const orderId = req.params.id;

    const data = req.body;

    const result:Promise<{status:number,message?:string,data?:any}> = OrderService.updateOrderByUser(orderId,data);

    result
    .then((response)=>{
        if(response.data === undefined) res.status(response.status).json(response.message);
        else res.status(response.status).json(response.data);
    })

}


export const handleDeleteOrder = function(req:Request,res:Response){

    const orderId = req.params.id;

    const result:Promise<{status:number,message:string}> = OrderService.deleteOrder(orderId);

    result
    .then((response)=>res.status(response.status).json(response.message));
}

