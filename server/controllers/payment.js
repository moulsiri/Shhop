const Razorpay = require('razorpay');

var instance = new Razorpay({ key_id: 'rzp_test_OI8ne56dSAy7VU', key_secret: 'MESdiZyXSAbdD9wBPp1Pxchy', });


let createOrder=(req,res)=>{
    var options = {
        amount: req.params.price,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcptid_11d"
      };
      instance.orders.create(options, function (err, order) {
        // console.log(order);
        res.json({ orderId: order.id });
      });

}
let paymentvarify=(req,res)=>{
    let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
  
    var crypto = require("crypto");
    var expectedSignature = crypto.createHmac('sha256', 'MESdiZyXSAbdD9wBPp1Pxchy')
      .update(body.toString())
      .digest('hex');
    // console.log("sig received ", req.body.razorpay_signature);
    // console.log("sig generated ", expectedSignature);
    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.razorpay_signature) {
      response = { "signatureIsValid": "true" }
      // emptyCart(req.session.passport.user);
    }
    res.send(response);
}
  
module.exports={
    createOrder,
    paymentvarify
}
  