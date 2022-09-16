import React from 'react';
import { Box,styled } from '@mui/material';

const Component=styled(Box)(({theme})=>({
       [theme.breakpoints.down("md")]:{
            display:'none'
       }
}));

const Image=styled('img')({
      width:'100%',
      height:"275px",
      border:"4px solid #FFFFFF"
});

const AddSlice = () => {
   const adURL = 'https://rukminim1.flixcart.com/fk-p-flap/464/708/image/e5d43b308280f531.jpg?q=70';
  return (
    <Component style={{paddingRight:"15px"}}>
       <Image src={adURL} alt="adURL" />
    </Component>
  )
}

export default AddSlice;
