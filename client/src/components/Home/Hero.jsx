import {useState} from 'react'
import NavBar from '../NavBar/NavBar';
import css from './Hero.module.scss';
import {useSelector} from 'react-redux';

import HomeLayout from '../Elements/MainElements/HomeLayout';
import ProductCard from '../Elements/MainElements/ProductCard';
import HomeElements from '../Elements/MainElements/HomeElements';


const Hero = () => {
  const {products,loading}=useSelector((store)=>store.products);
  const {user}=useSelector((store)=>store.user);
 
  return (
    <>
    <main>
    <NavBar></NavBar>
    <HomeLayout
     heading={`${(user)?`${user.username}!`:" "} have a good day`}
     cardData={!loading && 
                  products.map((elm)=>
                  <ProductCard key={elm._id} data={elm}/>)}
     boxStyle={"grid"}
     rightSide={<HomeElements/>}
     />
    </main>
  
    </>
  )
}

export default Hero