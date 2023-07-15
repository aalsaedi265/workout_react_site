
import React,{ useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
;import ExerciseCard from './ExerciseCard';


function Exercises({setExercises, bodyPart, exercises}) {

  console.log(exercises)
  return (
    <Box id="exercises"
      sx={{mt:{ig: '110px'}}}
      mt= "50px"
      p="20px"
    >
      <Typography variant='h4' mb="46px">
        Gains Bro
      </Typography>
      <Stack
        direction="row" sx={{gap: {ig: '110px', xs: '50px'}}}
        flexWrap= 'wrap' justifyContent="center"
      >
        {exercises.map((el, idx) => (
          <p>{el.name}</p>
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises