import express from 'express';
import {newOrder} from '../controllers/orderController.js'
import { isAuthenticatedUser } from '../middleware/auth.js';
const router=express.Router();

router.post("/",isAuthenticatedUser,newOrder);


export default router;