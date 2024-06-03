import express, { NextFunction, Request, Response, json } from 'express'
import organization_router from './router/organization.router'

const app = express()

app.use(json())
app.use('/orgs', organization_router)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})

let PORT = 5203

app.listen(5203, ()=>{
    console.log(`Server running on port ${PORT} ...`);
})