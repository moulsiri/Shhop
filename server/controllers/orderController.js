import Order from '../models/orderModel.js';
import Product from '../models/products.js';


//Create new Order
export const newOrder=async(req,res,next)=>{
  try{
      let {shippingInfo,orderItems,paymentInfo}=req.body;
      paymentInfo={...paymentInfo,paidAt:new Date()};
  // console.log(req.body)
const order=await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    user:req.user._id,
    orderStatus:"Placed",
    deliveredAt:new Date(
      Date.now() + 10*24*60*60*1000
  ),
});

res.status(201).json({
    success:true,
    order
})
  }catch(err){
    res.status(400).json({
      message:err.message
    })
  }
  
};

//get all orders created by a perticular user
export const getUserOrders=async(req,res,next)=>{
  try{
    const order= await Order.find({user:req.user._id});
    res.status(200).json({data:order});

  }catch(err){
    res.status(400).json({message:err.message})
  }
}

//get all orders for admin
export const getOrdersForAdmin=async(req,res,next)=>{
  try{
    let data=await Order.find();
    res.status(200).json({data});

  }catch(err){
    res.status(400).json({message:err.message})
  }
}