import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Nav = ({themeFlag,themeHandler,cardAdded,showCartHandler}) => {
  let Navigate=useNavigate();
    const [companyName]=useState("Shhop.");
  const [navigation]=useState(["Explore","Browse","Offers","Categories","New Arrivals"]);
  const [icons]=useState(["ri-shopping-cart-fill cursor","ri-logout-circle-line","ri-menu-3-line cursor"]);

  const onLogout=async ()=>{
    try{
      let lData=await axios.get('/logout')
      if(lData.status===200){
         Navigate("/")
      }else{
        Navigate("/profile")
      }

    }catch(e){
      console.log(e);
    }
  }
 
  
  return (
    <nav>
    <div id="nlft">
    <div id="logo">
      <h3>{companyName}</h3>
    </div>
    <div id="nlinks">
      {
        navigation.map((elm,i)=>(
          <a href="#" key={i}>{elm}</a>
        ))
      }
  
    </div>
    <div id="nSelect">
    <select>
      {
        navigation.map((elm,i)=>(
          <option value={elm} key={i}>{elm} </option>
        ))
      }
    </select>
    <i className="ri-arrow-drop-down-fill"></i>
    </div>
    </div>
    <div id="nrt">
      <div id="nsrch" className='cursor'>
        <form>
          <input type="search" name="q" />
        </form>
        <i className="ri-search-line"></i>

      </div>
      <div id="ldToggle" className={(themeFlag)?"sliderR":"sliderL"}>
        <div className="tBtn" onClick={themeHandler}>
        <i className={(themeFlag)?"ri-sun-line cursor":"ri-moon-line cursor"}></i>
        </div>

      </div>
      <div id="nicons">
    {
      icons.map((elm,i)=>{
        if(elm==="ri-shopping-cart-fill cursor"){
            return <i key={i} className={elm} id="cart" onClick={showCartHandler}><span>{cardAdded.length}</span></i>
        }
        if(elm==="ri-logout-circle-line"){
          return <i key={i} className={elm} id="logOut" onClick={onLogout}></i>
        }
        return <i key={i} className={elm}></i>
     })
    }
      </div>
    </div>
    
  </nav>
  )
}

export default Nav