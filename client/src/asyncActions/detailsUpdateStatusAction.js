import {
    updateRequest,
    updateSuccess,
    updateFail,
    clearError
} from '../features/DetailsUpdate';

import * as api from '../api/updateDetails';
import { compareSync } from 'bcryptjs';

export const updateUserDetails=(data)=>async (dispatch,getState)=>{
    try{
        dispatch(updateRequest())
       const d= await api.updateUserDetails(data);
        if(d.status===200){
            dispatch(updateSuccess("user details successfull edited!"));
        }
   
    }catch(err){
       dispatch(updateFail(err.response.data.message))
    }
   }

export const updatePassword=(data)=>async (dispatch)=>{
    try{
        dispatch(updateRequest());
        let d=await api.updatePassword(data);
        dispatch(updateSuccess("password is successfully changed!"));

    }catch(err){
        dispatch(updateFail(err.response.data.message));
    }
}

export const updateShippingInfo=(data)=>async (dispatch,getState)=>{
    try{
        dispatch(updateRequest());
        // console.log(data)
        let fetch=await api.updateShippingInfo(data);
        let {user}=getState((e)=>e.user);
        dispatch(updateSuccess(`Shipping information is successfully ${user.user.shippingInfo.writtenBy?"Edited":"Added"}!`))

    }catch(err){
        console.log(err)
        dispatch(updateFail(err.message));

    }
}

export const uploadAvatarAsync=(data)=>async (dispatch,getState)=>{
    try{
        dispatch(updateRequest());
        let fetch=await api.uploadAvatar(data);
        console.log(fetch);


    }catch(err){
        console.log(err)
    }
}

   export const clearErrorAsync=(alert)=>(dispatch,getState)=>{


    setTimeout((e)=>{
        dispatch(clearError())
    },2000)
}
