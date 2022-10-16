import {createSlice} from '@reduxjs/toolkit';
const initialState={
    products:[],
    loading:false,
    error:null,
    productsCount:null,
    success:false,
}


export const adminProductSlice=createSlice({
    name:"admin_products",
    initialState,
    reducers:{
        getAdminProductRequest:(state)=>{
            state.loading=true;
        },
        getAdminProductSuccess:(state,action)=>{
            state.loading=false;
            state.success=true;
            state.products=action.payload.products;
            state.productsCount=action.payload.productsCount;
        },
        getAdminProductFail:(state,action)=>{
            state.error=action.paylaod;
            state.loading=false;
        },
        clearErrors:(state)=>{
            state.loading=false;
            state.error=null;
        }
    }
})


export const {getAdminProductRequest,
              getAdminProductSuccess,
              getAdminProductFail,
              clearErrors }=adminProductSlice.actions;
export default adminProductSlice.reducer;