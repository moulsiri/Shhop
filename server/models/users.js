const  mongoose=require('mongoose');
const plm=require('passport-local-mongoose');

const userSchema=mongoose.Schema({
    name: String,
  username: {
    type: String,
    unique: true
  },
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    }
  ]

})
userSchema.plugin(plm);
module.exports=mongoose.model('user',userSchema);