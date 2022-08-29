import css from '../style/Cart.module.scss'
import Cart from './Cart'
import {useContext} from 'react';
import { GlobalContext } from '../Context';
import { useState,useEffect } from 'react';
const CartContainer = ({cardAdded,userInfo}) => {
  const {setPrice}=useContext(GlobalContext);
  let [tmpPrice,setTmpPrice]=useState(0);
  let inCart=<p>Cart is Empty</p>
 
  useEffect((e)=>{
    if(cardAdded.length!==0){
      let p=0;
      cardAdded.forEach((elm)=>{
        let freq=elm.addedBy[elm.addedBy.map(obj => obj.username).indexOf(userInfo.username)].count
        p+=elm.price*freq
      })
    setPrice(p);

    }else{
      setPrice(0);
    }
  },[cardAdded]);
  if(cardAdded.length!==0){
    inCart=cardAdded.map((elm)=>{
       return <Cart imageURL={elm.imageURL} 
                name={elm.name}
                price={elm.price}
                discount={elm.discount}
                oldPrice={elm.oldPrice}
                key={elm._id}
                id={elm._id}
                addedBy={elm.addedBy}
                userInfo={userInfo}
               />
    })
  }
  return (
   
    <div className={css.addedCard}>
    {
      inCart
    }

    </div>
  )
}

export default CartContainer;