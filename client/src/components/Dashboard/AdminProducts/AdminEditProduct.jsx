import {useEffect,useState} from 'react'
import { useNavigate,useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { getProductDetailsAsync } from '../../../asyncActions/productDetailsAction';
import noCard from '../../../asset/noCard.png';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import { CircularProgress, Modal } from '@mui/material';
import ProductEditForm from './ProductEditForm';



const style={
    position:'absolute',
    top:'50%',
    left:'60%',
    transform:'translate(-50%,-50%)',
    overflow:'auto',
    maxHeight:600,
    maxWidth:500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
}
const AdminEditProduct = () => {
    const dispatch=useDispatch();
    const {productDetails,loading,success} =useSelector((s)=>s.productDetails);
    const [details,setDetails]=useState(null);

    const Navigate=useNavigate();
    const {id}=useParams();

    useEffect((e)=>{
      if(id==='new'){
        setDetails({
          _id:"",
          name:"",
          category:"",
          price:"",
          discount:"",
          oldPrice:"",
          Stock:"",
          tags:[],
          image:"",
          Note:"",
          description:"",
      })
      }else{
        dispatch(getProductDetailsAsync(id));
        if(success){
          setDetails(productDetails);
        }
      }
    },[success])
  return (
    <>
    <Modal
    sx={{display:'flex',
         justifyContent:'center',
         alignItems:'center'}}
    open={true}
    onClose={()=>{Navigate(-1)}}>
      <Box sx={style}>
      {
        (id==='new' && details)
        ?<><h1>create new card!</h1> <ProductEditForm details={details} 
        work={'create'}
        setDetail={setDetails}/></>
        :(loading)
        ?<CircularProgress/>
        :(success && details)
        ?<ProductEditForm details={details} setDetails={setDetails}/>
        :<img src={noCard} width="90%"/>

      }
        </Box>
    </Modal>
    </>
  )
}

export default AdminEditProduct