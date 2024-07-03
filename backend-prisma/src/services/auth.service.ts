import { PrismaClient } from "@prisma/client";
import { login_details } from "../interfaces/auth";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export class authService{

    prisma = new PrismaClient({
        log:['error']
    })

    async login(logins: login_details){

        let user = await this.prisma.user.findMany({
            where:{
                email:logins.email
            }
        })

        if(user.length < 1){
            return {
                error: "user not found"
            }
        }else{

            let hashedPassword = user[0].password

            //compare password
            let passwordMatches = bcrypt.compareSync(logins.password, hashedPassword)
            console.log(passwordMatches);
            
            if(passwordMatches){

                let {createdAt, password, ...rest } = user[0]

                let token = jwt.sign(rest, process.env.SECRET_KEY as string, {
                    expiresIn: '3h'
                })
                

                return {
                    message: "Logged in successfully",
                    token
                }
                
            }else{
                return {
                    error: "Incorrect password"
                }
            }
           
        }
    }
}