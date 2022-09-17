const express=require("express");
const product_router=express.Router();
const productContImport=require('../Controllers/productController');
const isAuth=require('../middleware/auth');

product_router.get('/products',productContImport.getProductsCont);

product_router.get('/productDetails/:id',productContImport.productDetailsCont);

product_router.post('/cart/:id',isAuth,productContImport.cartController);

product_router.get('/cart_details',productContImport.cart_details_cont);

product_router.get('/removeCart/:id',isAuth,productContImport.removeCartCont);


module.exports=product_router;
