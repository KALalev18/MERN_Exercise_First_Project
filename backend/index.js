import express from "express"
import {PORT} from "./config.js"

const app = express()

app.get('/', (req, res) =>{
    console.log(req)
    return res.status(234).send('Happy to see MERN responding!')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})