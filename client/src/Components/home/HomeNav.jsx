import React from 'react';
import style from './home.module.css';
import { navData } from '../constant/data';
import { Box, Typography, styled } from '@mui/material';


const Component = styled(Box)`
     display:flex;
     line-height: 0;
     background:#FFFFFF;
     justify-content: space-around;
     padding:10px 30px 15px 30px;
     box-shadow: 1px 1px 3px .5px #555;
     overflow:hidden
`
const Image = styled('img')({
  width: '70px'
});
const Text = styled(Typography)`
    text-align: center;
    font-weight: 600;
    font-size:14px;
`
const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: "0 10px 0 10px"
  }
}));


const HomeNav = () => {
  return (
    <Component className={style.navData}>
      {
        navData && navData.map((data, i) => {
          const { url, text } = data;
          return (
            <Wrapper key={i}>
              <Image src={url} alt="img" />
              <Text>{text}</Text>
            </Wrapper>
          )
        })
      }
    </Component>
  )
}

export default HomeNav;
