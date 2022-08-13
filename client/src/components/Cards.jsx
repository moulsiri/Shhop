import {useState,useEffect} from 'react'
import axios from 'axios'

const Cards = ({name,price,imageURL,type,oldPrice,discount,id,userInfo,addedBy}) => {
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
        
      },[addedBy]);
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
    <div className="card">
            <div className="cImg">
                <div className="cTag">
                   <p> Best Seller</p>
                </div>
                <img src={imageURL} alt=""/>
            </div>
            <div className="cHead">
                <h1>{name}</h1>
                <p>{type} collection</p>
                <div className="cStar">
                    <i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-s-fill"></i><i className="ri-star-half-s-fill"></i><i className="ri-star-s-line"></i>
                </div>

            </div>
            <div className="cAction">
                <div className="cPrice">
                     <span>Rs</span><h6>{price}.00</h6>
                </div>
                <div className="cDis">
                    <h4>{oldPrice} <span></span></h4>
                    <h5>({discount}%)</h5>

                </div>
                <div className="cNote">
                     <p>free delivary</p>
                     <p>get in 2 days</p>
                </div>
                <div className="cBtn" >
              
                    {(addToggle && addedBy[addedBy.map(obj => obj.username).indexOf(userInfo.username)])
                    
                    ? <div> <i className="ri-delete-bin-line" id="cDelete" onClick={cardDeleteHandler}></i><p>{addedBy[addedBy.map(obj => obj.username).indexOf(userInfo.username)].count}</p> <i className="ri-add-circle-fill" onClick={onAddToCartHandler} id="cAdd"></i></div>
                    :<i className="ri-shopping-cart-fill" onClick={onAddToCartHandler}></i>}
                    {/* <i className={addToggle?"ri-check-line":"ri-add-fill"} id="cAdd" onClick={onAddToCartHandler}></i> */}
                    
                </div>

            </div>
        </div>
  )
}

export default Cards