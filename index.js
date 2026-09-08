import express from"express"
import {config} from "dotenv"
import mongoose from "mongoose"
import router from "./src/router.js"
import cookieParser from "cookie-parser"
config()
const server=  express()
server.use(express.json())
server.use(cookieParser())
server.use("/api",router)




mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected")
}).then(()=>{
    server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})
}).catch((e)=>{
    console.log("error in database connection")
})
