import { Router } from "express";
import { commentController } from "../controller/comment.controller";

let comment_router = Router()

let controller = new commentController()

comment_router.post('/new', controller.addComment)
comment_router.delete('/delete', controller.deleteComment)
comment_router.get('/all-post-comments/:post_id', controller.getPostComments)

export default comment_router