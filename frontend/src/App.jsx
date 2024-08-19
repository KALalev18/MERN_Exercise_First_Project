import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateExercise from './pages/CreateExercise'
import ShowExercise from './pages/ShowExercise'
import EditExercise from './pages/EditExercise'
import DeleteExercise from './pages/DeleteExercise'

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercises/create' element={<CreateExercise />} />
      <Route path='/exercises/details/:id' element={<ShowExercise />} />
      <Route path='/exercises/edit/:id' element={<EditExercise />} />
      <Route path='/exercises/delete/:id' element={<DeleteExercise />} />
    </Routes>
  )
}

export default App