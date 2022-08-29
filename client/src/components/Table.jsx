import {useEffect, useContext} from 'react'
import axios from 'axios';
import { GlobalContext } from '../Context';
import css from '../style/Cart.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({cardAdded,userInfo}) => {
    let Navigate=useNavigate();
    const {price}=useContext(GlobalContext);
    let [orderId,setOrderId]=useState(null);
    //loading razor pay script
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
},[]);
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

let orderHandler=async ()=>{
    let d=await axios.get(`/api/v1/rPayment/${price}`);
    setOrderId(d.data.orderId);
  }

  let paymentHandler=async ()=>{
    const  options ={
        key: "rzp_test_OI8ne56dSAy7VU",
        currency: "INR",
        amount: price,
        name: cardAdded[0].name,
        description: "Test Wallet Transaction",
        image: cardAdded[0].imageURL,
        order_id:orderId,
        handler: function (response) {
          let headers = {
            "Content-Type": "application/json"
        }
        axios.post("/api/v1/rPayment", response, { headers }).then(function (d) {
            if(d.data.signatureIsValid){
                alert("Payment successfull")
            }else{
                alert("There is some problem in the payment.....")
            }
        }).catch(function (err) {
            console.log(err)
        })
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
let table=<tbody><tr><td>hello</td></tr></tbody>;
  if(cardAdded){
table=cardAdded.map((e,i)=>{
    return <tr key={i}>
    <td>{i+1}</td>
    <td>{e.name}</td>
    <td>{e.addedBy[e.addedBy.map(obj => obj.username).indexOf(userInfo.username)].count}</td>
    <td>{e.addedBy[e.addedBy.map(obj => obj.username).indexOf(userInfo.username)].count*e.price}</td>
  </tr>
})
  }
  return (
    <div className={css.TableContainer}>
        <div className={css.tableBox}>
        <table>
    <tbody>
    <tr>
      <th>#</th>
      <th>Item</th>
      <th>Freq</th>
      <th>Price</th>
    </tr>
    {
        table
    }
    </tbody>
   
   
  </table>
        </div>

  <div className={css.priceBox}>
  <h3>Total Price: <span>Rs {price}</span></h3>
  <button onClick={orderHandler} >Order</button>
  {(orderId)?<><p>Order is successfully created with order_id {orderId}</p>  <button className={css.Pay} onClick={paymentHandler}>Pay Now</button></>:" "}
 
  </div>
 

    </div>
   
  )
}

export default Table