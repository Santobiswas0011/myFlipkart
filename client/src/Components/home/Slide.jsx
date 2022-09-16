import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, styled, Button } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Divider from '@mui/material/Divider';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

import { getProductData } from '../redux/action/productAction';


const Component = styled(Box)`
    margin:5px 10px 15px 12px !important;
    background:#FFFFFF;
`
const BtnStyle = styled(Button)`
   margin-left:auto;
`
const Image = styled('img')(({ theme }) => ({
   width: "110px",
   height: "100px",
   [theme.breakpoints.down("md")]: {
      width: "120px",
      height: "110px",
   }
}));

const Wrapper = styled(Box)`
   padding:15px 0 10px 0;
`
const Text = styled(Typography)`
    font-size:14px;
    margin-left:7px;
    margin-top:7px;
    color:#000;
`
const Timer = styled(Box)`
   display:flex;
`
const TimerImg=styled('img')({
     width:'28px',
     marginLeft:'15px'
});

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
   },
   mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 2
   }
};

const Slide = ({ title, timer }) => {
   const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
   const renderer = ({ hours, minutes, seconds }) => {
      return <span>{hours}:{minutes}:{seconds} </span>;
   };

   const products = useSelector((state) => state.getProducts.products);

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProductData());
   }, [])
   return (
      <Component>
         <Box style={{ display: "flex", padding: "10px" }}>
            <Typography style={{ padding: "3px" }} variant='h6'>{title}</Typography>
            {
               timer && <Timer>
                  <TimerImg src={timerURL} alt="timerURL" />
                 <Box style={{fontSize:"18px",display: "flex",marginLeft:"10px",paddingTop:"5px"}}>
                 <Countdown date={Date.now() + 1.44e+7} renderer={renderer} />
                 <Typography style={{fontSize:"18px",marginLeft:"7px"}}>Left</Typography>
                 </Box>
               </Timer>
            }
            <BtnStyle variant="contained">View All</BtnStyle>
         </Box>
         <Divider />
         <Wrapper>
            <Carousel
               swipeable={false}
               draggable={false}
               responsive={responsive}
               centerMode={true}
               infinite={true}
               autoPlay={true}
               autoPlaySpeed={10000}
               keyBoardControl={true}
               showDots={false}
               containerClass="carousel-container"
               removeArrowOnDeviceType={["tablet", "mobile"]}
               dotListClass="custom-dot-list-style"
            >
               {
                  products && products.map((product) => {
                     return (
                        <a style={{textDecoration:'none'}} href={`/productDetails/${product.id}`}>
                           <Image src={product.url} alt="" />
                           <Text style={{fontWeight: '600'}}>{product.title.shortTitle}</Text>
                           <Text style={{color: 'green'}}>{product.discount}</Text>
                           <Text>{product.tagline}</Text>
                        </a>
                     )
                  })
               }
            </Carousel>
         </Wrapper>

      </Component>
   )
}

export default Slide;
