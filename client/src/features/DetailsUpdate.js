import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    success:false,
    error:null,
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
    },
    updateFail:(state,action)=>{
        state.error=action.payload;
        state.loading=false;
    },
    clearError:(state,action)=>{
        state.loading=false;
        state.error=null;
    }
}
})

export const {
    updateRequest,
    updateSuccess,
    updateFail,
    clearError


}=detailUpdateSlice.actions;
export default detailUpdateSlice.reducer;