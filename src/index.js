import express from "express"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import dotenv from "dotenv"
dotenv.config({
    path:'./env'
})
import connectDb from "./db/index.js"

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello world")
});

connectDb();


// ;(async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.listen(process.env.PORT,()=>{
//         console.log('app listing')
//       })
//     } catch (error) {
//         console.log(error);
//         throw error
//     }
// })()