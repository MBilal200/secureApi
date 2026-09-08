import jwt from "jsonwebtoken"


export const generateAccessToken=(user)=>{
    return jwt.sign({id:user._id,email:user.email},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRATION
    })
}

export const generateRefreshToken=(user)=>{
    return jwt.sign({id:user._id,email:user.email},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRATION
    })
}