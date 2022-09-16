
import { Typography, Box, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Component = styled(Box)`
    width: 80%;
    height: 65vh;
    background: #fff;
    margin: 60px auto;
`;

const Container = styled(Box)`
    text-align: center;
    padding-top: 50px;
    & > p{
      font-size:22px;
    },
    & > a{
      text-decoration: none;
      color:#2874f0;
      font-weight:600;
    }
`;

const Image = styled('img')(({theme})=>({ 
    width: '30%',
    [theme.breakpoints.down("md")]:{
        width: '45%',
    }
 }));



const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return (
        <Component>
            <Container>
                <Image src={imgurl} />
                <Typography>Your cart is empty!</Typography>
                <Typography to="/" component={Link}>Add items to it now.</Typography>
            </Container>
        </Component>
    )
}

export default EmptyCart;
