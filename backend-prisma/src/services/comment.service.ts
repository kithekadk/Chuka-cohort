import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";

export class commentService{
    prisma = new PrismaClient({
        log:['error']
    })

    async addComment(post_id:string, comment:string, authorId:string){
        await this.prisma.comment.create({
            data:{
                id: v4(),
                content: comment,
                postId: post_id,
                authorId: authorId
            }
        })

        return {
            message: "Comment added successfully"
        }
    }

    async deleteComment(comment_id:string, commenter_Id?:string){
        await this.prisma.comment.delete({
            where:{
                id: comment_id,
                authorId: commenter_Id 
            }
        })

        return {
            error: "Comment deleted successfully"
        }
    }

    async getPostComments(post_id:string){
        return{
            comments: await this.prisma.comment.findMany({
                where:{
                    postId:post_id
                }
            })
        }
    }
}