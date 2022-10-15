import express from 'express';
import { registerUser,
         Login, 
         LogOut, 
         forgotPassword,
        resetPassword, 
        getUserDetails, 
        updateUserPassword, 
        updateAvatarByLink, 
        updateDetails, 
        updateShipInfo} from '../controllers/userController.js';
        
import { isAuthenticatedUser } from '../middleware/auth.js';
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(Login);
router.route("/logout").get(LogOut);
router.route('/forgot/password').post(forgotPassword);
router.route('/reset/password/:token').put(resetPassword);
router.route('/details').get(isAuthenticatedUser, getUserDetails);
router.route('/update/password').put(isAuthenticatedUser, updateUserPassword);
router.route('/update/avatarViaLink').put(isAuthenticatedUser,updateAvatarByLink);
router.route('/update/details').put(isAuthenticatedUser,updateDetails);
router.route('/update/shipInfo').put(isAuthenticatedUser,updateShipInfo);
export default router;