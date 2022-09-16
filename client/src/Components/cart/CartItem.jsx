import React, { useContext, useEffect } from 'react';
import { cartDetalis } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Grid, styled, Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';



import CartDetalis from './CartDetalis';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';

import { LoginContext } from '../context/ContextProvider';


const CartItem = () => {
   const dispatch = useDispatch();

   const data = useSelector((state) => state.cartProduct.cartProduct.carts);

   // const {cartLength,setCartLength}=useContext(LoginContext);


   useEffect(() => {
      dispatch(cartDetalis());
   }, [])
   return (
      <Box>
         {
            data && Object.keys(data).length ?
               <Box>
                  {
                     data && Object.keys(data).length &&
                     <Grid container>
                        <Grid item lg={8.5} md={8.5} sm={12} xs={12}>
                           <CartDetalis data={data} />
                        </Grid>
                        <Grid item lg={3.5} md={3.5} sm={12} xs={12}>
                           <TotalView data={data} />
                        </Grid>
                     </Grid>
                  }
               </Box> :
               <Box>
                  <EmptyCart />
               </Box>
         }
      </Box>
   )
}

export default CartItem;
