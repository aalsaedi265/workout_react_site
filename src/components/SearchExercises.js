
import React,{useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';



function SearchExercises() {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px'}}}
          mb='50px' textAlign='center'
      >
        Best Pump Workout <br />
        Feel The Pump
      </Typography>
      <Box position="relative" mb="72">
        <TextField
          height="76px"
          value=""
          onChange={(e)=>{}}
          placeholder='Search for the Pump'
        >

        </TextField>
      </Box>

    </Stack>
  )
}

export default SearchExercises