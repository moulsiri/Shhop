import {useState,useEffect} from 'react';
import Nav from './Nav';
import CardContainer from './CardContainer';
import axios from 'axios';
import CartContainer from './CartContainer';
import css from '../style/Cart.module.scss'
// import { initialize } from 'passport';


const Main = ({setIsLoggedIn,themeFlag,themeHandler}) => {
  const [userInfo,setUserInfo]=useState(null);
  const [cardAdded,setCardAdded]=useState([]);
  const [onCart,setOnCart]=useState(false);

  const getUserData=async ()=>{
    try{
      let uData=await axios.get('/api/v1/userInfo');
      await setUserInfo(uData.data.uData);
      // console.log(uData.data.uData.cart)
      await setCardAdded(uData.data.uData.cart);
    }catch(err){
      console.log(err);

    }
       
  };

  let showCartHandler=()=>{
    setOnCart(!onCart);

  }
 
  let cartElm=onCart ? <CartContainer cardAdded={cardAdded} userInfo={userInfo}/>:" ";


  return (
    <div>
        <div className={css.cart} style={(onCart)?{display:'initial'}:{display:"none"}}>
        <i className="ri-close-circle-fill" id={css.cartClose} style={(onCart)?{display:'initial'}:{display:"none"}} onClick={showCartHandler}></i>
           <div className={css.cartContainer} style={(onCart)?{width:'60%'}:{display:"0"}}>
            {cartElm}
          </div>
          <button className={css.Btn} >Order</button>
        </div>
        <Nav setIsLoggedIn={setIsLoggedIn} themeFlag={themeFlag} themeHandler={themeHandler} cardAdded={cardAdded} showCartHandler={showCartHandler}/>
        <CardContainer userInfo={userInfo} getUserData={getUserData}></CardContainer>
   

    </div>
  )
}

export default Main