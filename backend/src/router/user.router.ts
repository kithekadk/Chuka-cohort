import { Router } from "express";
import { userController } from "../controller/user.controller";

let controller = new userController()

let user_router = Router()

user_router.post('/create', controller.createUser)
user_router.get('/all-users', controller.fetchAll)

export default user_router