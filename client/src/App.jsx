import { useEffect } from 'react';
import 'remixicon/fonts/remixicon.css'
import {Routes,Route} from 'react-router-dom';
import Register from './components/Auth/Register';
import Hero from './components/Home/Hero';
import {useSelector,useDispatch} from 'react-redux';
import {getProductsAsync} from './asyncActions/productAction';
import { getUserDataAsync } from './asyncActions/userAction';
import CartPage from './components/Home/CartPage';
import OrderPage from './components/Home/OrderPage';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-mui'
import { createTheme, ThemeProvider} from '@mui/material/styles';

import NavBar from './components/NavBar/NavBar';

import HomeLayout from './components/Elements/MainElements/HomeLayout';
import ProductCard from './components/Elements/MainElements/ProductCard';
import HomeElements from './components/Elements/MainElements/HomeElements';
import AboutPage from './components/Home/AboutPage';
import BrowsePage from './components/Home/BrowsePage';
import TrendingPage from './components/Home/TrendingPage';
import UserOrders from './components/Elements/UserOrders/UserOrders';
import ProfilePage from './components/Profile/ProfilePage';
import WishList from './components/Elements/WishList/WishList';
import Dashboard from './components/Dashboard/Dashboard';

import ProtectedRoute from './components/utils/ProtectedRoute';




function App() {
  const {products,loading}=useSelector((store)=>store.products);
  const {user,isAuthenticated,admin}=useSelector((store)=>store.user);
  const {theme}=useSelector((store)=>store.themeControl);
  const MUItheme = createTheme({
    palette: {
      primary: {
        main: '#E26849',
      },
      secondary:{
        main:'#669C96'
      },
      mode:`${theme?'light':'dark'}`
    },
  });

  const dispatch=useDispatch();
  const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM,
    timeout: 1000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }


 
  useEffect((e)=>{
   dispatch(getUserDataAsync());
  //  dispatch(getProductsAsync());

  },[dispatch])
  return (
    <div className="App">
        <ThemeProvider theme={MUItheme}>
        <AlertProvider template={AlertTemplate} {...options}>
        <Routes>
        <Route exact path='/' element={<Hero></Hero>}>
             <Route index element={ <HomeLayout heading={`${(user)?`${user.username}!`:" "} have a good day`}
                                                   cardData={!loading && products.map((elm)=><ProductCard key={elm._id} data={elm}/>)}
                                                   boxStyle={"grid"}
                                                   rightSide={<HomeElements/>}/>}/>
             <Route path="cart" element={<CartPage/>}/>
             <Route path="browse" element={<BrowsePage/>}/>
             <Route path="trending" element={<TrendingPage/>}/>
             <Route path="about" element={<AboutPage/>}/>
             <Route path="profile" element={<ProtectedRoute value={isAuthenticated}><ProfilePage/></ProtectedRoute>}/>
             <Route path="myOrders" element={<ProtectedRoute value={isAuthenticated}><UserOrders/></ProtectedRoute>}/>
             <Route path="wishlist" element={<WishList/>}/>

            

        </Route>
        <Route exact path="/order" element={<OrderPage></OrderPage>}/>
        <Route exact path="/auth" element={<ProtectedRoute value={!isAuthenticated}><Register/></ProtectedRoute>}/>
        <Route exact path="/dashboard" element={<ProtectedRoute value={admin}>
          <Dashboard/>
          </ProtectedRoute>}/>
       
        </Routes>
        </AlertProvider>
        </ThemeProvider>

     
   
      {/* <button onClick={()=>{ dispatch(getProductsAsync());}}>clickME</button> */}
    </div>
  );
}

export default App;
