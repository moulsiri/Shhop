import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import css from './Hero.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from "react-router-dom";
import { useState } from 'react';

import ShippingForm from '../Elements/OrderInfo/ShippingForm';
import PaymentForm from '../Elements/OrderInfo/PaymentForm';


const OrderPage = () => {
  const matches=useMediaQuery('(max-width:800px)')
  let [activeStep,setActiveStep]=useState(1);

  const HandleBack=()=>{
    let tmp=activeStep-1;
    setActiveStep(tmp)

  }
  const HandleNext=()=>{
       let tmp=activeStep+1;
       setActiveStep(tmp)
  }


  return (
    <>
    <div className={css.OrderPage}>
    <Link to="/" style={{textDecoration: 'none'}}><h3 className={css.logo}>Shhop<span>.</span></h3></Link>
    <Box sx={{
      width:"80%",
    }

    }>
    <Stepper activeStep={activeStep} orientation={matches?"vertical":"horizontal"}>
    <Step>
      <StepLabel>
        Order Requested
      </StepLabel>
    </Step>
    <Step>
      <StepLabel>
        Shipping Info
      </StepLabel>
    </Step>
    <Step>
      <StepLabel>
        Payment
      </StepLabel>
    </Step>
    </Stepper>

    </Box>

   
    <div className={css.stepsPage}>

      {
      (activeStep===1)?<ShippingForm activeStep={activeStep} setActiveStep={setActiveStep}/>
      :<PaymentForm/>
     } 
    





    </div>

    </div>
   
  

    </>
  )
}

export default OrderPage