import {useEffect} from 'react'
import OrderPlace from './OrderPlace';
import ShipInfo from './ShipInfo';
import css from '../styles/Elements.module.scss';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios';
import {getOrderPlaceAsync,clearErrorAsync,clearStatusAsync} from '../../../asyncActions/paymentAction';
import { paymentStatusSuccess, paymentRequest,paymentFail} from '../../../features/OrderSLice';
import {clearCart} from '../../../features/cartSlice';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useAlert } from 'react-alert';

import Backdrop from '@mui/material/Backdrop';
import OrderSuccess from './OrderSuccess';
const PaymentForm = () => {
   const {paymentInfo,shippingInfo,orderPlaced,error}=useSelector((s)=>s.orderData);
   const cartData=useSelector((s)=>s.cartData);
   const dispatch=useDispatch();
   const navigate=useNavigate();
   const alert=useAlert();
  //  const {user}=useSelector((s)=>s.user);
  useEffect(() => {
    // console.log(cartData)
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
},[]);

useEffect(()=>{
   if(paymentInfo.status==="done"){
    dispatch(getOrderPlaceAsync(getOrderData()));
   }
   
   if(error){
    alert.show(error)
    dispatch(clearErrorAsync())
   }
},[paymentInfo,orderPlaced,error])

const getOrderData=()=>{
  let orderItems=cartData.cart.map((elm)=>{
    let tmp={
      name:elm.ProductData.name,
      price:elm.ProductData.price,
      quantity:elm.Qty,
      image:elm.ProductData.image,
      product:elm.ProductData._id

    }
    return tmp;
  })

  let orderData={
    shippingInfo,
    paymentInfo,
    orderItems
  }
  return orderData;
}
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
   document.body.appendChild(script);
 });
};
const getPayment=()=>{
  const  options ={
    key: "rzp_test_OI8ne56dSAy7VU",
    currency: "INR",
    amount: paymentInfo.totalPrice,
    name: "Random Name",
    description: "Test Wallet Transaction",
    image: "https://images.unsplash.com/photo-1599137937039-f48e7c6ac0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
    order_id:paymentInfo.id,
    handler:async function (response) {
      let headers = {
        "Content-Type": "application/json"
    }
    try{
      dispatch(paymentRequest());
      let pData=await  axios.post("/api/v1/payment/verify", response, { headers });
      if(pData.data.signatureIsValid){
       dispatch(paymentStatusSuccess());
     }else{
         alert("There is some problem in the payment.....");
         dispatch( paymentFail("Verification failed!"))
     }

    }catch(err){
      dispatch( paymentFail(err.message))
       
    }

    },
    prefill: {
      name: "Moulsiri Awasthi",
      email: "helloWorld@gmail.com",
      contact: "9999999999",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
const SuccessReset=()=>{
    dispatch(clearCart());
    dispatch(clearStatusAsync());
    navigate("/");

}

  return (
        <div className={css.PaymentForm}>
        <ShipInfo SubHeading={'You are eligible for free shipment'}></ShipInfo>
        <OrderPlace></OrderPlace>
        <button className={css.oBtn} onClick={getPayment}>Finish Payment</button>

        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={orderPlaced}
        onClick={SuccessReset}
      >
      <OrderSuccess></OrderSuccess>
      </Backdrop>
        </div>
  )
}

export default PaymentForm