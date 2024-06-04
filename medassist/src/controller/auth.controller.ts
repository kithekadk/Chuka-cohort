import { Request, Response } from "express";
import { authService } from "../services/auth.service";


let service = new authService()

export class authController{

    async loginUser(req: Request, res:Response){
        try {
            let {email, password} = req.body

            let response = await service.login(req.body)

            return res.status(201).json(response)
        } catch (error) {
            res.status(500).json({error})
        }
    }
}