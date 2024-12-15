const mongoose = requier ("mongoose");

const Schema =mongoose.Schema;

const userSchema =new Schema ({
    name:{
        type:String,
        required:true,
    },

    gmail:{
        type:String,
        required:true,

    },

    age :{
        type:Number,
        required:true,
       },

    address:{
        type:String,
        required:true,
    }

});

module.export =mongoose.mode;(
    "Usermodel",
    userSchema
)