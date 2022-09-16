import React, { useContext } from 'react';
import { Box, Typography, styled, Button } from '@mui/material';
import './productDetalis.css';
import CartIcon from '@mui/icons-material/ShoppingCart';
import { FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cartProducts } from '../../service/api';

const Component = styled(Box)`
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     margin-top:20px;
`
const Image = styled('img')(({ theme }) => ({
  width: '280px',
  height: '320px',
  border: '1px solid #DFDFDE',
  padding: '20px  35px'
}));

const LeftDetails = ({ data }) => {
  // const { account, setAccount } = useContext(LoginContext);

  const navigate = useNavigate();

  const cartItem = async (id) => {
    const res = await cartProducts(id);
    if (res.status === 401) {
      toast.error('User not found !', {
        position: "top-center"
      });
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 2000);
    } if (res.status === 201) {
      toast.success('Product added in your cart', {
        position: "top-center"
      });
      setTimeout(() => {
        navigate('/cart_details', { replace: true });
      }, 2000);
    }

  }
  return (
    <Component>
      <Image src={data.detailUrl} alt="image" />
      <Box style={{ margin: "10px 0" }}>
        <Button onClick={() =>cartItem(data.id)} className='cartBtn'><CartIcon />&nbsp; ADD TO CART</Button>
        <Button className='buyNowBtn'><Flash />&nbsp; BUY NOW</Button>
      </Box>
      <ToastContainer />
    </Component>
  )
}

export default LeftDetails;
