
const { find, findOne } = require('../model/productSchema');
const ProductModel=require('../model/productSchema');
const UserModel=require('../model/userSchema');

exports.getProductsCont=async(req,res)=>{
      try {
        const productData=await ProductModel.find({});
        res.status(201).json(productData);
      } catch (error) {
         res.status(401).json(error.message)
      }
};

exports.productDetailsCont=async(req,res)=>{
      const {id}=req.params;
      try {
         const product=await ProductModel.findOne({id:id});
         return res.status(201).json(product);
      } catch (error) {
          res.status(401).json(error.message);
      }
};

exports.cartController=async(req,res)=>{
      try {
         const {id}=req.params;
         const cart=await ProductModel.findOne({id:id});
   
         const userContact=await UserModel.findOne({_id:req.userId});

          if(userContact){
              const cartData=await userContact.addCartData(cart);
              await userContact.save();
              res.status(201).json(userContact)
          }
      } catch (error) {
           console.log(error)
      }
};

// cart_details_cont
exports.cart_details_cont=async(req,res)=>{
       try {
         const cartUser=await UserModel.findOne({_id:req.userId});
         res.status(201).json(cartUser);
       } catch (error) {
            return res.status(401).json(error.message)
       }
}


// removeCartCont
exports.removeCartCont=async(req,res)=>{
        const {id}=req.params;
        try {
            req.rootUser.carts= req.rootUser.carts.filter((data)=>{
                  return data._id != id;
            });
            req.rootUser.save();
            res.status(201).json(req.rootUser);
        } catch (error) {
            res.status(400).json(error.message)
        }
}

