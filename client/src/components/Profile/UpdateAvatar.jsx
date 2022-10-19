import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import UploadImg from '../utils/Forms/UploadImg';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display:'flex',
    flexDirection:"column",
    alignItems:'center',
  };
const UpdateAvatar = ({open,setOpen}) => {
  return (
    <Modal
    open={open}
    onClose={()=>{setOpen(!open)}}>
         <Box sx={style}>
            <UploadImg></UploadImg>
        </Box>
    </Modal>
    
  )
}

export default UpdateAvatar