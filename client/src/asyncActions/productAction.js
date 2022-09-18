import { getProducts,getProductsRequest,getProductsFail } from '../features/productSlice';

import * as api from '../api/index'

export const getProductsAsync=(page,range,category)=>async (dispatch,getState)=>{
    try{
        dispatch(getProductsRequest());
        let d=await api.fetchProducts(page,range,category);
        // console.log(d)
        dispatch(getProducts(d.data));

    }catch(err){
        dispatch(getProductsFail(err.message));
    }

}