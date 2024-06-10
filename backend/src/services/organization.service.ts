import mssql from 'mssql'
import { PrismaClient } from '@prisma/client';
import lodash from 'lodash'
import { organization } from "../interfaces/organization";
import {v4} from 'uuid'
import { sqlConfig } from '../config/sql.config';
import Connection from '../dbHelper/dbhelper';
// let Organizations: organization[] = []

export class organizationService{

    prisma = new PrismaClient({
        log:['error']
    })

    async createOrganization(org: organization){
        // let pool = await mssql.connect(sqlConfig)

        
        // Organizations.push(newOrganization);
        // let result = await (await pool.request()
        // .input("id", v4())
        // .input("name", org.name)
        // .input("description", org.description)
        // .input("profile_image", org.profile_image).execute("createOrganization")).rowsAffected

        // console.log(result);

        let result = (await Connection.execute("createOrganization", {id:v4(), name: org.name, description: org.description, profile_image: org.profile_image})).rowsAffected
        

        if(result[0] == 1){
            return {
                message: "Organization created successfully"
            }
        }else{
            return {
                error: "Unable to create organization"
            }
        }
   
    }

    async updateOrganization(org_id:string, org:organization){
        let pool = await mssql.connect(sqlConfig)
        //check if organizatio exists
        let organizationExists = await (await pool.request().query(`SELECT * FROM Organizations WHERE id='${org_id}'`)).recordset

        console.log(organizationExists);
        

        if(lodash.isEmpty(organizationExists)){
            return {
                error: "Organization not found"
            }
        }else{

        let result = (await pool.request()
        .input("id", organizationExists[0].id)
        .input("name", org.name)
        .input("description", org.description)
        .input("profile_image", org.profile_image).execute("updateOrganization")).rowsAffected

        if(result[0] < 1){
            return {
                error: "Was not able to update"
            }
        }else{
            return {
                message: "Organization updated successfully"
            };
        }
                    
    }
    }

    async fetchOrganizations(){
        // let pool = await mssql.connect(sqlConfig)
        // let response = (await pool.request().query('SELECT * FROM Organizations')).recordset

        // let response = (await Connection.query('SELECT * FROM Organizations')).recordset

        let response = await this.prisma.organizations.findMany()
        return {
            organizations: response
        }
    }

    async fetchOneOrganization(org_id:string){
        let pool = await mssql.connect(sqlConfig)
        let response = (await pool.request().query(`SELECT * FROM Organizations WHERE id = '${org_id}'`)).recordset

        if(response.length < 1){
            return "No organization found"
        }else{
            return {
                organization: response[0]
            };
        }
    }

    async deleteOrganization(org_id:string){
        let pool = await mssql.connect(sqlConfig)
        let response = (await pool.request().query(`SELECT * FROM Organizations WHERE id = '${org_id}'`)).recordset
        
        if(response.length < 1){
            return {
                error: "Organization not found"
            }
        }else{
            await pool.request().query(`DELETE FROM Organizations WHERE id = '${org_id}'`)
            return {
                message: "Organization deleted successfully"
            }
        }
        
    }
}