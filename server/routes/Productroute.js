const express=require('express');
const router=express.Router()
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/');
    }
}

const {
    createProductCard,
    addToCart,
    removeFromCart,
    showProductCards
}=require('../controllers/actions');
router.route('/').post(createProductCard).get(showProductCards);
router.route('/:id').get(isLoggedIn,addToCart).delete(isLoggedIn,removeFromCart);

module.exports=router;