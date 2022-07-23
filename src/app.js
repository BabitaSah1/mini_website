const path=require("path")
const express=require("express")
const {connect,disconnect}=require("./database/databaseConfig")
connect()

const app=express()
app.set("view engine","hbs")

let tempelate_path=path.join(__dirname,"../public/template")
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))
app.set("views",tempelate_path)
app.use(express.urlencoded({extended:false}))

app.use(express.json())
app.use("/",require("./router/homeRouter"))
app.use("/",require("./router/loginRouter"))
app.use("/",require("./router/signupRouter"))



// app.get("",(req,res)=>{

// })

.listen(27012,()=>{
    console.log("listen at 27012 port");
})