import {useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {getAdminOrdersAsync} from '../../../asyncActions/admin/adminOrderAction';

import CircularProgress from '@mui/material/CircularProgress';

import './AdminOrder.scss';
import AdminOrderTable from './AdminOrderTable';

function createData(
  id,
  createdAt,
  Qty,
  orderStatus,
  totalPrice,
  shippingInfo

) {
  return { id,
      createdAt,
      Qty,
      orderStatus,
      totalPrice,
      shippingInfo };
}
const AdminOrder = () => {
  const {orders,loading,success}=useSelector((s)=>s.adminOrders);
  const dispatch=useDispatch();
  const [row,setRow]=useState(null);
  useEffect(()=>{
    dispatch(getAdminOrdersAsync());
  },[])

  useEffect((e)=>{
      if(!loading && success){
        let rows=orders.map((elm)=>createData(
          elm._id,
          elm.createdAt,
          elm.orderItems.length,
          elm.orderStatus,
          elm.paymentInfo.totalPrice,
          {
            state:elm.shippingInfo.state,
            mob:elm.shippingInfo.phoneNo,
            address:elm.shippingInfo.address,
            pinCode:elm.shippingInfo.pinCode,
            city:elm.shippingInfo.city
          }
          ))
          setRow(rows);
      }
  },[success])


  return (
    <>
    <div id="aOrderHeader">
      <h1>All Orders</h1>
    </div>
    {
      (!loading && success && row)
    ?<AdminOrderTable rows={row}></AdminOrderTable>
    :<CircularProgress />

    }
    </>
  )
}

export default AdminOrder