import {Router} from 'express'
import { addOrganization, deleteAnOrganization, getAllOrganizations, getOneOrganization, updateOrganization } from '../controller/organization.controller'
import { verifyToken } from '../middlewares/verifyToken'

let organization_router = Router()

organization_router.post('/create-new', verifyToken, addOrganization)
organization_router.get('/all', verifyToken, getAllOrganizations)
organization_router.put('/update/:org_id', verifyToken, updateOrganization)
organization_router.get('/:org_id', verifyToken, getOneOrganization)
organization_router.delete('/delete/:org_id', verifyToken, deleteAnOrganization)

export default organization_router;