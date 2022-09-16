import React, { useEffect } from 'react';
import style from './home.module.css';
import { bannerData } from '../constant/data';
import { Box, Typography, styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';


const Image = styled('img')(({theme})=>({ 
   width: '100%',
   height: '280px',
   [theme.breakpoints.down("md")]:{
       objectFit:'cover',
       height: '230px',
   },
   [theme.breakpoints.down("sm")]:{
       height: '180px',
   },
}));

const Component = styled(Box)`
    padding:15px 10px 15px 12px !important;
`

const Banner = () => {
   return (
      <Component>
         <Carousel
            className="carasousel"
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
               style: {
                  background: "#fff",
                  color: "#494949",
                  borderRadius: "5px",
                  marginTop: -22,
                  height: "90px",
               }
            }}>
            {
               bannerData && bannerData.map((data) => {
                  return (
                     <Image key={data.id} src={data.url} alt="slideImage" />
                  )
               })
            }
         </Carousel>
      </Component>
   )
}

export default Banner;
