import express from 'express'
import { Exercise } from '../models/exerciseModel.js'

const router = express.Router()

// Route to save an exercise

router.post('/', async (req, res) =>{
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

// Get all exercises from our db

router.get('/', async (req, res) =>{
    try{
        const exercises = await Exercise.find({})
        return res.status(200).json({
            count: exercises.length,
            data: exercises
        })
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

// Get an exercise from our db by id

router.get('/:id', async (req, res) =>{
    try{

        const {id} = req.params

        const exercise = await Exercise.findById(id)
        return res.status(200).json(exercise)
    }catch(err){
        console.log(err.message)
        res.status(500).send({message: err.message})
    }
})

// Route to update an exercise

router.put('/:id', async (req, res) =>{
    try{
        if(
            !req.body.title || 
            !req.body.sets ||
            !req.body.reps
        ){
            return res.status(400).send({
                message: "Please fill in all fields."
            })
        }

        const {id} = req.params

        const result = await Exercise.findById(id, req.body)

        if (!result){
            return res.status(404).json({message: "Exercise not found."})
        }
        return res.status(200).send({message: 'Exercise updated successfully'})

    }catch(err){
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
})

// delete a book by id

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const result = await Exercise.findById(id)
        if (!result){
            return res.status(404).json({message: 'Exercise not found'})
        }
        return res.status(200).send({message: 'Exercise deleted successfully'})
    }catch(err){
        console.log(err.message)
        response.status(500).send({message: err.message})
    }
})

export default router