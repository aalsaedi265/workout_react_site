
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData} from '../utils/fetchData'
import { Detail,ExerciseVideos, SimilarExercises } from '../components'


function ExerciseDetail() {

  const [exerciseDetail, setExercisesDetail] = useState({})
  const {id} = useParams() 

  useEffect(()=>{

    const fetchExercisesData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeUrl = 'https://https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions )

      setExercisesDetail(exerciseDetailData)
    };
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    
    </Box>
  )
}

export default ExerciseDetail