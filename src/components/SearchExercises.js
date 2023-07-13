
import React,{useEffect, useState} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { SearchOffSharp } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';



function SearchExercises({setExercises , bodyPart, setBodyPart}) {

  const [search, setSearch] = useState('')
  
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
      console.log(bodyParts)
    }
    fetchExercisesData()
  },[])

  const handleSearch = async ()=>{
   // url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    if(search){
      const exercisesDate = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      const searchedExercises = exercisesDate.filter(
        (el) => el.name.toLowerCase().includes(search)
        || el.target.toLowerCase().includes(search) 
        || el.equipment.toLowerCase().includes(search) 
        || el.bodyPart.toLowerCase().includes(search) 

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
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ backgroundColor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
      
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} 
        setBodyPart={setBodyPart}/>

      </Box>
    </Stack>
  )
}

export default SearchExercises