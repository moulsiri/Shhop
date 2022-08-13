const user=require('../models/users');
const product=require('../models/product');

let createProductCard=async(req,res)=>{
    try{
      
        const {n,img,t,oP,dis}=req.body;
        let amount=oP-((oP*dis)/100);
        let data=await product.create({
            name:n,
            imageURL:img,
            price:amount,
            type:t,
            oldPrice:oP,
            discount:dis
         })
         await res.status(201).json({"mssg":"DONE!",data:data});
        
    }
    catch(err){
      console.log(err)
    }

}

let addToCart=async(req,res)=>{
    try{
       
        let userData=await user.findOne({
            username:req.session.passport.user
        })
        let cData=await product.findOne({
            _id:req.params.id
        })
        if (cData.addedBy.map(obj => obj.username).indexOf(req.session.passport.user) === -1) {
            cData.addedBy.push({ username: req.session.passport.user, count: 1 });
            await userData.cart.push(req.params.id);
          } else {
            let loc = cData.addedBy.map(obj => obj.username).indexOf(req.session.passport.user);
            // console.log(cData.addedBy.map(obj => obj.username).indexOf(req.session.passport.user))
            cData.addedBy[loc].count++;
          }
          cData.markModified("addedBy")
          await cData.save();
          await userData.save();
          await res.json({"mssg":"DONE!"});
        // res.status(200).json({cData});

    }catch(err){
        console.log(err);

    }
   

}

let removeFromCart=async(req,res)=>{
    try{
        let userData = await user.findOne({
            username: req.session.passport.user
          })
          let cData = await product.findOne({
            _id: req.params.id
          })
          let loc = cData.addedBy.map(obj => obj.username).indexOf(req.session.passport.user);
          // res.send(cData.addedBy[loc]);
          if (cData.addedBy[loc].count !== 0) {
            cData.addedBy[loc].count--;
            cData.markModified("addedBy")
            if (cData.addedBy[loc].count === 0) {
              let location = userData.cart.indexOf(req.params.id);
              await userData.cart.splice(location, 1)
              await cData.addedBy.splice(loc, 1)
            }
        
          } else {
            let location = userData.cart.indexOf(req.params.id);
            await userData.cart.splice(location, 1)
            await cData.addedBy.splice(loc, 1)
        
          }
          await cData.save();
          await userData.save();
          await req.json({"mssg":"item is removed from the cart"})


    }catch(err){

    }

}
let showProductCards=async(req,res)=>{
  let cards=await product.find();
  res.status(200).json({products:cards});
}

module.exports={
    createProductCard,
    addToCart,
    removeFromCart,
    showProductCards
}