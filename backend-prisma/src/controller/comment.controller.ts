import { Request, Response } from "express";
import { commentService } from "../services/comment.service";

let service = new commentService()

export class commentController{

    async addComment(req:Request, res:Response){
        try {
            let {comment, post_id, authorId} = req.body

            let response = await service.addComment(post_id, comment, authorId)

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async deleteComment(req:Request, res:Response){
        try {
            let {comment_id, commenterId} = req.body

            let response = await service.deleteComment(comment_id, commenterId)

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async getPostComments(req:Request, res:Response){
        try {
            let {post_id} = req.params

            let response = await service.getPostComments(post_id)

            return res.json(response)

        } catch (error) {
            return res.json({error})
        }
    }
}