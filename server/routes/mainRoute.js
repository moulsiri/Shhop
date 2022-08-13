const express=require('express');
const router=express.Router();
const passport=require('passport');
const local=require('passport-local');
const user=require('../models/users');

passport.use(new local(user.authenticate()));
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        res.redirect('/');
    }
}


router.post('/signup', async function (req, res) {
    // console.log(req.body);
    const {name,username,password}=req.body;
  
    let nUser = new user({
      name: name,
      username: username
    })
    user.register(nUser, password).then(function () {
      passport.authenticate('local')(req, res, function () {
          res.json({mssg:true});
      })
    })
      .catch(function (e) {
        console.log(e);
        res.json({mssg:false});
      })
  
  })
  
  router.post('/login', passport.authenticate('local'), function (req, res, next) { 
    res.status(200).json({mssg:"login successfull!"});
  });
  
  router.get('/logout', function (req, res) {
    // console.log(req)
    // req.logOut();
    res.status(200).json({"mssg":req.session.passport.user});
  })

module.exports=router;