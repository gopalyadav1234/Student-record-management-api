const jwt=require("jsonwebtoken");

const authMiddleware=(req,res,next)=>{
  const token=req.headers.authorization;
  if(!token){
    return res.json({
      message:"Please login"
    });
  }
  try{
    const user=jwt.verify(
      token,
      "mysecretkey"
    );
    req.user=user;
    next();
  }catch(error){
    res.json({
      message:"Invalid token"
    })
  }
};
module.exports=authMiddleware;