import css from '../style/Cart.module.scss'
import Cart from './Cart'
import {useState} from 'react'
const CartContainer = ({cardAdded,userInfo}) => {
  let inCart=<p>Cart is empty!</p>
 
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