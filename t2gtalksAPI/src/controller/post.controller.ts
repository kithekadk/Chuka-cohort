import { Request, Response } from "express";
import { postService } from "../services/post.service";

let service = new postService

export class postController{

    async createPost(req:Request, res:Response){
        try {
            let {content, images, authorId} = req.body

            let response = await service.createPost(req.body)

            return res.json(response)

        } catch (error) {
            res.json({error})
        }
    }

    async updatePost(req:Request, res:Response){
        try {
            let {post_id} = req.params
            let {content, images} = req.body

            let response = await service.updatePost(post_id, req.body)

            return res.json(response)
        } catch (error) {
            res.json({error})
        }
    }

    async viewUsersPosts(req:Request, res:Response){
        try {
            let {user_id} = req.params

            let response = await service.viewUserPost(user_id)

            return res.json(response)

        } catch (error) {
            res.json({error})
        }
    }

    async deletePost(req:Request, res:Response){
        try {
            let {post_id, user_id} = req.body

            let response = await service.deletePost(post_id, user_id)

            return res.json(response)
        } catch (error) {
            res.json({error})
        }
    }

    async getOnePost(req:Request, res:Response){
        try {
            let {post_id} = req.params

            let response = await service.getSinglePost(post_id)

            return res.json(response)
        } catch (error) {
            res.json({error})
        }
    }

    async getAllPosts(req:Request, res:Response){
        try {
            let response = await service.ViewAllPosts()

            return res.json(response)
        } catch (error) {
            res.json({error})
        }
    }
}