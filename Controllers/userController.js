
const { validationResult } = require('express-validator');
const UserModel = require('../model/userSchema');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: 'smtp',
   port: 3002,
   secure: false,
   requireTLS: true,
   service: 'gmail',
   auth: {
      user: 'biswassanto0011@gmail.com',
      pass: 'muvavoatjqkovrbe'
   }
});

// register controller

exports.registerCont = (req, res) => {
   const { fName, lName, phone, email, password } = req.body;

   let error = validationResult(req);
   if (!error.isEmpty()) {
      const errorResponse = validationResult(req).array();
      let message = errorResponse[0].msg;
      return res.status(406).json({
         message: `${message}`
      });
   } else {
      UserModel.findOne({ email: email }).then((userData) => {
         if (userData) {
            return res.status(401).json({ message: "Email alredy exist" })
         } else {
            bcrypt.hash(password, 10).then((hashPassword) => {
               const userData = new UserModel({
                  fName: fName,
                  lName: lName,
                  phone: phone,
                  email: email,
                  password: hashPassword
               });
               userData.save().then(() => {
                  let mailOptions = {
                     from: 'biswassanto0011@gmail.com',
                     to: email,
                     subject: 'Sending Email using Node.js to confirm registration',
                     text: 'You have successfully registered'
                  };
                  transporter.sendMail(mailOptions, (error, info) => {
                     if (error) {
                        console.log("Error to send mail", error);
                     } else {
                        console.log("Email sent" + info.response);
                     }
                  });
                  return res.status(201).json({
                     message: 'Registartion successgully'
                  });
               }).catch((err) => {
                  res.status(401).json(err)
               })
            }).catch((err) => {
               res.status(401).json(err)
            })
         }
      })
   }

}

// loginController
exports.loginController = async (req, res) => {
   const { email, password } = req.body;
   try {
      const userLogin = await UserModel.findOne({ email: email });
      if (!userLogin) {
         res.status(406).json({
            success: false,
            message: "Invalid Email"
         });
         // console.log("Invalid Email")
      } else {
         const isMatch = await bcrypt.compare(password, userLogin.password);
         if (!isMatch) {
            res.status(400).json({ 
               success: false,
               message: 'Wrong password'
            });
            // console.log("Wrong password")
         } else {
            const token = await userLogin.generatAuthtoken();  
             res.status(201).json({token:token,userLogin});
         }
      }
   } catch (error) {
      res.status(400).json(error)
   }
}


// valid user

exports.validUserController=async(req,res)=>{
       try {
          const validUserOne=await UserModel.findOne({_id:req.userId});
          res.status(201).json(validUserOne);
       } catch (error) {
           req.status(401).json(error)
       }
}
