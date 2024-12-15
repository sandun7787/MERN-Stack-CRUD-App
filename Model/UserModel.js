const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  userShema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
});

module.exports = mongoose.model("UserModel" , userShema);