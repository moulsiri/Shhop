import express from 'express';
import { createCard, deleteCard, getCards } from '../controllers/ProductCards.js';
import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

const router=express.Router();
router.get('/', getCards);
router.post('/',isAuthenticatedUser,authorizeRoles("admin"),createCard);
router.delete('/:id',isAuthenticatedUser,authorizeRoles('admin'),deleteCard);

export default router;