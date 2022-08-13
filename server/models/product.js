let mb=require('mongoose');
const productSchema=mb.Schema({
    name:String,
    price:Number,
    imageURL:String,
    addedBy:[
        {
            type:mb.Schema.Types.Mixed
        }
    ],
    type:String,
    oldPrice:Number,
    discount:Number,
})

module.exports=mb.model('product',productSchema);