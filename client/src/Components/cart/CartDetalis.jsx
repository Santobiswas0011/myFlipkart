import React, { useContext, useEffect } from 'react';
import { Box, Typography, Grid, styled, Divider,Button } from '@mui/material';
import style from './cart.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch} from 'react-redux';
import { cartDetalis } from '../redux/action/productAction';
import { addEllipsis } from '../utils/utils';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { removeCartData } from '../../service/api';

const Component = styled(Box)`
    margin:15px;
    background:#FFFFFF;
    height:45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > P{
        font-size:19px;
    }
`
const Wrapper = styled(Box)`
    margin:0px 15px 0px 15px;
    background:#FFFFFF;
    display:flex;
    text-decoration: none;
    color:inherit;
`
const Image = styled('img')({
  width: '110px',
  height: '100px',
  padding: '15px 20px 15px 30px'
});
const Rating = styled(Typography)`
    background:green;
    padding:1px 5px;
    color:#FFFFFF;
    border-radius:4px;
    font-size:14px;
`
const RText = styled(Typography)`
   color:#878787;
   font-weight: 600;
   font-size:14px;
`

const OrderSection=styled(Box)`
    margin:8px 15px;
    background:#FFFFFF;
    height:60px;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 3px 1px #555;;
    & > button{
       margin-left:auto;
       margin-right:25px;
       background:orangered;
       color:#FFFFFF;
       font-weight:600;
       width:200px;
       font-size:18px;
    }
`
// const SelectBtn=styled(Box)(({theme})=>({
//       [theme.breakpoints.down("md")]:{
//            margin:'20px 0 0 20px'
//       }
// }));

const CartDetalis = ({ data }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const date=new Date(Date.now() + (5*24*60*60*1000));

  const navigate=useNavigate();
  const dispatch=useDispatch();

   const selectRemoveId=async(id)=>{
       const res =await removeCartData(id);
       if(res.status === 201){
        toast.success("Iteam remove from cart 😃!", {
          position: "top-center"
      });
        setTimeout(()=>{
          dispatch(cartDetalis());
          navigate('/cart_details',{replace:true});
        },2000)
       }
   }

  return (
    <>
      <Component>
        <Typography style={{ color: "#2874f0" }}>Flipkart ({data.length})</Typography>
        <Typography>Grocery</Typography>
      </Component>
      {
        data && data.map((product) => {
          return (
            <>
              <Wrapper>
                <Box>
                  <Box to={`/productDetails/${product.id}`} component={Link}>
                  <Image src={product.url} alt="images" />
                  </Box>
                   <Box className={style.SelectBtn} style={{marginLeft:"15px"}}>
                   <label style={{fontSize:"18px"}} for="">Qty : </label>
                      <select  style={{width:"40px",fontSize:"17px"}}>
                         <option value='1'>1</option>
                         <option value='2'>2</option>
                         <option value='3'>3</option>
                         <option value='4'>4</option>
                      </select>
                   </Box>
                </Box>
                <Box style={{padding:"15px 10px"}}>
                  <Typography style={{fontSize:"19px"}}>{addEllipsis(product.title.longTitle)}</Typography>
                  <Box style={{ display: "flex", marginTop: '8px' }}>
                    <Rating>4.3 ★</Rating>&nbsp;
                    <RText>3,594 Ratings </RText>&nbsp;
                    <img style={{ width: 80 }} src={fassured} alt="fassured" />
                  </Box>
                  <Typography style={{ marginTop: "8px" }}>
                    <span style={{ fontSize: 24 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>{product.price.discount} off </span>&nbsp;&nbsp;&nbsp;
                    <span style={{fontWeight:600,fontSize:"15px"}}>| Delivery by {date.toDateString()} | ₹40</span>
                  </Typography>
                  <Box style={{ marginTop: "8px"}}>
                  <Button onClick={()=>selectRemoveId(product._id)} style={{fontWeight:600,color:"red",marginLeft:'-8px'}}>REMOVE</Button>&nbsp;
                  <Button style={{fontWeight:600,color:"#000"}}>SAVE FOR LATER</Button>
                  </Box>
                </Box>
              </Wrapper>
              <Divider style={{ margin: "0 15px" }} />
            </>
          )
        })
      }
      <OrderSection>
         <Button className={style.btnStyle}>PLACE ORDER</Button>
      </OrderSection>
      <ToastContainer />
    </>
  )
}

export default CartDetalis;
