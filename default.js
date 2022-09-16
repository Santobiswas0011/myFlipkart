
const ProductModel=require('./model/productSchema');
const products=require('./constants/products');


const DefaultProducts=async()=>{
     try {
       await ProductModel.insertMany(products);
       console.log("Data insert successfully");
     } catch (error) {
        console.log(error.message);
     }
}

module.exports=DefaultProducts;
