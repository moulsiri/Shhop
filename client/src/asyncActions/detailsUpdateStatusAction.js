import {
    updateRequest,
    updateSuccess,
    updateFail,
    clearError
} from '../features/DetailsUpdate';

import * as api from '../api/updateDetails';

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

   export const clearErrorAsync=(alert)=>(dispatch,getState)=>{


    setTimeout((e)=>{
        dispatch(clearError())
    },2000)
}