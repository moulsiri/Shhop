import { Avatar, Box, Button, Chip, CircularProgress, Paper, Rating, Skeleton } from '@mui/material';
import {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom'
import {getProductDetailsAsync} from '../../asyncActions/productDetailsAction';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Carousel from 'react-material-ui-carousel'

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import './productDetails.scss'
import RatingModel from './RatingModel';



const ProductDetails = () => {
    const {id}=useParams();
    const {productDetails,loading,success}=useSelector((e)=>e.productDetails)
    const dispatch=useDispatch();
    const [rating,setRating]=useState(0);
    const [ratingModel,setRatingModel]=useState(false)

    useEffect((s)=>{
         dispatch(getProductDetailsAsync(id))
    },[]);

    const style={
      position:"absolute",
      width:"20vmax",
      left:"50%",
      transform:'translate(-50%,-50%)',
      zIndex:99,
      top:'50%'

    }

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
        {/* <Carousel sx={style}>
          {
            productDetails?.images.map((e)=><Paper key={e.public_id}>
              <img src={e.url} alt="imge" width="100%"/>
            </Paper>)
          }
        </Carousel> */}
       
      </div>
     
      <div id="pdRt">
         <div id="pDetails">
         <Stack direction="row" spacing={1}>
          {/* <Skeleton width={"90%"}/> */}
          {
            productDetails?.tags.map((e,i)=> <Chip key={i} color='primary' label={e} />)
          }
         </Stack>

         <Paper sx={{marginTop:'1em',padding:"1em"}} elevation={0}>
         <Typography variant="subtitle2" component="h6" color="secondary">{productDetails?.category.toUpperCase()}</Typography>
         <Typography variant="body2" component="h2">{productDetails?.Note}</Typography>
         <Typography variant="h3" component="h1">{productDetails?.name.toUpperCase()}</Typography>
         <Rating name="read-only" value={productDetails?.ratings || 0} size="small" precision={0.5} readOnly />
         <Typography variant="caption" component="p">({productDetails?.numOfReviews} Reviews)</Typography>
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
         <Rating name="no-value" value={rating} size="large"  onChange={(event, newValue) => {
             setRating(newValue);
            }} />
         <Button variant="contained" color="secondary" endIcon={<EditRoundedIcon />} onClick={()=>setRatingModel(true)}>REVIEW PRODUCT</Button>

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
      <RatingModel open={ratingModel} setOpen={setRatingModel} rating={rating} />
       
    </div>
  )
}

export default ProductDetails