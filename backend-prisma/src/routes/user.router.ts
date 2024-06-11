import { Router } from "express";
import { userController } from "../controller/user.controller";

let controller = new userController()

let user_router = Router()

user_router.post('/create', controller.createUser)
user_router.get('/all', controller.getUsers)
user_router.put('/update/:id', controller.updateUser)
user_router.get('/single/:id', controller.getUser)
user_router.delete('/delete/:id', controller.deleteUser)

export default user_router