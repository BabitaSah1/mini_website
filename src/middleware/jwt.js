const jwt=require("jsonwebtoken")
module.exports={
    getToken:async(data)=>{
        console.log(data);
        return await jwt.sign(data,"SecreteKey")
    },
    accessToken:async(req,res,next)=>{
        // next()
        try{
            let token=req.headers.cookie
            // console.log(token,">......................");
            if(token){//token jb milta h tb hum login krte h
                let Token=token.split("=")[1]
                let verify=await jwt.verify(Token,"SecreteKey")
                // console.log(verify,"======");
                if(verify){
                    next()
                }
                else{
                    res.send("something went wrong")
                }
            }
            else{
                res.send("login first") 
            }
        }
        catch(err){
            res.send("something went wrong")
        }
      
    }
}