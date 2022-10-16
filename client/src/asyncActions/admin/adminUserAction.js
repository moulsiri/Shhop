import {getAdminUserFail,
    getAdminUsersRequest,
    getAdminUsersSuccess,
    clearErrors} from '../../features/admin/adminUserSlice';

    import * as api from '../../api/admin';


export const getAdminUsersAsync=()=>async (dispatch)=>{
    try{
        dispatch(getAdminUsersRequest());
        let fetch=await api.getAdminUsers();
        dispatch(getAdminUsersSuccess(fetch.data.users))

    }catch(err){
        dispatch(getAdminUserFail(err.message))

    }
}