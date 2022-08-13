
const mb=require('mongoose');
const connectDB=(url)=>{
    return mb.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
module.exports=connectDB