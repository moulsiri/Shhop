const express=require('express');
const router=express.Router()

const {createOrder,paymentvarify}=require('../controllers/payment');

router.route('/:price').get(createOrder);
router.route('/').post(paymentvarify);

module.exports=router