import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(connectionInstance)
        console.log(`MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection failed: ", error)
        process.exit(1)
    }
}