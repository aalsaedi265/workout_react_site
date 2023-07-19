
import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';


function Detail({exerciseDetail }) {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetails =[
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ]
  
  return (
    <Stack
    gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image"/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography variant='h3'>
          {name}
        </Typography>  
        <Typography variant='h5'>
          Get Swoll buying {name} in prefect form.
          
          This movement will training your {target} getting into a state jacked or shred if you focus on high rep low rest
        </Typography>
          {extraDetails.map((item) => (
            <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
              <Button>
                <img src={item.icon} alt ='icon'/>
              </Button>
              <Typography variant='h6'>
                {item.name}
              </Typography>

            </Stack>
          ))}
      </Stack>

    </Stack>
  )
}

export default Detail