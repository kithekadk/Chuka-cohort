import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import { v4 } from "uuid";
import { user } from "../interfaces/user";

export class userService{
    prisma = new PrismaClient({
        log:['error']
    })

    async createUser(user:user){
        let user_id = v4()
        let hashedPwd = bcrypt.hashSync(user.password, 6)
        let response = await this.prisma.user.create({
            data:{
                id: user_id,
                name: user.name,
                username:user.username,
                email:user.email,
                password: hashedPwd,
                bio:user.bio,
                location:user.location,
                d_o_b:user.d_o_b,
                website:user.website,
                profileImage:user.profileImage,
                headerImage:user.headerImage
            }
        })

        if(response?.id == user_id){
            return {
                message: "Account creation success",
            }
        }else{
            return {
                error: "Unable to create account"
            }
        }
    }

    async updateUser(id:string, updated_user:user){
        let current_details = await this.prisma.user.findUnique({
            where:{
                id:id
            }
        })

        let response = await this.prisma.user.update({
            where:{
                id: id
            },
            data:{
                name: updated_user.name || current_details?.name,
                username:updated_user.username || current_details?.username,
                email:updated_user.email || current_details?.email,
                bio:updated_user.bio || current_details?.bio,
                location:updated_user.location || current_details?.location,
                d_o_b:updated_user.d_o_b || current_details?.d_o_b,
                website:updated_user.website || current_details?.website,
                profileImage:updated_user.profileImage || current_details?.profileImage,
                headerImage:updated_user.headerImage || current_details?.headerImage
            }
        })

        return {
            message: "User updated successfully",
            response
        }
    }
    

    async viewAllUsers(){
        return{
            users: await this.prisma.user.findMany()
        }
    }

    async viewOneUser(user_id:string){
        return{
            user: await this.prisma.user.findUnique({
                where:{
                    id: user_id
                }
            })
        }
    }

    async deleteUser(user_id:string){

        let response = await this.prisma.user.delete({
            where:{
                id: user_id
            }
        })

        return {
            message: "Account deleted successfully",
        }

    }
}