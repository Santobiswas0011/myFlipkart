import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Navbar from './Components/header/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, styled, Typography } from '@mui/material';

// import components
import Register from './Components/sigin/Register';
import Login from './Components/sigin/Login';
import Home from './Components/home/Home';
import Footer from './Components/footer/Footer';
import ProductDetails from './Components/productDetails/ProductDetails';
import CartItem from './Components/cart/CartItem';
import Protected from './Components/routes/Protected';

// import { LoginContext } from './Components/context/ContextProvider';


const Progress = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

const App = () => {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 100);
  }, [])
  return (
    <Box>
      <BrowserRouter>
        {
          data ?
            <>
              <Navbar />
              <Box style={{ marginTop: 63 }}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/productDetails/:id' element={<ProductDetails />} />
                  <Route path='/cart_details' element={<CartItem />} />
                </Routes>
              </Box>
              <Footer />
            </> :
            <Progress>
              <CircularProgress />&nbsp;&nbsp;
              <Typography variant='h4'>Loading.......</Typography>
            </Progress>
        }
      </BrowserRouter>
    </Box>
  )
}

export default App;
