import jwt from "jsonwebtoken"
const authenticate = (req, res,next) => {
    try{

    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ msg: "No token provided" });
    }
    console.log(authHeader)
    const token=authHeader.split(" ")[1]
   const data= jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
   if(!data){
    return res.status(401).json({ msg: "Invalid token" });
   }
   req.user=data
   next()
   
}catch(e){
    return res.status(401).json({ msg: "Invalid token",error:e });


}
}

export default authenticate