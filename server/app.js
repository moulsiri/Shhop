require("dotenv").config();

const path=require('path');
const express=require('express');
const app=express();


const connectDB=require('./database/connect');
const taskRouter=require('./routes/Productroute');
const mainRouter=require('./routes/mainRoute');
const userInfo=require('./routes/userInfo');
const payment=require('./routes/payment');

const users=require('./models/users');
const passport=require('passport');
const expressSession=require('express-session');

//middleware
const notFoundMiddleware=require('./middleware/not-found');
const errorMiddleware=require('./middleware/error-handler');

app.use(express.json());
//passport authentication 
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"hello"
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());


//routes
app.use('/',mainRouter);
app.use('/api/v1/products',taskRouter);
app.use('/api/v1/userInfo',userInfo);
app.use('/api/v1/rPayment',payment);

//Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname,'../client/build')));

// app other get requests not handled before with return our React app
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/build','index.html'));
})
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port=process.env.PORT || 3020;
const start=async()=>{
    try{
        // console.log(process.env)
        await connectDB("mongodb+srv://mouli:1234@cluster0.zwm7d.mongodb.net/Shhop?retryWrites=true&w=majority");
        app.listen(port,()=>console.log(`Server is listening to port no. ${port}`));   
    }catch(err){
        console.log(err);
    }
}

start();