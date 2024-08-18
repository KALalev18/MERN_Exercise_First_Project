import express from "express"
import mongoose from 'mongoose';
import {PORT, mongoDBURL} from "./config.js"

const app = express()

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Happy to see MERN responding!')
})



mongoose
    .connect(mongoDBURL)
        .then(() => {
            console.log('Connected to MongoDB')
            app.listen(PORT, ()=>{
                console.log(`Server is running on port: ${PORT}`)
            })
        })
        .catch((err) => {
            console.log(err)
        })