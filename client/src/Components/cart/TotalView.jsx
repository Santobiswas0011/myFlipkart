import React, { useState } from 'react';
import { Box, Typography, styled, Divider } from '@mui/material';
import { useEffect } from 'react';

const Component = styled(Box)(({ theme }) => ({
  margin: '15px 15px 15px 0',
  background: '#FFFFFF',
  [theme.breakpoints.down("md")]: {
    margin: "15px"
  }
}));

const Wrapper = styled(Box)`
     padding:15px;
     & > p{
        margin-bottom:15px;
        font-size:18px;
        color:#878787;
     }
`

const Price = styled(Typography)`
     float:right;
`

const TotalView = ({ data }) => {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const totalCount = () => {
       let price =0;
       let discount =0;
        data.map((product)=>{
            return(
               price=product.price.mrp + price,
               discount=product.price.cost + discount
            )
        })
        setPrice(price);
        setDiscount(discount);
  }

  useEffect(() => {
    totalCount();
  }, [])
  return (
    <Component>
      <Box style={{ padding: "10px" }}>
        <Typography style={{ fontWeight: 600, color: "#878787" }}>PRICE DETAILS</Typography>
      </Box>
      <Divider />
      <Wrapper>
        <Typography>Price ({data.length})
          <Price style={{fontSize:"18px",color:'#000'}} component="span">₹{price}</Price>
        </Typography>
        <Typography>Discount
          <Price style={{color:"green"}} component="span">- ₹{price - discount}</Price>
        </Typography>

        <Typography>Delivery Charges
          <Price component="span"> ₹40</Price>
        </Typography>
        <Divider />
        <Typography style={{ margin: "15px 0" }} variant='h6'>Total Amount
          <Price style={{ fontSize: '20px' }} component="span"> ₹{discount + 40}</Price>
        </Typography>
        <Divider />
        <Typography style={{ fontWeight: 600, margin: "15px 0 0 0", color: 'green', fontSize: '15px' }}>You will  save ₹{price - discount - 40} on this order</Typography>
      </Wrapper>
    </Component>
  )
}

export default TotalView;
