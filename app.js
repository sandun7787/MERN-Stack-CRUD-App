const mongoose = require ("mongoose");
const express = require("express");
require('dotenv').config();

const app = express();


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

})

.then(() =>{
    console.log("Connect to Mongo DB successfully");

    app.listen(300,()=>{
        console.log("Server is runnig on port 3000");

    
    });
})

.catch((err)=>{
    console.error("Faild to connect to mongo db",err);

})