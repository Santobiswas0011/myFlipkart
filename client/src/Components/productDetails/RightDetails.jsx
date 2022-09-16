import React from 'react';
import { Box, Typography, Table, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { LocalOffer as Badge } from '@mui/icons-material';

const Component = styled(Box)`
    margin:15px 0 0 5px;
`
const Rating = styled(Typography)`
    background:green;
    padding:1px 5px;
    color:#FFFFFF;
    border-radius:4px;
    font-size:14px;
`
const RText = styled(Typography)`
   color:#878787;
   font-weight: 600;
   font-size:14px;
`
const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p {
        font-size: 16px;
        margin-top:8px;
    }
`

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size: 18px;
`
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`

const RightDetails = ({ data }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

  return (
    <Component>
      <Box>
        <Typography variant='h6'>{data.title.longTitle}</Typography>
        <Box style={{ display: "flex", marginTop: '8px' }}>
          <Rating>4.3 ★</Rating>&nbsp;&nbsp;&nbsp;
          <RText>3,594 Ratings & 385 Reviews</RText>&nbsp;&nbsp;&nbsp;
          <img style={{ width: 80 }} src={fassured} alt="fassured" />
        </Box>
        <Typography style={{ marginTop: "8px" }}>
          <span style={{ fontSize: 28 }}>₹{data.price.cost}</span>&nbsp;&nbsp;&nbsp;
          <span style={{ color: '#878787' }}><strike>₹{data.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
          <span style={{ color: '#388E3C' }}>{data.price.discount} off</span>
        </Typography>
        <Typography style={{ fontWeight: '600' }}>Available offers</Typography>
        <SmallText>
          <Typography><StyledBadge /><span style={{ fontWeight: '600' }}>Bank Offer</span> 5% Cashback on Flipkart Axis Bank Card <span style={{ color: 'blue' }}>T&C</span></Typography>
          <Typography><StyledBadge /><span style={{ fontWeight: '600' }}>Bank Offer</span> Extra 2% off on UPI transactions <span style={{ color: 'blue' }}>T&C</span></Typography>
          <Typography><StyledBadge />Get Google Nest hub at just ₹1299 <span style={{ color: 'blue' }}>T&C</span></Typography>
          <Typography><StyledBadge />Get Google Nest mini at ₹999 <span style={{ color: 'blue' }}>T&C</span></Typography>
        </SmallText>
        <Table>
          <TableBody>
            <ColumnText>
              <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
              <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
              <TableCell>No Warranty</TableCell>
            </ColumnText>
            <ColumnText>
              <TableCell style={{ color: '#878787' }}>Seller</TableCell>
              <TableCell>
                <span style={{ color: '#2874f0' }}>SuperComNet</span>
                <Typography>GST invoice available</Typography>
                <Typography>View more sellers starting from ₹329</Typography>
              </TableCell>
            </ColumnText>
            <TableRow>
              <TableCell colSpan={2}>
                <img src={adURL} style={{ width: 390 }} />
              </TableCell>
            </TableRow>
            <ColumnText>
              <TableCell style={{ color: '#878787'}}>Description</TableCell>
              <TableCell style={{textAlign:'justify'}}>{data.description}</TableCell>
            </ColumnText>
          </TableBody>
        </Table>
      </Box>
    </Component>
  )
}

export default RightDetails;
