const mongoose = require("mongoose");
const SchemaVar=mongoose.Schema;

const productData=new SchemaVar({
      id:{
         type:String,
         unique:true
      },
      url:String,
      detailUrl:String,
      title:Object,
      price:Object,
      quantity:Number,
      description:String,
      discount:String,
      tagline:String
});

module.exports=mongoose.model("product",productData);
