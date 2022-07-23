const user=require("../database/model/user")
const jwt=require("../middleware/jwt")
const bcrypt=require("bcrypt")
module.exports={
    getLogin:(req,res,next)=>{
        res.render("login")//hbs
        // res.send("Welcome")

    },
    postLogin:async(req,res,next)=>{
        let email=req.body.email
        let password=req.body.password
        console.log({email,password});
        try{
                let data=await user.findOne({email})
                if(data){
                    let password_check=await bcrypt.compare(password,data.password)

                    if(password_check){
                        console.log(typeof(data));
                        let token=await jwt.getToken({name:data.name,user:data.username,email:data.email})
                        res.cookie("token",token).status(200).redirect("/home")
                    }
                    else{
                        res.status(404).send("<h1> password is not matching </h1>")
                    }
                    // console.log(data);
                    // res.send("you are loggedin")
                }
                else{
                    res.send("<h1> you are not registered</h1>")
                }
        }
        catch(err){
            console.log(err);

        }
        
    }

}
