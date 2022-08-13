const express=require('express');
const router=express.Router()
const { getUserData}=require('../controllers/user');


router.route('/').get(getUserData);

module.exports=router;