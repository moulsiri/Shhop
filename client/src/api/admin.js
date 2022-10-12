import axios from 'axios';

export const createProduct=(data)=>axios.post('/api/v1/products',data);