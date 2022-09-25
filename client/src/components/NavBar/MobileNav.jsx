import React from 'react'
import { NavLink } from 'react-router-dom';
import css from './mobileNav.module.scss';

const MobileNav = () => {
    
  return (
    <div id={css.mobileNav}>
        <div id={css.mNLinks}>
        <NavLink to="/" style={{textDecoration:'none'}} 
        className={({isActive})=>isActive?css.active:css.inActive}>
            <i className="ri-home-2-line"></i></NavLink>
            <NavLink to="/browse" style={{textDecoration:'none'}}
              className={({isActive})=>isActive?css.active:css.inActive}>
                <i className="ri-search-line"></i></NavLink>
            <NavLink to="/trending" style={{textDecoration:'none'}}
             className={({isActive})=>isActive?css.active:css.inActive} >
                <i className="ri-fire-line"></i></NavLink>
            <NavLink to="/about" style={{textDecoration:'none'}} 
             className={({isActive})=>isActive?css.active:css.inActive}>
                <i className="ri-group-line"></i></NavLink>
        </div>
    </div>
  )
}

export default MobileNav