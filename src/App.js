
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/material'
import { Footer, Navbar } from './components'
import {Home, ExerciseDetail} from './Page'
import './App.css'


function App() {
  return (
    //box instead of div
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App