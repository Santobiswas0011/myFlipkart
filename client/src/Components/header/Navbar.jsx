import React ,{useState,useContext} from 'react';
import style from './header.module.css';
import { AppBar, Box, Toolbar, styled, Typography, List, ListItem } from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Leftbutton from './Leftbutton';

import { getValidUser } from '../../service/api';
import { LoginContext } from '../context/ContextProvider';
import { useEffect } from 'react';

const Component = styled(AppBar)`
   background:#444;
   height:63px;
`

const Wrapper = styled(Link)(({ theme }) => ({
   lineHeight: '0',
   marginLeft: '9%',
   color: '#FFFFFF',
   textDecoration: 'none',
   [theme.breakpoints.down("sm")]: {
      marginLeft: '9%',
      marginTop: '7px'
   }
}));

const Subtitle = styled(Typography)`
    font-style: italic;
    font-size:13px;
`
const Menu = styled(Box)(({ theme }) => ({
   display: "none",
   marginTop: "5px",
   marginLeft: "5px",
   [theme.breakpoints.down("md")]: {
      display: "block"
   }
}));

const Navbar = () => {
   const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
   const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

   const {account,setAccount}=useContext(LoginContext);

   const [open, setOpen] = useState(false);

   const handelOpen = () => {
      setOpen(true)
   }
   const handelClose = () => {
      setOpen(false)
   }

   const validGetUser=async()=>{
       const res=await getValidUser();
       if(res.status === 401){
           console.log(res.data.message)
       }else{
       setAccount(res.data);
       }
   }

   useEffect(()=>{
      validGetUser();
   },[])
 
   return (
      <Component>
         <Toolbar>
            <Drawer open={open} onClick={handelClose}>
               <Box style={{ width: 250 }}>
                   <Leftbutton />
               </Box>
            </Drawer>

            <Menu onClick={handelOpen}>
               <MenuIcon />
            </Menu>
            <Wrapper to='/'>
               <img style={{ width: 85 }} src={logoURL} alt="logoURL" />
               <Box style={{ marginLeft: "10px" }}>
                  <Subtitle component="span">Explore
                     <Typography style={{ marginLeft: "5px", fontSize: "14px", color: "yellow" }} component="span">Plus</Typography>
                  </Subtitle>
                  <img style={{ height: "14px", marginLeft: "5px" }} src={subURL} alt="subURL" />
               </Box>
            </Wrapper>
            <Search />
            <Box>
               <CustomButton />
            </Box>
         </Toolbar>
      </Component>
   )
}

export default Navbar;
