import {Router} from "express";
import {Register,Login,Logout,Refresh } from "../controllers/authController.js"
import validation from "../middlewares/validation.js"
import userZodSchema from "../models/Schemas/userZodSchema.js"
import authenticate from "../middlewares/authenticate.js"
const authRoutes=  Router()

authRoutes.post("/register",validation(userZodSchema),Register)
authRoutes.post("/login",Login)
authRoutes.post("/logout", authenticate, Logout)
authRoutes.post("/refresh",authenticate,Refresh)






export default authRoutes

