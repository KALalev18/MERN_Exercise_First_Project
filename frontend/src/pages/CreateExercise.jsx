import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateExercise = () =>{
    const [title, setTitle] = useState('')
    const [sets, setSet] = useState('')
    const [reps, setRep] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSaveExercise = () =>{
        if (sets <= 0 || reps <= 0) {
            alert("Sets and reps cannot be less than or 0.")
            return
        }
        const data = {
            title,
            sets,
            reps,
        }
        setLoading(true)
        axios.post('http://localhost:5555/exercises', data)
        .then (() =>{
            setLoading(false)
            navigate('/')
        })
        .catch((err) =>{
            setLoading(false)
            alert("Error occured. Check console for more info")
            console.log(err)
        })
    }

    return(
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create exercise</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-300 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-400'>Title</label>
                    <input 
                        type='text' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-400'>Sets</label>
                    <input 
                        type='number' 
                        value={sets} 
                        onChange={(e) => setSet(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-400'>Reps</label>
                    <input 
                        type='number' 
                        value={reps} 
                        onChange={(e) => setRep(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveExercise}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateExercise