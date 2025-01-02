import mongoose from "mongoose";

export const dbconnect = function(){

    mongoose.connect(process.env.MONGO_URI as string)
    .then(()=>console.log("Connected to database"))
    .catch((err:Error)=>console.log(err.message));

}