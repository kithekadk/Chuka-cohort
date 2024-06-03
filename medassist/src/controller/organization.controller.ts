import { Request, Response } from "express";
import { organizationService } from "../services/organization.service";

let orgService = new organizationService()

let addOrganization = async(req:Request, res:Response) => {
    try {
        let {name, description, profile_image} = req.body

        let response = orgService.createOrganization(req.body)

        if(typeof(response) == "string"){
            return res.json({error: response})
        }else{
            return res.json({
                message: "Organization created successfully",
                organization: response
            })
        }
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

let getAllOrganizations = (req:Request, res:Response)=>{
    try {
        let organizations = orgService.fetchOrganizations()

        return res.status(201).json({
            organizations
        })
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export function getOneOrganization(req:Request, res:Response){
    try {
        let {org_id} = req.params

        let response = orgService.fetchOneOrganization(org_id)

        if(typeof response == "string"){
            return res.status(404).json({error: response})
        }else{
            return res.status(201).json({organization: response})
        }
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export function deleteAnOrganization(req:Request, res:Response){
    try {
        let org_id = req.params.org_id

        let response = orgService.deleteOrganization(org_id)

        return res.json({response})
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export function updateOrganization(req:Request, res:Response){
    try {
        let org_id = req.params.org_id

        let {name, description, profile_image} = req.body

        let organization ={
            id:org_id,
            name,
            description,
            profile_image
        }

        let response = orgService.updateOrganization(org_id, organization);

        if(typeof response == "string"){
            return res.json({response})
        }else{
            return res.json({message: "Organization updated successfully"})
        }

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