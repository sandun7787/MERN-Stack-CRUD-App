const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UserController");

router.get("/", userController.getAllUser); // GET /users
router.post("/", userController.addUser);  // POST /users
router.get("/:id",userController.getById)
router.get("/:id",userController.updateUser)
module.exports = router;
