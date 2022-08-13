const errorHandlerMiddleware=async(err,req,res,next)=>{
    return res.status(500).json({msg:"Something wen wrong,please try again"})
}
module.exports=errorHandlerMiddleware;