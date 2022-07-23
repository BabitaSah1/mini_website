const user=require("../database/model/user")


module.exports={
    getSignup:(req,res,next)=>{
        res.render("register")//hbs
        // res.send("Welcom to req...")
    },
    postSignup:async(req,res,next)=>{
        var userData=req.body.data
        let email=req.body.email
        try{
            if(email){
                let emaildata=await user.findOne({email})
                console.log({emaildata});
                if(emaildata){
                    res.send("<h1>already registered </h1>")
                }
                else{
                    if(userData){
                        let data=await user.create(req.body.data)
                        console.log(data);
                        if(data){
                            res.status(200).send("<h1> successfully submitted </h1>")
                        }
                        else{
                            res.status(404).send("<h1> something went wrong </h1>")
                        }
                    }
                   else{
                    res.status(404).send("<h1>something went wrong</h1>")
                   }
                    
                }
            }
       
        }
        catch(err){
            console.log(err);
        }
      
        // res.send("Welocme to signup post")
        // res.send()
        // console.log(req.body.data);
    }
}