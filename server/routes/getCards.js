import express from 'express';
import { createCard, getCards } from '../controllers/ProductCards.js';
import { authorizeRoles, isAuthenticatedUser } from '../middleware/auth.js';

const router=express.Router();
router.get('/', getCards);
router.post('/',isAuthenticatedUser,authorizeRoles("admin"),createCard);

export default router;