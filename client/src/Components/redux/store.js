import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { getCartReducer, getProductsReducer } from './reducer/productReducer';

const reducer=combineReducers({
     getProducts:getProductsReducer,
     cartProduct:getCartReducer
});

const middleware=[thunk]

const store=createStore(
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
