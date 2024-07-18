import { Request, Response } from "express";
import { userService } from "../services/user.service";

let service = new userService()

export class userController {

    async createUser(req: Request, res: Response) {
        try {
            let { 
                username,
                email,
                password,
                name,
                bio,
                location,
                d_o_b,
                website,
                profileImage,
                headerImage } = req.body

            let response = await service.createUser(req.body)

            return res.json(response)

        } catch (error) {
            return res.json({ error })
        }
    }

    async updateUser(req:Request, res:Response){
        try {
            let {id} = req.params

            let{username, email, password, name, bio, location, d_o_b, website, profileImage, headerImage} = req.body

            let response = await service.updateUser(id, req.body)

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async getUsers(req:Request, res:Response){
        try {
            let response = await service.viewAllUsers()

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async getUser(req:Request, res:Response){
        try {
            let{id} = req.params

            let response = await service.viewOneUser(id)

            return res.json(response)

        } catch (error) {
            return res.json({error})
        }
    }

    async deleteUser(req:Request, res:Response){
        try {
            let{id} = req.params

            let response = await service.deleteUser(id)

            return res.json(response)

        } catch (error) {
            return res.json({error})
        }
    }
}