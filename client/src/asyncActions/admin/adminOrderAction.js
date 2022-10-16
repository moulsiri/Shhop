
import {
    getAdminOrderFail,
    getAdminOrders,
    getAdminOrderRequest,
    clearErrors
} from "../../features/admin/adminOrderSlice"

import * as api from '../../api/admin';

export const getAdminOrdersAsync=()=>async (dispatch)=>{
    try{
        dispatch(getAdminOrderRequest());
        let fetch=await api.getAdminOrders();
        dispatch(getAdminOrders({orders:fetch.data.orders,totalAmount:fetch.data.totalAmount}));

    }catch(err){
       dispatch(getAdminOrderFail(err.message));
    }
}