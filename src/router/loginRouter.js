const express=require("express")
const loginRout=express.Router()
const loginControler=require("../controler/loginControler")
const validation=require("../middleware/validation")


loginRout.get("/login",loginControler.getLogin)
loginRout.post("/login",validation.login,loginControler.postLogin)

module.exports=loginRout