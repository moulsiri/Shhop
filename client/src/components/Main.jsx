import {useState,useEffect,useContext} from 'react';
import Nav from './Nav';
import CardContainer from './CardContainer';
import axios from 'axios';
import CartContainer from './CartContainer';
import css from '../style/Cart.module.scss'
import Table from './Table';


const Main = ({setIsLoggedIn,themeFlag,themeHandler}) => {

  const [userInfo,setUserInfo]=useState(null);//user info for id
  const [cardAdded,setCardAdded]=useState([]);// carded info
  const [onCart,setOnCart]=useState(false); // toggle to open cart


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
    // console.log(cardAdded);
    setOnCart(!onCart);
  }
  
 
  let cartElm=onCart ?<><CartContainer cardAdded={cardAdded} userInfo={userInfo}/><Table cardAdded={cardAdded} userInfo={userInfo}/></> :<div><p>Cart is Empty</p></div>;


  return (
    <div>
      
        <div className={css.cart} style={(onCart)?{display:'initial'}:{display:"none"}}>
        <i className="ri-close-circle-fill" id={css.cartClose} style={(onCart)?{display:'initial'}:{display:"none"}} onClick={showCartHandler}></i>
           <div className={css.cartContainer} style={(onCart)?{width:'60%'}:{display:"0"}}>
            {cartElm}
            
          </div>
    
        </div>
        <Nav setIsLoggedIn={setIsLoggedIn} themeFlag={themeFlag} themeHandler={themeHandler} cardAdded={cardAdded} showCartHandler={showCartHandler}/>
        <CardContainer userInfo={userInfo} getUserData={getUserData}></CardContainer>
   

    </div>
  )
}

export default Main