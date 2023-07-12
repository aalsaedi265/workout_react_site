
import React,{useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { SearchOffSharp } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';



function SearchExercises() {

  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
    }
  },[])

  const handleSearch = async ()=>{
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    if(search){
      const exercisesDate = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      console.log(exercisesDate)
      const searchedExercises = exercisesDate.filter(
        (exer) => exer.name.toLowerCase().includes(search)
        || exer.target.toLowerCase().includes(search) 
        || exer.equipment.toLowerCase().includes(search) 
        || exer.bodyPart.toLowerCase().includes(search) 

      )
      setSearch('')
      setExercises(searchedExercises)
    }
  }

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
        sx={{
          input: {fontWeight: '700',
                  border: 'none',
                  borderRadius:'4px'
                },
                width: {lg: '800px', xs: '350px'},
                backgroundColor: 'white',
                borderRadius: '40px'

          }}
          height="76px"
          value={search}
          onChange={(e)=> setSearch(e.target.value.toLowerCase() ) }
          placeholder='Search for the Pump'
          type='text'
        >
        
        </TextField>
        <Button className="search-btn"
          sx={{ background: '#FF2625',
           color: '#fff', textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
             height: '56px', position: 'absolute',
              right: '0px',
               fontSize: { lg: '20px', xs: '14px' } }} 
               onClick={handleSearch}>
          Search
        </Button>
      </Box>

    </Stack>
  )
}

export default SearchExercises