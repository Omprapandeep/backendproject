import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
import dotenv from "dotenv"
dotenv.config()

const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("db connected");
        console.log(conn.connection.host);
        
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDb;