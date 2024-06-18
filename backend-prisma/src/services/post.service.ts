import { PrismaClient } from "@prisma/client";
import { post } from "../interfaces/post";
import { v4 } from "uuid";
import { string } from "joi";

export class postService{
    prisma = new PrismaClient({
        log:['error']
    })

    async createPost(new_post:post){
        let post_id = v4()
        await this.prisma.post.create({
            data:{
                id: post_id,
                content: new_post.content,
                images: new_post.images,
                authorId: new_post.authorId
            }
        })

        return {
            message: "Post created successfully"
        }
    }

    async updatePost(post_id:string, new_post:post){
        await this.prisma.post.update({
            where:{
                id: post_id
            },
            data:{
                content: new_post.content,
                images: new_post.images
            }
        })

        return {
            message: "Post updated successfully"
        }
    }

    async ViewAllPosts(){
        let posts = await this.prisma.post.findMany()

        let postsWithUser = []

        for(let post of posts){
            let user = await this.prisma.user.findUnique({
                where:{
                    id: post.authorId
                },
                select:{
                    name: true
                }
            })

            let postWithUser = {
                id : post.id,
                content: post.content,
                images: post.images,
                authorId: post.authorId,
                authorName: user?.name,
                createdAt: post.createdAt,
                updatedAt: post.updatedAt
            }

            postsWithUser.push(postWithUser)
        }

        return{
            posts: postsWithUser
        }
     
    }

    async getSinglePost(post_id:string){
        return{
            post: await this.prisma.post.findUnique({
                where:{
                    id:post_id
                }
            })
        }
    }

    async viewUserPost(user_id: string){
        return {
            posts:await this.prisma.post.findMany({
                where:{
                    authorId: user_id
                }
            })
        }
    }

    async deletePost(post_id:string, user_id:string){
        let post = await this.prisma.post.findUnique({
            where:{
                id: post_id
            }
        })

        if(post){
            let deletedpost = await this.prisma.post.delete({
                where:{
                    id: post_id,
                    authorId: user_id
                }
            })

            if(deletedpost){
                return{
                    message: "Post delete success"
                }
            }else{
                return{
                    error: "Unauthorized action on post"
                }
            }
        }else{
            return {
                error: "Post not found"
            }
        }
    }
}

