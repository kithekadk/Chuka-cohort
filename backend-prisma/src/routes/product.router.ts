import { Router } from "express";
import { productController } from "../controller/product.controller";

let controller = new productController()

let product_router = Router()

product_router.post('/create', controller.createProduct)
product_router.get('/all', controller.getProducts)
product_router.put('/update/:id', controller.updateProduct)
product_router.get('/single/:id', controller.getProduct)
product_router.delete('/delete/:id', controller.deleteProduct)

export default product_router