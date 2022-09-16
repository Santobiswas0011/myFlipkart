import React, { useState, useContext } from 'react';
import style from './header.module.css';
import { Box, styled, Typography } from '@mui/material';
import { Button, Avatar, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { deepOrange, deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   '& > button , & > div , & > p , & > a ': {
      marginLeft: '35px'
   },
   [theme.breakpoints.down('lg')]: {
      '& > button , & > div , & > p , & > a ': {
         marginLeft: '25px'
      },
   },
   [theme.breakpoints.down("md")]: {
      display: "none"
   }
}));

const ButtonStyle = styled(Button)`
    width:120px;
    height:35px;
    background:#FFFFFF;
    color:#444;
    font-weight: 600;
    text-transform: none;
    font-size:17px;
    letter-spacing: 1.5px;
`

const CustomButton = () => {

   const { account, setAccount } = useContext(LoginContext);
   const dispatch = useDispatch();

   const data = useSelector((state) => state.cartProduct.cartProduct.carts);

   console.log(data && data.length)


   const navigate = useNavigate();
   const [anchorEl, setAnchorEl] = useState("");
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };
   const logOut = () => {
      sessionStorage.removeItem('accessToken');
      setAccount("");
      navigate('/');
   }
   const buttonClick = () => {
      navigate('/login');
   }
   return (
      <Component>
         <ButtonStyle onClick={buttonClick} className={style.btnStyle} variant="contained">Login</ButtonStyle>
         <Avatar style={{ background: "gray" }}
            id="basic-button"
            onClick={handleClick}
         >
            {
               account ?
                  <Box>
                     {account.fName[0].toUpperCase()}
                  </Box> : ''
            }
         </Avatar>
         <Typography>More</Typography>
         {
            account ?
               <Box href='/cart_details' component='a' style={{ color: "#FFFFFF", display: "flex", textDecoration: 'none' }}>
                  <Badge badgeContent={account.carts.length} color="info">
                     <ShoppingCartIcon style={{ fontSize: "28px" }} />
                  </Badge>
                  <Typography style={{ marginLeft: "4px", fontSize: "18px" }}>Cart</Typography>
               </Box> :
               <Box href='/login' component='a' style={{ color: "#FFFFFF", display: "flex", textDecoration: 'none' }}>
                  <Badge badgeContent={0} color="info">
                     <ShoppingCartIcon style={{ fontSize: "28px" }} />
                  </Badge>
                  <Typography style={{ marginLeft: "4px", fontSize: "18px" }}>Cart</Typography>
               </Box>
         }
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
         >
            {
               account ?
                  <>
                     <MenuItem onClick={handleClose}>My account</MenuItem>
                     <MenuItem onClick={() => { handleClose(); logOut() }}><LogoutIcon style={{ fontSize: "16px", marginRight: "5px" }} /> Logout</MenuItem>
                  </>
                  : <MenuItem onClick={handleClose}>My account</MenuItem>
            }
         </Menu>
      </Component>
   )
}

export default CustomButton;
