import {Router} from 'express'
import { addOrganization, deleteAnOrganization, getAllOrganizations, getOneOrganization, updateOrganization } from '../controller/organization.controller'

let organization_router = Router()

organization_router.post('/create-new', addOrganization)
organization_router.get('/all', getAllOrganizations)
organization_router.put('/update/:org_id', updateOrganization)
organization_router.get('/:org_id', getOneOrganization)
organization_router.delete('/delete/:org_id', deleteAnOrganization)

export default organization_router;