import express from 'express';
import {getOrdersForAdmin, getUserOrders, newOrder} from '../controllers/orderController.js'
import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';
const router=express.Router();

router.post("/",isAuthenticatedUser,newOrder);
router.get("/userOrders",isAuthenticatedUser,getUserOrders);
router.get("/allOrders",isAuthenticatedUser,authorizeRoles("admin"),getOrdersForAdmin); //admin route

export default router;