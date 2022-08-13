import { useEffect,useState } from 'react';
import Cards from './Cards'
import loader from '../asset/preloader.gif'

const CardContainer = ({userInfo,getUserData}) => {
  const [cards,setCard]=useState([]);
  const getCardsData=()=>{
    fetch("/api/v1/products",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res)=>res.json())
    .then((data)=>{
      setCard(data.products)
        })
  }

  useEffect(()=>{
   getCardsData();
   getUserData(); 
  },[cards]);
  let productCards=<img id="loader" src={loader} alt="" />
  if(userInfo!==null){
    productCards=cards.map((elm)=>{
      let {name,price,imageURL,type,oldPrice,discount,_id,addedBy}=elm;
      return <Cards name={name} 
             price={price} 
             imageURL={imageURL} 
             type={type} 
             oldPrice={oldPrice} 
             discount={discount} 
             key={_id}
             id={_id}
             userInfo={userInfo}
             addedBy={addedBy}
             
             />
    })
  }
  return (
    <div className="cardContainer">
    {
      productCards
    }
       

    </div>
  )
}

export default CardContainer