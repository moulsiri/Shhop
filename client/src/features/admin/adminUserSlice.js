import { createSlice } from "@reduxjs/toolkit";

const initialState={
    usersList:[],
    loading:false,
    error:null,
    usersCount:null,
    success:false,
}

export const adminUserSlice=createSlice({
    name:"admin_users",
    initialState,
    reducers:{
        getAdminUsersRequest:(state)=>{
            state.loading=true;
        },
        getAdminUsersSuccess:(state,action)=>{
            state.loading=false;
            state.success=true;
            state.usersList=action.payload;
            state.usersCount=action.payload.length;
        },
        getAdminUserFail:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        clearErrors:(state)=>{
            state.error=null;
        }
    }
})

export const {
    getAdminUserFail,
    getAdminUsersRequest,
    getAdminUsersSuccess,
    clearErrors
}=adminUserSlice.actions;
export default adminUserSlice.reducer;