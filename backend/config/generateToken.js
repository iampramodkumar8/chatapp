const jwt=require("jsonwebtoken");
const m="pra";
const generateToken=(id)=>{
    return jwt.sign({id},m,{
        expiresIn:"30d",
    });
};
module.exports=generateToken;