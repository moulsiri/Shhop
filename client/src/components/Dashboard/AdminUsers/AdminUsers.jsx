import { CircularProgress } from '@mui/material';
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import AdminUserTable from './AdminUserTable';
const AdminUsers = () => {
  const dispatch=useDispatch();
  const {usersList,loading,success}=useSelector((s)=>s.adminUsers);

  return (
    <>
      <div id="aOrderHeader">
      <h1>All Users Details</h1>
    </div>
    {
      (!loading && success)
    ?<AdminUserTable rows={usersList}></AdminUserTable>
    :<CircularProgress />
    }
    
    </>
  
  )
}

export default AdminUsers