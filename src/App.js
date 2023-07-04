
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import {Home, ExerciseDetail, Footer, Navbar } from './components'


function App() {
  return (
    //box instead of div
    <Box width={400} sx ={{width: {x1:'1488px'}}} m ="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exercise/:id"  element={<ExerciseDetail/>}/>
        </Routes>
        <Footer />
    </Box>
  )
}

export default App