const user=require('../models/users');
const product=require('../models/product');

let getUserData=async(req,res)=>{
    let uData=await user.findOne({
        username:req.session.passport.user
    }).populate('cart');
    res.status(200).json({uData});
}


module.exports={
    getUserData
}