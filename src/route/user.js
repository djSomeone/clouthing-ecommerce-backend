const app = require("express");
const User = require('../model/user.model'); // Assuming you have a User model
const router=app.Router()
const userController=require("../controller/user.controller")


//make loging api for the user
router.post("/login", userController.login);

//make verify otp api for the user
router.post("/verifyOtp", userController.verifyOtp);

module.exports= router;
