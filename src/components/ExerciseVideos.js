
import React from 'react'
import { Typography, Box, Stack } from '@mui/material';


function ExerciseVideos({exerciseVideos, name}) {

  
    if(!exerciseVideos.length) return "loading..."

  return (
    <Box sx ={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px" >
        <Typography variant='h3' mb="33px">
            Watch <span style={{color: 'red', textTransform:'capitalize'}}>{name} </span> Exercise Videos
        </Typography>
        <Stack 
        sx={{ flexDirection: { lg: 'row' },
         gap: { lg: '110px', xs: '0px' } }} 
         justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        
        >
            {exerciseVideos?.slice(0,4).map((item, index)=>(
                <a
                key={index}
                className='exercise-video'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target ='_blank'
                rel='noreferrer'
                >
                    <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />

                    <Typography variant="h6"  sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color ="black" >
                        {item.video.title}
                    </Typography>

                    <Typography variant="h5"  sx={{ fontSize: { lg: '28px', xs: '18px' }, marginTop: '-8px' }} fontWeight={600} color ="black" >
                        {item.video.channelName}
                    </Typography>
                </a>
            ))}
        </Stack>

    </Box>
  )
}

export default ExerciseVideos