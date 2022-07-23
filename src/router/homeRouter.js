const express=require("express")
const homeRout=express.Router()
const homeControler=require("../controler/homeControler")
const jwt=require("../middleware/jwt")

homeRout.get("/home",jwt.accessToken,homeControler.getHome)
// homeRout.post("/home",jwt.accessToken,homeControler.postHome)

module.exports=homeRout