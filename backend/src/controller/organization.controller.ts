import { Request, Response } from "express";
import { organizationService } from "../services/organization.service";

let orgService = new organizationService()

let addOrganization = async(req:Request, res:Response) => {
    try {
        let {name, description, profile_image} = req.body

        let response = await orgService.createOrganization(req.body)

        console.log(response);
        

        return res.json(response)
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

let getAllOrganizations = async (req:Request, res:Response)=>{
    try {
        let organizations = await orgService.fetchOrganizations()

        return res.status(201).json(
            organizations
        )
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export async function getOneOrganization(req:Request, res:Response){
    try {
        let {org_id} = req.params

        let response = await orgService.fetchOneOrganization(org_id)

        return res.status(201).json(response)

    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export async function deleteAnOrganization(req:Request, res:Response){
    try {
        let org_id = req.params.org_id

        let response = await orgService.deleteOrganization(org_id)

        return res.json(response)
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export async function updateOrganization(req:Request, res:Response){
    try {
        let org_id = req.params.org_id

        let {name, description, profile_image} = req.body

        let organization ={
            id:org_id,
            name,
            description,
            profile_image
        }

        let response = await orgService.updateOrganization(org_id, organization);
      
        return res.json(response)
        

    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export {
    addOrganization,
    getAllOrganizations
}