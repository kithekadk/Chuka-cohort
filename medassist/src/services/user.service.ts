import mssql from 'mssql'
import {v4} from 'uuid'
import bcrypt from 'bcryptjs'
import lodash from 'lodash'
import { user } from '../interfaces/user';
import { sqlConfig } from '../config/sql.config';

export class userService{

    async registerUser(user:user){
        let pool = await mssql.connect(sqlConfig)

        let user_id = v4() 
        let hashedPassword = bcrypt.hashSync(user.password, 6)

        if(pool.connected){
            //check if email exists
            let emailExists = (await pool.request().query(`SELECT * FROM Users WHERE email = '${user.email}'`)).recordset
            
            if(!lodash.isEmpty(emailExists)){       
                return {
                    error: "Email already in use"
                }
            }

            let phoneNoExists = (await pool.request().query(`SELECT * FROM Users WHERE phone_number = '${user.phone_number}'`)).recordset

            if(!lodash.isEmpty(phoneNoExists)){
                return {
                    error: "Phone number already in use"
                }
            }

            let result = (await pool.request()
            .input("id", mssql.VarChar, user_id)
            .input("name", user.name)
            .input("email", user.email)
            .input("phone_number", user.phone_number)
            .input("password", hashedPassword)
            .input("createdAt", new Date().getTime().toString())
            .execute("registerUser")).rowsAffected

            if(result[0] = 1){
                return {
                    message: "Account created successfully"
                }
            }else{
                return {
                    error: "Unable to create account"
                }
            }            

        }else{
            return {
                error: "Unable to establish connection"
            }
        }
    }

    async fetchAllUsers(){
        let pool = await mssql.connect(sqlConfig)

        let result = (await pool.request().execute("getAllUsers")).recordset

        if(result.length == 0){
            return {
                message: "No users at the moment"
            }
        }else{
            return {
                users: result
            }
        }
    }
}