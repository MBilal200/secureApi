import {z} from "zod"

const userZodSchema=z.object({
    name:z.string().min(3),
    email:z.string().email(),
    password:z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    contact:z.string().regex(/^[0-9]{11}$/),
    gender:z.enum(["Male","Female","Other"])
})



export default userZodSchema