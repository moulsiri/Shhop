import axios from 'axios';


export const updateUserDetails=(data)=>axios.put('/api/v1/user/update/details',data);