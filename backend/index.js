import express from "express"
import mongoose from 'mongoose';
import {PORT, mongoDBURL} from "./config.js"
import exerciseRoute from './routes/exerciseRoute.js'
import cors from 'cors'

const app = express()

// manage post requests

app.use(express.json())

// allow all origins - app.use(cors())

// allow custom origins

/*
app.use(
    cors({
        origin: 'http://localhost:5555/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
)*/

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Happy to see MERN responding!')
})


app.use('/exercises', exerciseRoute)


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