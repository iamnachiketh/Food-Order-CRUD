import Orders from "../model/orders.model";
import httpsStatus from "http-status-codes"


interface Item {
    productId: string;
    quantity: number;
    price: number;
}

export const createOrder = async function (
    data: { 
        orderId: String; 
        customerId: String; 
        status: String; 
        totalAmount: Number; 
        items: Array<Item>; 
    }):Promise<{status:number,message:string}> {

    const order = new Orders({
        orderId: data.orderId,
        customerId: data.customerId,
        orderDate: Date.now(),
        status: data.status,
        totalAmount: data.totalAmount,
        items: data.items
    })

    try{
        
        let result = await order.save();
        
        if (!result) {
            return { status: httpsStatus.BAD_REQUEST, message: "Order not created" }
        }
        return { status: httpsStatus.CREATED, message: "Order created successfully" }
    }catch(err: any){
        return { status: httpsStatus.INTERNAL_SERVER_ERROR, message: err.message}
    }

}