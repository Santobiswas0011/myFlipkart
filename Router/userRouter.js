const express=require("express");
const user_router=express.Router();
const userContImport=require('../Controllers/userController');
const{check,body}=require("express-validator");
// const authenicate =require('../middleware/auth');
const isAuth=require('../middleware/auth');

user_router.post('/register',[
     check('email').isEmail().withMessage("Enter valid email"),
     body('password',"Enter valid password").matches('^(?=.*[a-z0-9])(?=.*[A-Z])(?=.*[!@#%&*]).{4,12}$')
],userContImport.registerCont);

user_router.post('/login',userContImport.loginController);

user_router.get('/validUser',isAuth,userContImport.validUserController);


module.exports=user_router;
