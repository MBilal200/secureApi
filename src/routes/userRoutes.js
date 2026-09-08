import {Router} from "express"
import {readUser,createUser,readUserById,updateUser,deleteUser} from "../controllers/userController.js"
import authenticate from "../middlewares/authenticate.js"
const userRoutes=Router()


userRoutes.get("/read",authenticate,readUser)
userRoutes.post("/create",authenticate,createUser)
userRoutes.get("/readId/:id",authenticate,readUserById)
userRoutes.put("/update/:id",authenticate,updateUser)
userRoutes.delete("/delete/:id",authenticate,deleteUser)









export default userRoutes