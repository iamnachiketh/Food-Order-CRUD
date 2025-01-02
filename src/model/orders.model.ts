import mongoose, { Schema } from 'mongoose';


interface Item {
    productId: string;
    quantity: number;
    price: number;
}


interface IOrder {
    orderId: string;
    customerId: string;
    orderDate: Date;
    status: string;
    totalAmount: number;
    items: Array<Item>
}


const OrderSchema = new Schema<IOrder>({

    orderId: { type: String, required: true },
    customerId: { type: String, required: true },
    orderDate: { type: Date, required: true },
    status: { type: String, required: true, default: "Pending" },
    totalAmount: { type: Number, required: true },
    items: { type: Array<Item>(), required: true, default: [] }

});


export default mongoose.model<IOrder>("Order", OrderSchema);