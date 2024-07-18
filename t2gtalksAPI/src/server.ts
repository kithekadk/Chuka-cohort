import express, { NextFunction, Request, Response, json }  from 'express'
import cors from 'cors'
import user_router from './routes/user.router'
import post_router from './routes/post.router'
import auth_router from './routes/auth.router'
import comment_router from './routes/comment.router'

let app = express()

app.use(json())
app.use(cors())

app.use('/user', user_router);
app.use('/post', post_router);
app.use('/auth', auth_router);
app.use('/comment', comment_router);

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    res.json({
        message: err.message
    })
})


app.listen(4116, ()=>{
    console.log("server running on port 4116 ...");
})