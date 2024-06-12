import { Router } from "express";
import { postController } from "../controller/post.controller";

let controller = new postController()

let post_router = Router()

post_router.post('/create', controller.createPost)
post_router.put('/update/:post_id', controller.updatePost)
post_router.get('/all/:user_id', controller.viewUsersPosts)
post_router.delete('/delete', controller.deletePost)

export default post_router