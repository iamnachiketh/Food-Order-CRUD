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
    }): Promise<{ status: number, message: string }> {

    const order = new Orders({
        orderId: data.orderId,
        customerId: data.customerId,
        orderDate: Date.now(),
        status: data.status,
        totalAmount: data.totalAmount,
        items: data.items
    })

    try {

        let result = await order.save();

        if (!result) {
            return { status: httpsStatus.BAD_REQUEST, message: "Order not created" }
        }
        return { status: httpsStatus.CREATED, message: "Order created successfully" }
    } catch (err: any) {
        return { status: httpsStatus.INTERNAL_SERVER_ERROR, message: err.message }
    }

}


export const getOrderById = async function (
    id: string
): Promise<{ status: number, message?: string, data?: any }> {

    try {

        let orderDetails = await Orders.findById({ _id: id }, { __v: 0 });
        if (!orderDetails) {
            return { status: httpsStatus.NOT_FOUND, message: "Order not found" }
        }

        return { status: httpsStatus.OK, data: orderDetails }

    } catch (error: any) {
        return { status: httpsStatus.INTERNAL_SERVER_ERROR, message: error.message }
    }
}


export const updateOrderByUser = async function (id: string, data: any): Promise<{ status: number, message?: string, data?: any }> {
    try {
        let orderDetails = await Orders.findByIdAndUpdate({ _id: id, status: "Pending" }, {
            $push: {
                items: data.items !== undefined ? data.items : [],
            },
            $set: {
                totalAmount: data.totalAmount !== undefined ? data.totalAmount : 0,
            }
        })

        if (!orderDetails) {
            return { status: httpsStatus.NOT_FOUND, message: "Order not found" }
        }

        return { status: httpsStatus.OK, data: orderDetails }


    } catch (error: any) {
        return { status: httpsStatus.INTERNAL_SERVER_ERROR, message: error.message }
    }
}