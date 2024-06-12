import express, { json }  from 'express'
import user_router from './routes/user.router'
import post_router from './routes/post.router'

let app = express()

app.use(json())

app.use('/user', user_router)
app.use('/post', post_router)

app.listen(4115, ()=>{
    console.log("server running on port 4115 ...");
})