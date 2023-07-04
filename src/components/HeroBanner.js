
import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import  HeroBannerImage  from '../assets/images/banner.png'

function HeroBanner() {
  
    return (
    <Box
        sx={{
            mt:{lg:'212px', xs:'70px'},
            ml:{ sm:'50px'}
        }}
        position='relative'
        p='20px'
    >
        <Typography 
            color='#FF2625' 
            fontWeight='600'
            fontSize="26px"
            >
            Jacked Club
        </Typography>
        <Typography
            fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px"
        >
            Pump Iron, Feel the Pump <br/> & Get Shreded
        </Typography>

        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px"
        >
            here are the big mass gainer movements
        </Typography>
        
        <Typography
         fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                THE PUMP
        </Typography>
        
        <img className="hero-banner-img"  src={HeroBannerImage} alt="hero-banner" />
    </Box >
  )
}

export default HeroBanner