import { Request, Response } from "express";
import { productService } from "../services/product.service";

let service = new productService()

export class productController{

    async createProduct(req:Request, res:Response){
            try {
                let {name, description, quantity} = req.body

            let response = await service.createProduct(req.body)

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async updateProduct(req:Request, res:Response){
        try {
            let {id} = req.params

            let{name, quantity} = req.body

            let response = await service.updateProduct(id, req.body)

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async getProducts(req:Request, res:Response){
        try {
            let response = await service.viewAllProducts()

            return res.json(response)
        } catch (error) {
            return res.json({error})
        }
    }

    async getProduct(req:Request, res:Response){
        try {
            let{id} = req.params

            let response = await service.viewOneProduct(id)

            return res.json(response)
            
        } catch (error) {
            return res.json({error})
        }
    }

    async deleteProduct(req:Request, res:Response){
        try {
            let{id} = req.params

            let response = await service.deleteProduct(id)

            return res.json(response)

        } catch (error) {
            return res.json({error})
        }
    }
}