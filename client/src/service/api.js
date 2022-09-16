import axios from "axios";
// import { getAccessToken } from "../Components/sigin/commonUtlis";
const jwt_token = sessionStorage.getItem('accessToken');

const URL = "";

export const postRegisterData = async (data) => {
   try {
      return await axios.post(`${URL}/register`, data);
   } catch (error) {
      return error.response;
   }
};


export const postLoginData = async (data) => {
   try {
      return await axios.post(`${URL}/login`, data);
   } catch (error) {
      return error.response;
   }
};


export const getValidUser = async () => {
   try {
      return await axios.get(`${URL}/validUser`, {
         headers: {
            'authorization': `${jwt_token}`
         },
      });
   } catch (error) {
      return error.response;
   }
};

export const getProductOne = async (id) => {
   try {
      return await axios.get(`${URL}/productDetails/${id}`)
   } catch (error) {
      return error.response;
   }
}


const data = {

}

export const cartProducts = async (id) => {
   try {
      return await axios.post(`${URL}/cart/${id}`, data, {
         headers: {
            'authorization': `${jwt_token}`
         },
      })
   } catch (error) {
      return error.response;
   }
}


export const removeCartData = async (id) => {
   try {
      return await axios.get(`${URL}/removeCart/${id}`, {
         headers: {
            'authorization': `${jwt_token}`
         },
      })
   } catch (error) {
        return error.response;
   }
}
