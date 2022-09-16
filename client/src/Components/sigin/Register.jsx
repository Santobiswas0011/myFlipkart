import React from 'react';
import style from './sigin.module.css';
import { Box, styled, Typography, Button } from '@mui/material';
import { TextField, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { postRegisterData } from '../../service/api';

const Component = styled(Grid)(({ theme }) => ({
   display: 'flex',
   width: '600px',
   height: '450px',
   margin: '95px auto',
   boxShadow: '0px 1px 7px 1px #000',
   [theme.breakpoints.down("md")]: {
      width: '530px',
   },
   [theme.breakpoints.down("sm")]: {
      width: '430px',
   }
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
   background: '#555 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 75% no-repeat',
   color: '#FFFFFF',
   padding: '50px 40px',
   [theme.breakpoints.down("md")]: {
      padding: '50px 30px',
   },
   [theme.breakpoints.down("sm")]: {
      padding: '50px 10px',
   }
}));


const Text = styled(Typography)`
     margin-top:15px;
`
const RightComponent = styled(Grid)(({ theme }) => ({
   padding: '30px 30px',
   background: "#FFFFFF",
   [theme.breakpoints.down('sm')]: {
      padding: '30px 13px',
   }
}));
const LinkStyle = styled(Link)(({ theme }) => ({
   textDecoration: 'none',
   marginLeft: '15px',
   fontWeight: 600,
   [theme.breakpoints.down("md")]: {
      fontSize: "14px"
   },
   [theme.breakpoints.down("sm")]: {
      marginLeft: '8px',
      fontSize: "14px"
   }
}));

const ErrorText=styled(Typography)`
     padding:15px 0 0 15px;
     color:red;
     margin-bottom:-15px;
     font-size:13px;
`

const Register = () => {

   const [data, setData] = useState({ fName: '', lName: "", phone: "", email: "", password: "" });
   const { fName, lName, phone, email, password } = data;

   const [error,setError]=useState("");
   const [Eerror,setEError]=useState("");
   
   const navigate=useNavigate();

   const handelOnchange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      setData({ ...data, [fieldName]: fieldValue })
   }
   const handelClick = async (e) => {
      e.preventDefault();
      const res = await postRegisterData(data);
      setData({ fName: '', lName: "", phone: "", email: "", password: "" });
      if (res.status === 406) {
         setError(res.data.message);
         setTimeout(() => {
            setError("");
         },4000);
      } else if (res.status === 401) {
         setEError(res.data.message);
         setTimeout(() => {
            setEError("");
         },4000);
      } else if (res.status === 201) {
         toast.success(res.data.message, {
            position: "top-center"
         });
          setTimeout(() => {
            navigate('/login',{replace:true});
          }, 3000);
      } else {
         console.log("");
      }

   }

   return (
      <Component container >
         <LeftComponent item lg={5} md={5} sm={5} xs={5}>
            <Typography variant='h5'>
               Looks like you're new here!
            </Typography>
            <Text>
               Sing up with your mobile number to get started
            </Text>
         </LeftComponent>
         <RightComponent item lg={7} md={7} sm={7} xs={7}>
            <TextField onChange={handelOnchange} value={fName} name="fName" className={style.fieldStyle} id="standard-basic" label="Enter First name" variant="standard" />
            <TextField onChange={handelOnchange} value={lName} name="lName" className={style.fieldStyle} id="standard-basic" label="Enter Last name" variant="standard" />
            <TextField onChange={handelOnchange} value={phone} name="phone" className={style.fieldStyle} id="standard-basic" label="Enter Phone number" variant="standard" />
            <TextField onChange={handelOnchange} value={email} name="email" className={style.fieldStyle} id="standard-basic" label="Enter Email" variant="standard" />
            <TextField onChange={handelOnchange} value={password} type="password" name="password" className={style.fieldStyle} id="standard-basic" label="Enter Password" variant="standard" />
            {
               error && 
               <ErrorText>{error}</ErrorText>
            }
            {
               Eerror && 
               <ErrorText>{Eerror}</ErrorText>
            }
            <Button onClick={handelClick} style={{ marginTop: "30px", marginBottom: "50px" }} className={style.loginBtn}>Continue</Button>
            <Box>
               <LinkStyle to='/login'>Already have an account? Sign_in</LinkStyle>
            </Box>
         </RightComponent>
         <ToastContainer />
      </Component>
   )
}


export default Register;
