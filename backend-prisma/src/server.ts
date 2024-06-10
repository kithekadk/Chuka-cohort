import express, { json }  from 'express'
import product_router from './routes/product.router'

let app = express()

app.use(json())

app.use('/product', product_router)

app.listen(4115, ()=>{
    console.log("server running on port 4115 ...");
})