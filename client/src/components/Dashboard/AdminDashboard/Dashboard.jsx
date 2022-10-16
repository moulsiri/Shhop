import {useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux';

const Dashboard = () => {
  const orderData=useSelector((s)=>s.adminOrders);
  const productData=useSelector((s)=>s.adminProducts);
  const userData=useSelector((s)=>s.adminUsers);
  
  useEffect((s)=>{
    console.log(orderData);
    console.log(productData);
    console.log(userData)
  })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard