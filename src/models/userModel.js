import {Schema,model} from "mongoose"
import {hash} from "bcryptjs"
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        match:[/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/]
    },
    contact:{
        type:String,
        required:true,
        match:[/^[0-9]{11}$/]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    },
    role:{  
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

userSchema.pre("save",async function(){
    // Pre-save middleware logic here
   if(!this.isModified("password")) {
    // return next();
   }
    this.password= await hash(this.password,10)
    // next();
});

const userModel=model("users",userSchema)

export default userModel