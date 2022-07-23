const express=require("express")
const singupRout=express.Router()
const singupControler=require("../controler/signupControler")
const validation=require("../middleware/validation")

singupRout.get("/signup",singupControler.getSignup)
singupRout.post("/signup",validation.signup,singupControler.postSignup)

// console.log(singControler.postSignup);
// console.log(singControler);


module.exports=singupRout