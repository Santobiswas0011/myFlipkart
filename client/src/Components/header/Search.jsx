 import React, { useState } from 'react';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { getProductData } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Component = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  height: '38px',
  borderRadius: '4px',
  marginLeft: '7px',
  width: '38%',
  display: 'flex',
  [theme.breakpoints.down("lg")]: {
    width: '33%',
  },
  [theme.breakpoints.down("md")]: {
    width: '45%',
    marginLeft: '40px',
  },
  [theme.breakpoints.down("sm")]: {
    width: '55%',
    marginLeft: '13px',
    marginTop: "7px"
  }
}));

const Input = styled(InputBase)`
    font-size:20px;
    padding:0px 5px 0 8px;
    width:100%
`
const Icon = styled(SearchIcon)`
    color:#000;
    font-size:30px;
    padding:4px 3px 0 0 ;
`

const ListWrapper = styled(List)(({ theme }) => ({
  position: 'absolute',
  color: '#000',
  background: '#FFFFFF',
  top: '51px',
  left: '220px',
  borderRadius: '4px',
  width: '600px',
  textDecoration: 'none',
  [theme.breakpoints.down("md")]: {
    width: '500px',
    left: '170px',
  },
  [theme.breakpoints.down("sm")]: {
    width: '400px',
    left: '120px',
  },
}));

const Search = () => {

  const [text, setText] = useState("");
/*   const [open,setOpen]=useState(true);*/

  const products = useSelector((state) => state.getProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const onChangeData = (e) => {
    setText(e.target.value);
  };
  const handleClick=()=>{
      setText("");
  }
  return (
    <>
      <Component>
        <Input value={text} onChange={onChangeData} placeholder='Search your product' />
        <Icon />
      </Component>
      {
        text &&
        <ListWrapper>
          {
            products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
              <Link onClick={handleClick} style={{textDecoration: 'none'}} to={`/productDetails/${product.id}`}>
                <ListItem style={{color: 'black',fontSize:'16px'}}>
                  {product.title.longTitle}
                </ListItem>
              </Link>
            )) 
          }
        </ListWrapper>
      }
    </>
  )
}

export default Search;



/* 
import React, { useState } from 'react';
import { InputBase, List, ListItem, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { getProductData } from '../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Component = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  height: '38px',
  borderRadius: '4px',
  marginLeft: '7px',
  width: '38%',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down("lg")]: {
    width: '33%',
  },
  [theme.breakpoints.down("md")]: {
    width: '45%',
    marginLeft: '40px',
  },
  [theme.breakpoints.down("sm")]: {
    width: '55%',
    marginLeft: '13px',
    marginTop: "7px"
  }
}));

const Input = styled(InputBase)`
    font-size:20px;
    padding:0px 5px 0 8px;
    width:100%;
`
const Icon = styled(SearchIcon)`
    color:#000;
    font-size:30px;
    padding:4px 3px 0 0 ;
`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
  width:88%;
`;

const Search = () => {

  const [text, setText] = useState("");

  const products = useSelector((state) => state.getProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const onChangeData = (e) => {
    setText(e.target.value);
  }
  return (
    <Component>
      <Box style={{ display: "flex" }}>
        <Input onChange={onChangeData} placeholder='Search your product' />
        <Icon />
      </Box>
      {
        text &&
        <ListWrapper>
          {
            products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
              <Link to={`/productDetails/${product.id}`}>
                <ListItem>
                  {product.title.longTitle}
                </ListItem>
              </Link>
            ))
          }
        </ListWrapper>
      }
    </Component>
  )
}

export default Search;
 */