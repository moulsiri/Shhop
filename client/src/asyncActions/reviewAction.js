import {
    getReviewRequest,
    getReviewSuccess,
    getReviewFail,
    clearError,
    addReviewRequest,
    addReviewSuccess,
    addReviewFail,
    resetUpdateStatus
} from '../features/productReviewSlice';


import * as api from '../api/index'

export const getProductReviewsAsync=(id)=>async (dispatch)=>{
try{
    dispatch(getReviewRequest());
    let fetch=await api.fetchProductReviews(id);
    dispatch(getReviewSuccess(fetch.data.data));

}catch(err){
   dispatch(getReviewFail(err.response.data.message||err.message))
}
}

export const addReviewAsync=(data)=>async (dispatch)=>{
    try{
        dispatch(addReviewRequest())
         api.createReview(data);
         dispatch(addReviewSuccess())
    }catch(err){
        dispatch(addReviewFail(err.response.data.message));
    }
}
export const asyncUpdateStatus=()=>(dispatch)=>{
    setTimeout(()=>{
        dispatch(resetUpdateStatus())
    },2000)
}