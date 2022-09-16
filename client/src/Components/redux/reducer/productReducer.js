import * as actionType from '../constant/productConstant';


export const getProductsReducer=(state={products:[]},action)=>{
      switch (action.type) {
         case actionType.GET_PRODUCTS_SUCCESS:
            return{
               products:action.payload
            }
            case actionType.GET_PRODUCTS_FAILD:
               return{
                  error:action.payload
               }
         default:
            return state;
      }
}


export const getCartReducer=(state={cartProduct:[]},action)=>{
       switch (action.type) {
         case actionType.GET_CART_SUCCESS:
             return{
              cartProduct:action.payload
             }
             case actionType.GET_CART_FAILD:
                return{
                  error:action.payload
                }
         default:
            return state;
       }
};
