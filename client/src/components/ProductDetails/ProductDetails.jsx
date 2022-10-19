import { Avatar, Box, Button, Chip, CircularProgress, Paper, Rating, Skeleton } from '@mui/material';
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom'
import {getProductDetailsAsync} from '../../asyncActions/productDetailsAction';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import './productDetails.scss'

const ProductDetails = () => {
    const {id}=useParams();
    const {productDetails,
        loading,success}=useSelector((e)=>e.productDetails)
    const dispatch=useDispatch();

    useEffect((s)=>{
         dispatch(getProductDetailsAsync(id))
    },[])
    

  return (
    <div className='productDetails'>
      <div id="pdLft">
        <div id="mainImg">
           {
            (loading)
            ?<Skeleton variant="rounded" width={"90%"} height={'40vmax'} />
        :<img src={productDetails?.image} alt="" />
        
        }
      
        </div>
       
      </div>
     
      <div id="pdRt">
         <div id="pDetails">
         <Stack direction="row" spacing={1}>
          {/* <Skeleton width={"90%"}/> */}
          {
            productDetails?.tags.map((e,i)=> <Chip color='primary' label={e} />)
          }
         </Stack>

         <Paper sx={{marginTop:'1em',padding:"1em"}} elevation={0}>
         <Typography variant="subtitle2" component="h6" color="secondary">{productDetails?.category.toUpperCase()}</Typography>
         <Typography variant="body2" component="h2">{productDetails?.Note}</Typography>
         <Typography variant="h3" component="h1">{productDetails?.name.toUpperCase()}</Typography>
         <Rating name="read-only" value={3.5} size="small" precision={0.5} readOnly />
         <Typography variant="caption" component="p">(2 Reviews)</Typography>
         {/* <Typography variant="h6" component="h6"><Skeleton></Skeleton></Typography>
         <Typography variant="subtitle2" component="h2"><Skeleton></Skeleton></Typography>
         <Typography variant="h3" component="h1"><Skeleton></Skeleton></Typography> */}
         {/* <Rating name="read-only" value={3.5} size="small" precision={0.5} readOnly /> */}
         {/* <Typography variant="caption" component="p"><Skeleton></Skeleton></Typography> */}




         </Paper>
         <Box mt={4}>
         <Button variant="contained" color="primary" endIcon={<ShoppingCartRoundedIcon />}>ADD TO CART</Button>

         </Box>
         <Paper sx={{marginTop:'1em',padding:"1em"}} elevation={0}>
         <Typography variant="subtitle2" component="h2">ITEM DESCRIPTION</Typography>
         <Typography variant="body2" mt={2} component='p' paragraph>{productDetails?.description}</Typography>
         <Typography variant="body2" mt={2} component='p' paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum ratione iure aliquam harum maxime alias? Fugiat voluptate voluptatem minus quia officiis. Quos quod accusantium nulla molestiae ullam mollitia qui!</Typography>

         </Paper>
         <Box sx={{display:'flex',alignItems:'center',justifyContent:"space-around"}} mt={4}>
         <Rating name="no-value" value={null} size="large" />
         <Button variant="contained" color="secondary" endIcon={<EditRoundedIcon />}>REVIEW PRODUCT</Button>

         </Box>
        <Box sx={{}} mt={4}>
          <Paper sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:"1em"}} elevation={3}>
             <Avatar>H</Avatar>
         <Box sx={{display:'flex',flexDirection:'column',marginLeft:'1em'}}>
          <Typography variant="subtitle2" component="h3">Moulsiri Awasthi</Typography>
          <Rating name="no-value" value={4} size="small" />
          <Typography variant="caption" component='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sunt?</Typography>

         </Box>
          </Paper>
        </Box>
          
        

         
          
        
      
         </div>
      </div>
       
    </div>
  )
}

export default ProductDetails