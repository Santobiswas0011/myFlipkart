import React, { useContext } from 'react';
import { Box, Typography, Avatar, styled, Divider } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

import { LoginContext } from '../context/ContextProvider';


const Header = styled(Box)`
    height:80px;
    background:#333;
    display:flex;
    align-items: center;
    padding-left:10px;
    & > p{
      color:#FFFFFF;
      padding-left:7px;
      font-size:19px;
      font-style: italic;
      margin-bottom: 13px;
      cursor: pointer;
    }
`
const Wrapper = styled(Box)`
     padding:25px 15px 0 35px;
     & > a, & > p{
      text-decoration:none;
      font-size:19px;
      cursor: pointer;
      color:#000;
     }
`
const LoginStyle = styled(Typography)`
    display:flex;
    color:black;
    cursor:pointer;
    text-decoration:none;
    font-size:18px;
`

const Leftbutton = () => {
  const { account, setAccount } = useContext(LoginContext);

  const logOut=()=>{
    sessionStorage.removeItem('accessToken');
    setAccount("");
  }

  // let userName={
  //   account ?
  // }
  return (
    <>
      <Header>
        <Avatar style={{ background: "gray" }}>
          {
            account ?
              <Box>
                {account.fName[0].toUpperCase()}
              </Box> : ''
          }
        </Avatar>
        <Typography>Helloo, {account ? <>{account.fName.toUpperCase()}</> : ""}</Typography>
      </Header>
      <Wrapper>
        <Typography to="/" component={Link}>Home</Typography><br /><br />
        <Typography to="/" component={Link}>Shop By category</Typography><br /><br />
        <Divider />
        <Typography to="/" component={Link}>today's Deal</Typography><br /><br />
       {
        account ?
        <> <Typography to="/cart_details" component={Link}>My cart</Typography><br /><br /></> :
        <><Typography to="/login" component={Link}>My cart</Typography><br /><br /></>
       }
        <Divider />
        <Typography to="/" component={Link}>Settings</Typography><br /><br />
        {
          account ? <LoginStyle onClick={logOut} to="/" component={Link}><br /><br />
            <Box><LogoutIcon /> </Box>
            <Box>&nbsp;Logout </Box>
          </LoginStyle> : 
            <LoginStyle to="/login" component={Link}><br /><br />
              <Box><LoginIcon /> </Box>
              <Box>&nbsp;Login </Box>
            </LoginStyle>
        }
      </Wrapper>
    </>
  )
}

export default Leftbutton;
