
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, youTubeOptions, fetchData} from '../utils/fetchData'
import { Detail,ExerciseVideos, SimilarExercises } from '../components'


function ExerciseDetail() {

  const [exerciseDetail, setExercisesDetail] = useState({})
  const [exerciseVideos, setExercisesVideos] = useState([])
  const {id} = useParams() 

  useEffect(()=>{

    const fetchExercisesData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com'

      const youtubeUrl = 'https://https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions )
      setExercisesDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeUrl}/search?q=${exerciseDetailData.name}`, youTubeOptions)
      setExercisesVideos(exerciseVideosData)
      
    };
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises />
    
    </Box>
  )
}

export default ExerciseDetail