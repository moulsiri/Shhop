import {createSlice} from '@reduxjs/toolkit';

const initialState={
    orders:[],
    loading:false,
    error:null,
    totalAmount:null,
    success:false,
}

export const adminOrderSlice=createSlice({
    name:"admin_orders",
    initialState,
    reducers:{
        getAdminOrderRequest:(state)=>{
            state.loading=true;
        },
        getAdminOrders:(state,action)=>{
            state.loading=false;
            state.success=true;
            state.orders=action.payload.orders;
            state.totalAmount=action.payload.totalAmount;

        },
        getAdminOrderFail:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        clearErrors:(state)=>{
            state.loading=false;
            state.error=null;
        }
    }
})


export const {
    getAdminOrderFail,
    getAdminOrders,
    getAdminOrderRequest,
    clearErrors
}=adminOrderSlice.actions;
export default adminOrderSlice.reducer;