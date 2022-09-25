import {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import css from './Hero.module.scss';
import {useSelector} from 'react-redux';
import { Outlet } from 'react-router-dom';

import HomeLayout from '../Elements/MainElements/HomeLayout';
import ProductCard from '../Elements/MainElements/ProductCard';
import HomeElements from '../Elements/MainElements/HomeElements';
import Footer from '../Footer.jsx/Footer';
import MobileNav from '../NavBar/MobileNav';


const Hero = () => {
  const {products,loading}=useSelector((store)=>store.products);
  const {user}=useSelector((store)=>store.user);
 
  return (
    <>
    <main>
  
    <NavBar></NavBar>
    <MobileNav/>
    <Outlet/>
    <Footer/>
    
    </main>
  
    </>
  )
}

export default Hero