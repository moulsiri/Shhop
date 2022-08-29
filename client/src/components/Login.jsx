import React from 'react'
import css from '../style/Register.module.scss';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = ({rToggle,setRToggle,logInInfo,setlogInInfo}) => {
  let Navigate=useNavigate();
  const getData=(e)=>{
    setlogInInfo({...logInInfo,[e.target.name]:e.target.value});
  }
  const submitionHandler=async (e)=>{
    e.preventDefault();
    try{
      let lData=await axios.post('/login',logInInfo);
      if(lData.status===200){
        Navigate("/profile");
      }else{
        Navigate("/");
      }
    }catch(e){
      console.log(e);
    }
   
  }
    
  return (
    <form method="post" className={css.authForm} onSubmit={submitionHandler}>
    <div className={css.fElm}>
      <h1>LOGIN</h1>
    </div>
    <div className={css.fElm}>
    <i className="ri-user-fill"></i>
    <input 
    type="text"
    placeholder="username"
    name="username"
    onChange={getData}
    value={logInInfo.username}
    
    />

    </div>
    <div className={css.fElm}>
    <i className="ri-lock-fill"></i>
    <input 
    type="password"
    placeholder="password"
    name="password"
    onChange={getData}
    value={logInInfo.password}
    />

    </div>
    <div className={css.fElm}>
    <p>forget password?</p>

    </div>
    <div id={css.fBtn} className={css.fElm}>
    <button type="submit"><i className="ri-arrow-right-line"></i></button>

    </div>
    <div className={css.fElm}>
    <p onClick={()=>{setRToggle(!rToggle)}}>New User? create your account here</p>


    </div>

  </form>
  )
}

export default Login