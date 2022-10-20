import {getAdminProductRequest,
    getAdminProductSuccess,
    getAdminProductFail,
    clearErrors} from '../../features/admin/adminProductSlice';

    import * as api from '../../api/admin';

export const getAdminProductAsync=()=>async (dispatch)=>{
    try{
        dispatch(getAdminProductRequest());
        let fetch=await api.getAdminProducts();
        // console.log(fetch);
        dispatch(getAdminProductSuccess({productsCount:fetch.data.ProductCount,
        products:fetch.data.allProducts}))

    }catch(err){
     dispatch(getAdminProductFail(err.message));
    }
}

export const createNewProductAsync=(data)=>async (dispatch)=>{
    try{
      let fetch=await api.createProduct(data);
      console.log(fetch);
    }
    catch(err){
        console.log(err)
    }
}