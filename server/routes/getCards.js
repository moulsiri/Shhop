import express from 'express';
import { createCard, deleteCard, getCards, getProductDetails, getProductsAdmin, updateProductDetails } from '../controllers/ProductCards.js';
import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

const router=express.Router();
router.get('/', getCards);
router.get('/details/:id',getProductDetails);

//admin routes
router.post('/',isAuthenticatedUser,authorizeRoles("admin"),createCard);
router.route('/admin/delete/:id').delete(isAuthenticatedUser, authorizeRoles("admin"),deleteCard);
router.get('/admin/allProducts',isAuthenticatedUser,authorizeRoles('admin'),getProductsAdmin);
router.put('/admin/update/:id',isAuthenticatedUser,authorizeRoles('admin'),updateProductDetails);
export default router;