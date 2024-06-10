import { PrismaClient } from "@prisma/client";
import { product } from "../interfaces/product";
import { v4 } from "uuid";

export class productService{
    prisma = new PrismaClient({
        log:['error']
    })

    async createProduct(product:product){
        let response = await this.prisma.products.create({
            data:{
                id: v4(),
                name: product.name,
                description: product.description,
                quantity: product.quantity
            }
        })

        return {
            message: "Product created successfully",
            response
        }
    }

    async updateProduct(id:string, product:product){
        let response = await this.prisma.products.update({
            where:{
                id: id
            },
            data:{
                name: product.name,
                quantity: product.quantity
            }
        })

        return {
            message: "Product updated successfully",
            response
        }
    }
    

    async viewAllProducts(){
        return{
            products: await this.prisma.products.findMany()
        }
    }

    async viewOneProduct(product_id:string){
        return{
            product: await this.prisma.products.findUnique({
                where:{
                    id: product_id
                }
            })
        }
    }

    async deleteProduct(product_id:string){

        let response = await this.prisma.products.delete({
            where:{
                id: product_id
            }
        })

        return {
            message: "Product deleted successfully",
            response
        }

    }
}