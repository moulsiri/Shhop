import axios from 'axios';


// to creat new product 
export const createProduct=(data)=>axios.post('/api/v1/products',data);
export const getAdminProducts=()=>axios.get('/api/v1/products/admin/allProducts');