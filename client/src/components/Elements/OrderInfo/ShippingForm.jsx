import {useState,useEffect} from 'react'
import css from '../styles/Order.module.scss'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useDispatch,useSelector} from 'react-redux';
import {addShipInfo} from '../../../features/OrderSLice';
import { clearErrorAsync } from '../../../asyncActions/paymentAction';
import {Link, useNavigate} from 'react-router-dom';
import { useAlert } from 'react-alert';
import CircularProgress from '@mui/material/CircularProgress';


const ShippingForm = ({setActiveStep}) => {

  const alert=useAlert();
  const Navigate=useNavigate();
  const {loading,error,success,paymentInfo}=useSelector((s)=>s.orderData)
    const [shipData,setShipData]=useState({
        address:"",
        city:"",
        state:"",
        pinCode:"",
        phoneNo:""
    })
    const dispatch=useDispatch();
    
    useEffect((e)=>{
      if(Object.keys(paymentInfo).length===0 && loading===false){
        Navigate('/cart');
      }
      if(error){
      alert(error);
      dispatch(clearErrorAsync());
      }
    })


    const fStyle={
        width:"100%",
        marginTop:'1em'
    }
    const getValues=(e)=>{
       setShipData({...shipData,[e.target.name]:e.target.value})
    }
    const SubmitShipInfo=(e)=>{
        dispatch(addShipInfo(shipData));
        setActiveStep(2);
    }
  return (
    <div className={css.ShipForm}>
     
          {
            (loading)? <CircularProgress/>
            :  <Box
            component="form"
            sx={{width:"80%",
            marginTop:"2em"}}
            >
           <TextField
               required
               id="outlined-textarea"
               label="Address"
               placeholder="Enter your address"
               multiline
               style={fStyle}
               name="address"
               onChange={getValues}
               value={shipData.address}
             />
             <TextField
               required
               id="outlined-required"
               placeholder="Enter your city"
               label="City"
               size="small"
               style={fStyle}
               name="city"
               onChange={getValues}
               value={shipData.city}
               
             />
               <TextField
               required
               placeholder="Enter your state"
               id="outlined-required"
               label="State"
               size="small"
               style={fStyle}
               name="state"
               onChange={getValues}
               value={shipData.state}
             />
             <Box
             sx={{
               width:"100%",
               display:'flex',
               justifyContent:"space-between",
               marginTop:"1em",
             }
             }>
             <TextField
               required
               placeholder="Enter mobile no."
               id="outlined-required"
               label="Phone no."
               size="small"
               style={{width:"45%"}}
               name="phoneNo"
               onChange={getValues}
               value={shipData.phoneNo}
     
               
             />
              <TextField
               required
               placeholder="Enter pincode"
               id="outlined-required"
               label="Pincode"
               size="small"
               style={{width:"45%"}}
               name="pinCode"
               onChange={getValues}
               value={shipData.pinCode}
             />
     
             </Box>
             <Box
             sx={{
               width:"100%",
               display:'flex',
               justifyContent:"space-between",
               marginTop:"3em",
             }
             }>
               <Link to="/cart" style={{textDecoration:"none"}}>
             <Button variant="contained" color="secondary" style={{marginTop:"1em"}}>Back</Button>
               </Link>
             <Button variant="contained" 
                     color="secondary" 
                     style={{marginTop:"1em"}} 
                     onClick={SubmitShipInfo}
                     disabled={((shipData.address.length===0) &&
                       (shipData.city.length===0) &&
                       (shipData.state.length===0) &&
                       (shipData.phoneNo.length===0) &&
                       (shipData.pinCode.length===0))?true:false}
                     >Next</Button>
             </Box>
            </Box> 
          }
          

      
    </div>
  )
}

export default ShippingForm