import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("mongoDB Connected successfully")
    } catch (error) {
        console.log(error);
    }
}