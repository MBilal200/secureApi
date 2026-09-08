import userModel from "../models/userModel.js"
import userService from "../services/userService.js"
import {compare} from "bcryptjs"
import {generateAccessToken,generateRefreshToken} from "../utils/token.js"
import jwt from "jsonwebtoken"

const service=new userService(userModel)



export const Register=async(req,res)=>{
    try{
        const data=await service.readUserByEmail(req.body.email)
        if(data){
            return res.status(400).json({msg:"User already exists"})
        }
        const user=await service.createUser(req.body)
        res.status(201).json({msg:"User created successfully",user})
    }catch(e){
        res.status(400).json({msg:"Error creating user",error:e})
    }
}
export const Login=async(req,res)=>{
    try{
        const data=await service.readUserByEmail(req.body.email)
        
        if(!data){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        const match=await compare(req.body.password,data.password)
        if(!match){
            return res.status(400).json({msg:"Invalid credentials"})
        }
        const acessToken=generateAccessToken(data)
        const refreshToken=generateRefreshToken(data)
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
        res.status(200).json({msg:"Login successful",user:data,accessToken:acessToken})

    }catch(e){
        res.status(400).json({msg:"Error logging in",error:e})
    }
}
export const Logout=async(req,res)=>{
    try{
        console.log(req.cookies)
        const token = req.cookies.refreshToken;
        if (!token) {
            return res.status(400).json({ msg: "No token provided" });
        }
        res.clearCookie("refreshToken");
        res.status(200).json({ msg: "Logout successful" });

    }catch(e){
        res.status(400).json({msg:"Error logging out",error:e})
    }
}
export const Refresh=async(req,res)=>{
    try{
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(400).json({ msg: "No token provided" });
        }
        const data= jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
        if(!data){
            return res.status(401).json({ msg: "Invalid token" });
        }
        const acessToken=generateAccessToken(data)
        res.status(200).json({msg:"Token refreshed successfully",accessToken:acessToken})

    }catch(e){
        res.status(400).json({msg:"Error refreshing token",error:e})
    }
}


