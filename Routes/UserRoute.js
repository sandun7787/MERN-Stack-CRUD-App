const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");

const { model } = require("mongoose");

router.get("/",userController.getAllUser);

module.exports = router;