import React from 'react'
import css from './Navbar.module.scss'
import {useDispatch} from 'react-redux';
import { logOutAsync } from '../../asyncActions/userAction';
const User = ({user}) => {
const dispatch=useDispatch();
    const logOut=()=>{
      dispatch(logOutAsync());
    }
  return (
   <>
    
        <div className={css.user}>
            <div className={css.uDp}>
                <img src={user?.avatar?.url} onClick={logOut} alt=""/>
            </div>
            <div className={css.uText}>
                <h4>Hi!</h4>
                <h3>{user?.name?.split(" ")[0]}</h3>
            </div>
        </div>
        <i className="ri-menu-fold-line" id={css.menu}></i>

   </>
  )
}

export default User