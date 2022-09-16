import React from 'react';
import { Grid, styled, Box } from '@mui/material';
import style from './home.module.css';


const Wrapper = styled(Grid)`
    diplay:flex;
`
const MidImage=styled('img')(({theme})=>({
      width:'100%',
      height:'230px',
      [theme.breakpoints.down("sm")]:{
         objectFit: 'cover',
         height:'180px'
      }
}));

const Image=styled('img')(({theme})=>({
     height:'230px',
     width:'100%',
     marginTop:'3px',
     boxShadow: '1px 1px 3px .7px #444',
     [theme.breakpoints.down("md")]:{
        objectFit: 'cover'   
     },
     [theme.breakpoints.down("sm")]:{
        objectFit: 'cover',
        height:'180px'
     }
 }));

const ImageURL = [
   'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
   'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
   'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const MidSlide = () => {
   const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
   return (
      <>
         <Wrapper lg={12} md={12} sm={12} xs={12} container>
            {
               ImageURL.map((img) => {
                  return (
                     <Grid item lg={4} md={4} sm={12} xs={12}>
                        <MidImage src={img} alt="" />
                     </Grid>
                  )
               })
            }
         </Wrapper>
         <Image src={url} alt="img" />
      </>
   )
}

export default MidSlide;
