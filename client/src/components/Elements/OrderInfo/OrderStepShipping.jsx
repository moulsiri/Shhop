import { CircularProgress, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorAsync } from '../../../asyncActions/detailsUpdateStatusAction';
import { getUserDataAsync } from '../../../asyncActions/userAction';
import { updateStatusReset } from '../../../features/DetailsUpdate';
import ShipForm from '../../utils/Models/ShipForm';

const ShippingForm = ({activeStep,setActiveStep}) => {
  const {loading,success,error,successNote}=useSelector((s)=>s.detailsUpdateStatus);
  const {user}=useSelector((s)=>s.user);
  const dispatch=useDispatch();
  const [shipData,setShipData]=useState(null)
  useEffect((e)=>{
    if(user.shippingInfo.writtenBy){
      setShipData(user.shippingInfo);
  }else{
    setShipData({
      address:'',
      city:'',
      state:"",
      phoneNo:+91,
      pinCode:0
    })
  }

  },[])
  useEffect((e)=>{
    if(success){
      dispatch(getUserDataAsync());
      dispatch(updateStatusReset());
      setActiveStep(activeStep+1);
   }
   if(error){
     dispatch(clearErrorAsync());
     alert.error(error);
   }

  },[success,error])
  return (
    <>
    <div>{
      (shipData)?
      <ShipForm shipData={shipData} setShipData={setShipData}/>
      :''}</div>
      {(loading)
      ?<LinearProgress />:" "}
    </>
    
  )
}

export default ShippingForm