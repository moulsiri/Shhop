import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import { updatePassword } from '../../asyncActions/detailsUpdateStatusAction';
import { getUserDataAsync } from '../../asyncActions/userAction';
import { useAlert } from 'react-alert';
import { clearErrorAsync } from '../../asyncActions/detailsUpdateStatusAction';
import { updateStatusReset } from '../../features/DetailsUpdate';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
  };

const ChangePassword = ({open,setOpen}) => {
    const alert=useAlert();
    const dispatch=useDispatch();
    //   const {user}=useSelector((e)=>e.user);
      const {loading,success,error,successNote }=useSelector((e)=>e.detailsUpdateStatus)
      const [details,setDetail]=useState({
          oldPassword:"",
          newPassword:"",
          confirmPassword:"",
  
      })
  
      useEffect((e)=>{
          if(success){
             dispatch(getUserDataAsync());
             dispatch(updateStatusReset());
           alert.success(successNote);
             setOpen(false);
          }
      },[success])

      useEffect((e)=>{
        if(error){
          alert.error(error);
          dispatch(clearErrorAsync())
        }
      },[error])
  
      const getValues=(e)=>{
        setDetail({...details,[e.target.name]:e.target.value});
      }
  
      const submitDetails=()=>{
        dispatch(updatePassword(details));
        // console.log(details)
      }
    return (
      <Modal
      open={open}
      onClose={()=>{setOpen(!open)}}>
       <Box sx={style}>
       <Typography id="modal-modal-title" variant="h6" component="h2" sx={{paddingBottom:'1em'}}
       color="secondary">
              Change Password here
            </Typography>
            <TextField 
id="oldPassword" 
label="old Password" 
variant="outlined"
onChange={getValues}
name="oldPassword"
type="password"
value={details.oldPassword}
sx={{paddingBottom:'1em'}} />

<TextField 
id="newPassword" 
label="new Password" 
variant="outlined"
onChange={getValues}
name="newPassword"
type="password"
value={details.newPassword}
sx={{paddingBottom:'1em'}} />

<TextField 
id="reEnterPass" 
label="re-enter your Password" 
variant="outlined"
onChange={getValues}
name="confirmPassword"
type="password"
value={details.reEnterPass}
sx={{paddingBottom:'1em'}} />

  
      
       <Button variant="contained" color="secondary" style={{marginTop:"1em"}} onClick={submitDetails}>Submit</Button>
       </Box>
  
  
      </Modal>
    )
}

export default ChangePassword



{/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
<OutlinedInput
  id="outlined-adornment-password"
  // type={values.showPassword ? 'text' : 'password'}
  // value={values.password}
  // onChange={handleChange('password')}
  endAdornment={
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
      //   onClick={handleClickShowPassword}
      //   onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {values.showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  }
  label="Password"
/>
</FormControl> */}
