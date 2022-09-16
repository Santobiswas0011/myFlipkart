require('dotenv').config();
const express = require("express");
const app = express();
const PORT =process.env.PORT || 8002;
const cookie=require('cookie-parser');

const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const cors = require("cors");


const DefaultProduct = require('./default');

// import router
const product_router = require('./Router/productRouter');
const user_router = require('./Router/userRouter');

app.use(cookie());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use(product_router);
app.use(user_router);

// for deployment
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('Database is connected');
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});

DefaultProduct();
