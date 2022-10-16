import axios from 'axios';


// to creat new product 
export const createProduct=(data)=>axios.post('/api/v1/products',data);
export const getAdminProducts=()=>axios.get('/api/v1/products/admin/allProducts');



//orders
export const getAdminOrders=()=>axios.get('/api/v1/order/admin/allOrders');





//users
export const getAdminUsers=()=>axios.get('/api/v1/user/admin/allUsers');