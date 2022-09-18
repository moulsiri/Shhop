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

function App() {
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
   dispatch(getProductsAsync());

  },[])
  return (
    <div className="App">
<AlertProvider template={AlertTemplate} {...options}>
<Routes>
        <Route path='/' element={<Hero></Hero>}/>
        <Route path="/auth" element={<Register></Register>}/>
        <Route path="/cart" element={<CartPage></CartPage>}/>
        <Route path="/order" element={<OrderPage></OrderPage>}/>
      </Routes>

</AlertProvider>
     
   
      {/* <button onClick={()=>{ dispatch(getProductsAsync());}}>clickME</button> */}
    </div>
  );
}

export default App;
