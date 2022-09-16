import React from 'react';
import style from './sigin.module.css';
import { Box, styled, Typography, Button } from '@mui/material';
import { TextField, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { postLoginData } from '../../service/api';
import { useContext } from 'react';
import { LoginContext } from '../context/ContextProvider';

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

const Message = styled(Typography)(({ theme }) => ({
   fontSize: '13px',
   margin: '13px 0',
   fontWeight: '600',
   color: 'green',
   fontStyle: 'italic',
   [theme.breakpoints.down("md")]: {
      fontSize: "13px",
   },
   [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      fontWeight: '100'
   }
}))
const LinkStyle = styled(Link)(({ theme }) => ({
   textDecoration: 'none',
   marginLeft: '15px',
   fontWeight: 600,
   [theme.breakpoints.down("md")]: {
      fontSize: "14px"
   },
   [theme.breakpoints.down("sm")]: {
      marginLeft: '8px',
      fontSize: "13px"
   }
}));

const ErrorText=styled(Typography)`
     padding:15px 0 0 15px;
     color:red;
     margin-top:-18px;
     margin-bottom:10px;
     font-size:13px;
`


const Login = () => {

   const {account,setAccount}=useContext(LoginContext);

   const [data, setData] = useState({ email: '', password: '' });
   const { email, password } = data;

   const [eError,setEerror]=useState("");
   const [pError,setPerror]=useState("");

   const navigate=useNavigate();

   const handleOnChange = (e) => {
      const fieldName = e.target.name;
      const fieldValue = e.target.value;
      setData({ ...data, [fieldName]: fieldValue });
   }
   const handleClick = async(e) => {
      e.preventDefault();
        const res =await postLoginData(data);
      setData({email: '', password: ''});
      if(res.status === 406){
         setEerror(res.data.message);
         setTimeout(()=>{
            setEerror("");
         },4000)
      }else if(res.status === 400){
         setPerror(res.data.message);
         setTimeout(()=>{
            setPerror("");
         },4000)
      }else if(res.status ===201){
          setAccount(res.data.userLogin);
          sessionStorage.setItem('accessToken',`Bearer ${res.data.token}`);
          toast.success('Login successfully', {
            position: "top-center"
         });
          setTimeout(() => {
            navigate('/',{replace:true});
          }, 3000);
         // console.log(res.data.token);
      }else{
         console.log("");
      }
   }
   return (
      <Component container >
         <LeftComponent item lg={5} md={5} sm={5} xs={5}>
            <Typography variant='h4'>Login</Typography>
            <Text>
               Get access to your Orders,Wishlist and Recommendations
            </Text>
         </LeftComponent>
         <RightComponent item lg={7} md={7} sm={7} xs={7}>
            <Box>
               <TextField onChange={handleOnChange} value={email} name="email" className={style.fieldStyle} id="standard-basic" label="Enter Username" variant="standard" />
               <TextField onChange={handleOnChange} value={password} type="password" name="password" className={style.fieldStyle} id="standard-basic" label="Enter Password" variant="standard" />
               <Message>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Message>
               {
                  eError && 
                  <ErrorText>{eError}</ErrorText>
               }
               {
                  pError && 
                  <ErrorText>{pError}</ErrorText>
               }
               <Button  onClick={handleClick} className={style.loginBtn}>Login</Button>
               <Typography style={{ textAlign: "center" }} variant='h6'>OR</Typography>
               <Button className={style.requestBtn}>Request OTP</Button>
               <Box>
                  <LinkStyle to='/register'>New to Flipkart? Create an account</LinkStyle>
               </Box>
            </Box>
         </RightComponent>
         <ToastContainer />
      </Component>
   )
}

export default Login;
