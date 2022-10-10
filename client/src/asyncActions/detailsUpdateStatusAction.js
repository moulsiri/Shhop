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
            dispatch(updateSuccess());
        }
   
    }catch(err){
       dispatch(updateFail(err.message))
    }
   }

   export const clearErrorAsync=()=>(dispatch)=>{
    setTimeout((e)=>{
        dispatch(clearError())
    },2000)
}