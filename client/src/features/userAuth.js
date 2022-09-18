import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loading:false,
    user:{},
    isAuthenticated:false,
    error:null
}
export const userAuthSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        //regist user
        registerRequest:(state,action)=>{
            state.loading=true;
            state.isAuthenticated=false;
        },
        registerSuccess:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;
            state.error=null;
        },
        registerFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.user=null;
            state.error=action.payload;
        },

        //login user
        loginRequest:(state,action)=>{
            state.loading=true;
            state.isAuthenticated=false;
        },
        loginSuccess:(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isAuthenticated=true;
            state.error=null;
        },
        loginFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
            state.user=null;
        },

        //logout
        logoutUser:(state,action)=>{
            state.user=null;
            state.isAuthenticated=false
        },

        //loading user data
        loadUserRequest:(state,action)=>{
            state.loading=true;
            state.isAuthenticated=false;
        },
        loadUserSuccess:(state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isAuthenticated=true
        },
        loadUserFail:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
            state.user=null;
        },

        //clear Errors
        clearError:(state,action)=>{
            state.loading=false;
            state.error=null;

        }
    }
})


export const { loginRequest,
               loginSuccess, 
               loginFail,
               logoutUser,
               loadUserRequest, 
               loadUserSuccess, 
               loadUserFail,
               registerRequest,
               registerSuccess,
               registerFail,
            clearError}=userAuthSlice.actions;
export default userAuthSlice.reducer;