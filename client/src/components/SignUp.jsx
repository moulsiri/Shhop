import React from 'react'
import css from '../style/Register.module.scss';
import axios from 'axios'

const SignUp = ({rToggle,setRToggle,signUpInfo,setSignUpInfo,setIsLoggedIn}) => {
    const getData=(e)=>{
        setSignUpInfo({...signUpInfo,[e.target.name]:e.target.value});
      }
      const submitionHandler=(e)=>{
        e.preventDefault();
        axios.post('/login',signUpInfo)
        .then(res=>res.status===200?setIsLoggedIn(true):setIsLoggedIn(false)).catch(err=>{
            console.log(err);
        })
      }
  return (
    <form method="post" className={css.authForm} onSubmit={submitionHandler}>
    <div className={css.fElm}>
      <h1>SIGNUP</h1>
    </div>
    <div className={css.fElm}>
    <i className="ri-user-fill"></i>
    <input 
    type="text"
    placeholder="name"
    name="name"
    onChange={getData}
    value={signUpInfo.name}
    
    />

    </div>
    <div className={css.fElm}>
    <i className="ri-user-fill"></i>
    <input 
    type="text"
    placeholder="username"
    name="username"
    onChange={getData}
    value={signUpInfo.username}
    
    />

    </div>
    <div className={css.fElm}>
    <i className="ri-lock-fill"></i>
    <input 
    type="password"
    placeholder="password"
    name="password"
    onChange={getData}
    value={signUpInfo.password}
    
    />

    </div>
    <div id={css.fBtn} className={css.fElm}>
    <button type="submit"><i className="ri-arrow-right-line"></i></button>

    </div>
    <div className={css.fElm}>
    <p onClick={()=>{setRToggle(!rToggle)}}>Already have account? Login here.</p>


    </div>

  </form>
  )
}

export default SignUp