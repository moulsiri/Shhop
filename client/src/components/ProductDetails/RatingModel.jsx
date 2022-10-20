import { Box, Button, Modal, Rating, TextField } from '@mui/material';
import React from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
  };
const RatingModel = ({open,setOpen,rating}) => {
  return (
    <Modal
    open={open}
    onClose={()=>{setOpen(!open)}}>
         <Box sx={style}>
         <Rating name="read-only" value={rating} size="small" precision={0.5} readOnly />
         <TextField
          sx={{margin:'1em 0'}}
          label="Your comment"
          multiline
          rows={4}
        />
        <Button variant="contained" disableElevation>
            Submit
      </Button>
         </Box>

    </Modal>
  )
}

export default RatingModel