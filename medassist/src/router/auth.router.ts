import { Router } from "express";
import { authController } from "../controller/auth.controller";

let controller = new authController()
let auth_router = Router()

auth_router.post('/login', controller.loginUser)

export default auth_router