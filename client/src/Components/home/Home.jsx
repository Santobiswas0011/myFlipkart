import React from 'react';
import style from './home.module.css';
import { Box, Typography, Grid } from '@mui/material';

// import components
import HomeNav from './HomeNav';
import Banner from './Banner';
import Slide from './Slide';
import AddSlice from './AddSlice';
import MidSlide from './MidSlide';

const Home = () => {
  return (
    <Box>
      <HomeNav />
      <Banner />
      <Box>
        <Grid lg={12} container>
          <Grid item lg={9.7} md={10} sm={12} xs={12}>
            <Slide title={"Deal of the day"} timer={true} />
          </Grid>
          <Grid item lg={2.3} md={2} sm={0} xs={0}>
            <AddSlice />
          </Grid>
        </Grid>
        <Box style={{ margin: "0 10px 0 10px" }}>
          <MidSlide />
        </Box>
        <Slide title={"Best of Electronics"} timer={false} />
        <Slide title={"Fashion Top Deals"} timer={false} />
        <Slide title={"Books, Toys & More"} timer={false} />
      </Box>
    </Box>
  )
}

export default Home;
