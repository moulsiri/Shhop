import {useEffect,useState} from 'react'
import css from '../style/Cart.module.scss'
import axios from 'axios'


const Cart = ({imageURL,name,price,discount,oldPrice,addedBy,userInfo, id}) => {
  const [addToggle,setAddToggle]=useState(false)

  const onAddToCartHandler=async()=>{
      try{
        await axios.get(`/api/v1/products/${id}`);
        await addToggleHandler();
      }catch(err){
        console.log(err);
      }
    }
  useEffect(()=>{
   
     addToggleHandler();
      
    });
    const addToggleHandler=()=>{
      if(userInfo){
        if(addedBy.map(obj => obj.username).indexOf(userInfo.username)!==-1){
            setAddToggle(true);
        }else{
            setAddToggle(false);
        }
      }
        
    }
    const cardDeleteHandler=async ()=>{
      try{
        let data=await axios.delete(`/api/v1/products/${id}`);
        await console.log(addToggle);
        await addToggleHandler();
      }catch(err){
        console.log(err);
      }
    }

  return (
    <>
    {

(addToggle && addedBy[addedBy.map(obj => obj.username).indexOf(userInfo.username)])
?<div className={css.cartCard}>
<div className={css.cCImg}>
  <img src={imageURL} alt="..." />
</div>
<div className={css.cCHead}>
  <h1>{name}</h1>
   <div className={css.cStar}>
          <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-half-s-fill"></i><i className="ri-star-s-line"></i>
      </div>
  <div className={css.ccPrice}>
    <h3>{price}</h3>
    <div className={css.cDis}>
          <h5>({discount}%)</h5>
          <h4>{oldPrice} <span></span></h4>


      </div>

  </div>

</div>
<div className={css.cCNote}>
  <div className={css.cFreq}>
    <div id={css.cAdd}>
    <i className="ri-add-line" onClick={onAddToCartHandler}></i>
    </div>
  
    <p>{addedBy[addedBy.map(obj => obj.username).indexOf(userInfo.username)].count}</p>
   
    <div id={css.cDelete}>
    <i className="ri-delete-bin-line" onClick={cardDeleteHandler}></i>
    </div>

  </div>

</div>


</div>
: <div></div>  
}
    </>
    
  )
}

export default Cart
