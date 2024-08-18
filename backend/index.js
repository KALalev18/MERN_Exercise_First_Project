import express, { response } from "express"
import mongoose from 'mongoose';
import {PORT, mongoDBURL} from "./config.js"
import { Exercise } from "./models/exerciseModel.js";

const app = express()

// manage post requests

app.use(express.json())

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Happy to see MERN responding!')
})

// Route to save an exercise

app.post('/exercises', async (req, res) =>{
    try{
        if(
            !req.body.title || 
            !req.body.sets ||
            !req.body.reps
        ) {
            return res.status(400).send({
                message: "Please fill in all fields!"
            })
        }
        const newExercise = {
            title: req.body.title,
            sets: req.body.sets,
            reps: req.body.reps,
        }
        
        const exercise = await Exercise.create(newExercise)

        return res.status(201).send(exercise)
    }catch(err){
        console.log(err.message)
        response.status(500).send({message: error.message})
    }
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