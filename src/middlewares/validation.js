const validation=(Schema)=>async(req,res,next)=>{
    try{
        await Schema.parseAsync(req.body)
        next()
    }catch(e){
        res.status(400).json({msg:"zod errors",error:e})
    }
   
}

export default validation