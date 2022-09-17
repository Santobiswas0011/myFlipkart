const jwt = require("jsonwebtoken");
const UserModel = require('../model/userSchema');
const secretKey = process.env.KEY;


module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {

      return res.status(401).json({ message: "Token is missing" })
    } else {
      const verifyToken = jwt.verify(token, secretKey);

      const rootUser = await UserModel.findOne({ _id: verifyToken._id, "tokens.token": token });
      if (!rootUser) {
        throw new Error("User not found")
      }

      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;

      next();

    }
  } catch (error) {
    res.status(401).send("Unauthorized:No token provided");
    console.log(error);
  }
}

