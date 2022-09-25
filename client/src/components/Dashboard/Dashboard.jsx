import React from 'react'
import './Dashboard.scss';
import css from './dashboard.module.scss';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
   <div id="Admindashboard">
          <Link to="/" style={{textDecoration: 'none'}}><h3 className={css.logo}>Shhop<span>.</span></h3></Link>
   </div>
  )
}

export default Dashboard