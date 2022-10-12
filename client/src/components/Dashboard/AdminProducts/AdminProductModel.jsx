import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import './adminProduct.scss';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Avatar, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useAlert } from 'react-alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:600,
    overflow:'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
  };
const AdminProductModel= ({open,setOpen,Heading,Item}) => {
  const alert=useAlert();
  const dispatch=useDispatch();
    const {products }=useSelector((e)=>e.products)
    const [details,setDetail]=useState({
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
    useEffect((e)=>{
      if(Item!=='new'){
        setDetail(products[Item]);
      }else{
        setDetail({
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
      }

    },[Item])



    const getValues=(e)=>{
      setDetail({...details,[e.target.name]:e.target.name==='tags'?e.target.value.split(" "):e.target.value});
    }

    const submitDetails=()=>{
      console.log(details)
    }
  return (
    <Modal
    open={open}
    onClose={()=>{setOpen(!open)}}>
     <Box sx={style}>
      <div id="pModelHeader">
      <Typography color="secondary" variant="h6" component="h2">{Heading}</Typography>
      {(Item!=='new')
        ?<Typography color="primary" variant="caption" component="p">Product id: {details._id}</Typography>
        :""}
      </div>  
      <div id="pModelBody">
        <div className="pElm">
        <Avatar alt={details.name} src={details.image} sx={{ width: 100, height: 100,marginRight:'1em' }} />
          <div>
            <TextField 
     id="name" 
     label="name" 
     size="small"
     variant="outlined"
     onChange={getValues}
     name="name"
     value={details.name}
     sx={{paddingBottom:'1em'}} />
     
     <FormControl sx={{ m: 1,width:'60%' }}>
     <InputLabel id={'category'}>category</InputLabel>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={details.category}
    name="category"
    label="category"
    onChange={getValues}
    size="small"
  >
    <MenuItem value={'footwear'}>footwear</MenuItem>
    <MenuItem value={'appliances'}>appliances</MenuItem>
    <MenuItem value={'beauty'}>beauty</MenuItem>
    <MenuItem value={'groceries'}>groceries</MenuItem>
    <MenuItem value={'fashion'}>fashion</MenuItem>
  </Select>
     </FormControl>
          </div>
            
        </div>
       
     <div className="pElm">
      <TextField 
     id="oldPrice" 
     label="oldPrice" 
     variant="outlined"
     onChange={getValues}
     name="oldPrice"
     size="small"
     value={details.oldPrice}
     sx={{paddingBottom:'1em',margin:'1em'}} />
         <TextField 
     id="discount" 
     label="discount" 
     variant="outlined"
     onChange={getValues}
     name="discount"
     size="small"
     value={details.discount}
     sx={{paddingBottom:'1em',margin:'1em'}} />
     
<TextField 
     id="Stock" 
     label="Stock" 
     variant="outlined"
     onChange={getValues}
     name="Stock"
     size="small"
     value={details.Stock}
     sx={{paddingBottom:'1em',margin:'1em'}} />
     </div>
    
    <TextField 
     id="Note" 
     label="Note" 
     variant="outlined"
     onChange={getValues}
     name="Note"
     size="small"
     value={details.Note}
     sx={{paddingBottom:'1em'}} />
     <TextField
          label="Description"
          multiline
          maxRows={4}
          name="description"
          value={details.description}
          onChange={getValues}
          sx={{paddingBottom:'1em'}}
        />
       
        <TextField 
     id="imageLink" 
     label="Image Link" 
     variant="outlined"
     onChange={getValues}
     name="image"
     size="small"
     value={details.image}
      />
      <div className="pElm">
        <TextField
          label="Tags"
          name="tags"
          onChange={getValues}
          size="small"
          value={details.tags.join(" ")}
          sx={{width:'50%'}}
        />
        <div id="pTags">
          {
            details.tags.map((e,i)=> (e.length!==0)?<Chip key={i} label={e} color="primary" size="small"/>:"")

          }
        </div>
        
          
     

        </div>
        



      </div>
    

    
    
   


     <Button variant="contained" color="secondary" style={{marginTop:"1em"}} onClick={submitDetails}>Submit</Button>
     </Box>


    </Modal>
  )
}

export default AdminProductModel