import mongoose from 'mongoose';
const productSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please provide name for the product"]
  },
  category:{
    type:String,
    required:[true,"please provide the category name"]
  },
  description:{
    type:String,
    required:[true,"please add description"]
  },
  image:{
    type:String,
    required:[true,"Please provide an image"]
  },
  price:{
    type:Number,
    default:0,
  },
  oldPrice:{
    type:Number,
    default:0,
  },
  discount:{
    type:Number,
    default:0,
  },
  tags:[{
    type:String
  }
  ],
  Note:{
    type:String,
  },
  Stock:{
    type:Number,
    required:[true,"please provide the Stock"],
    max:[1000,"Stock cannot exceed 4 characters"],
    default:1,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }

})
const ProductCard=mongoose.model('ProductCards',productSchema);
export default ProductCard;