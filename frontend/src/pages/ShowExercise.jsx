import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowExercise = () =>{
    const [exercise, setExercise] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5555/exercises/${id}`)
        .then((res) => {
            setExercise(res.data)
            setLoading(false)
        }).catch((err) =>{
            console.log(err)
            setLoading(false)
        }) 
    }, [])

    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-3'>Show exercise</h1>
            {loading ? (
                <Spinner />
            ):(
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Id</span>
                        <span>{exercise._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Title</span>
                        <span>{exercise.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Sets</span>
                        <span>{exercise.sets}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Reps</span>
                        <span>{exercise.reps}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Create time</span>
                        <span>{new Date(exercise.createdAt).toString()}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-400'>Last update time</span>
                        <span>{new Date(exercise.updatedAt).toString()}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowExercise