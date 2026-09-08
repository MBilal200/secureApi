import {Router} from "express"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
const router=Router()

router.use("/user",userRoutes)

// router.use("/admin")

router.use("/auth",authRoutes)






export default router