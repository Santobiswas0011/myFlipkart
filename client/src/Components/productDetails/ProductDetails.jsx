import React from 'react';
import { Box, Typography, Grid,styled,Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductOne } from '../../service/api';

// import Details components
import LeftDetails from './LeftDetails';
import RightDetails from './RightDetails';
import { useDispatch, useSelector } from 'react-redux';
import './productDetalis.css';


const Wrapper=styled(Box)(({theme})=>({ 
     display:'flex',
     justifyContent: 'space-around',
     padding:'10px',
     background:'#FFFFFF',
     '& > P' :{
      fontWeight: '600'
     },
     [theme.breakpoints.down("md")]:{
          display:"none"
     }
 }));

const RDetails=styled(Grid)(({theme})=>({
      [theme.breakpoints.down("md")]:{
           paddingLeft:"15px"
      }
}));

const ProductDetails = () => {
   const { id } = useParams();
   // const dispatch = useDispatch();

   // const data = useSelector((state) => state.getProducts.products);

   const [singleData, setSingleData] = useState("");


   const singleProduct = async (id) => {
      const res = await getProductOne(id);
      setSingleData(res.data);
   }

   useEffect(() => {
      singleProduct(id);
   }, [id]);

   return (
      <>
      <Wrapper>
         <Typography>Electronics</Typography>
         <Typography>TVs & Applications</Typography>
         <Typography>Men</Typography>
         <Typography>Women</Typography>
         <Typography>Home & Furniture</Typography>
         <Typography>Sports,Books & More</Typography>
         <Typography>Offer Zone</Typography>
      </Wrapper>
      <Divider />
         {
            singleData && Object.keys(singleData).length &&
            <Grid container style={{background:"#FFFFFF"}}>
               <Grid item lg={5} md={5} sm={12} xs={12}>
                  <LeftDetails data={singleData} />
               </Grid>
               <RDetails item lg={7} md={7} sm={12} xs={12}>
                  <RightDetails data={singleData} />
               </RDetails>
            </Grid>
         }
      </>
   )
}

export default ProductDetails;
