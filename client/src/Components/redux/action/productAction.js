import axios from 'axios';
import * as actionType from '../constant/productConstant';

const jwt_token = sessionStorage.getItem('accessToken');
// console.log("jwt_token_santo",jwt_token)

const URL = "http://localhost:8002";

export const getProductData = () => async (dispatch) => {
   try {
      const { data } = await axios.get(`${URL}/products`, {
         headers: {
            'authorization': `${jwt_token}`
         },
      });
      dispatch({ type: actionType.GET_PRODUCTS_SUCCESS, payload: data })
   } catch (error) {
      dispatch({ type: actionType.GET_PRODUCTS_FAILD, payload: error.message })
   }
}



export const cartDetalis = () => async (dispatch) => {
   try {
      const { data } = await axios.get(`${URL}/cart_details`, {
         headers: {
            'authorization': `${jwt_token}`
         },
      });
      dispatch({ type: actionType.GET_CART_SUCCESS, payload: data })
   } catch (error) {
      dispatch({ type: actionType.GET_CART_FAILD, payload: error.message })
   }
}
