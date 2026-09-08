import userModel from "../models/userModel.js"
import userService from "../services/userService.js"


const service=new userService(userModel)


export const readUser=async(req,res)=>{
    try{
        const users=await service.readUser()
        res.status(200).json({msg:"Users fetched successfully",users})
    }catch(e){
        res.status(500).json({msg:"Error fetching users",error:e})
    }
}

export  const createUser=async(req,res)=>{
    try{
        const user=await service.createUser(req.body)
        res.status(201).json({msg:"User created successfully",user})

    }catch(e){
        res.status(400).json({msg:"Error creating user",error:e})
    }
}
export const readUserById=async(req,res)=>{
    try{    
        const user=await service.readUserById(req.params.id)
        res.status(200).json({msg:"User fetched successfully",user})

    }catch(e){
        res.status(404).json({msg:"User not found",error:e})
    }
}
export const updateUser=async(req,res)=>{
    try{
        const user=await service.updateUser(req.params.id,req.body)
        res.status(200).json({msg:"User updated successfully",user})
    }catch(e){
        res.status(404).json({msg:"User not found",error:e})
    }
}
export const deleteUser=async(req,res)=>{
    try{
        const user=await service.deleteUser(req.params.id)
        res.status(200).json({msg:"User deleted successfully",user})
    }catch(e){
        res.status(404).json({msg:"User not found",error:e})
    }
}