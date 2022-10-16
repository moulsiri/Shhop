import { CircularProgress } from '@mui/material';
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getAdminUsersAsync } from '../../../asyncActions/admin/adminUserAction';
import AdminUserTable from './AdminUserTable';
const AdminUsers = () => {
  const dispatch=useDispatch();
  const {usersList,loading,success}=useSelector((s)=>s.adminUsers);
  useEffect(()=>{
    dispatch(getAdminUsersAsync());
  },[])
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