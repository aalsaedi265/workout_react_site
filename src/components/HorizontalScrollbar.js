
import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'

function HorizontalScrollbar({data, bodyPart, setBodyPart}) {


  console.log("data: ", data)
  return (
    <div>
      
     
      {data.map(item => 
      <Box
      key={item.id || item}
      itemID={item.id || item}
      title={item.id || item}
      m="0 40px"
      >
       <BodyPart item={item}  />

      </Box> ) }
    </div>
  )
}

export default HorizontalScrollbar