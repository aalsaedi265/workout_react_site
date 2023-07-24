
import { Typography, Box, Stack } from '@mui/material';
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>

    <Typography variant='h3' sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mt='14px' mb="33px">
      Similar <span style={{ color: 'red', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>

    <Typography  variant='h3' sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
  )
}

export default SimilarExercises