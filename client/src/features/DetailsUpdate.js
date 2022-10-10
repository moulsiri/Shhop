import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    success:false,
    error:null,
    successNote:null,
}

export const detailUpdateSlice=createSlice({
name:'userDetailsUpdate',
initialState,
reducers:{
    updateRequest:(state,action)=>{
        state.loading=true
    },
    updateSuccess:(state,action)=>{
        state.success=true;
        state.loading=false;
        state.successNote=action.payload
    },
    updateFail:(state,action)=>{
        state.error=action.payload;
        state.loading=false;
    },
    clearError:(state,action)=>{
        state.loading=false;
        state.error=null;
    },
    updateStatusReset:(state,action)=>{
        state.loading=false;
        state.success=false;
        state.error=null;
        state.successNote=null;
    }
}
})

export const {
    updateRequest,
    updateSuccess,
    updateFail,
    clearError,
    updateStatusReset


}=detailUpdateSlice.actions;
export default detailUpdateSlice.reducer;