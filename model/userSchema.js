const mongoose = require("mongoose");
const SchemaVar=mongoose.Schema;
const jwt = require("jsonwebtoken");
const secretKey=process.env.KEY;

const userData=new SchemaVar({
      fName:{
         type:String,
         required:true,
         trim:true
      },
      lName:{
         type:String,
         required:true,
         trim:true
      },
      phone:{
         type:String,
         required:true,
         unique:true
      },
      email:{
         type:String,
         required:true,
         unique:true
      },
      password:{
         type:String,
         required:true
      },
      tokens:[
         {
            token:{
               type:String,
               required:true
            }
         }
      ],
      carts:Array
});


// // generting token
userData.methods.generatAuthtoken=async function(){
       try {
          let token=jwt.sign({_id:this._id},secretKey,{
              expiresIn:"7d"
          });
          this.tokens=this.tokens.concat({token:token});
          await this.save();
          return token;
       } catch (error) {
           console.log(error)
       }
}

// addto cart data
userData.methods.addCartData=async function(cart){
      try {
         this.carts=this.carts.concat(cart);
         await this.save();
         return this.carts;
      } catch (error) {
          console.log(error)
      }
}

module.exports=mongoose.model("user",userData);
