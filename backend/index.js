
  const express = require('express');
  const mongoose = require('mongoose');
  const dotenv = require('dotenv');
  const errorMiddleware = require("./middlewares/error");
  const cors = require('cors');
  const cookieParser = require("cookie-parser");
  const bodyParser = require("body-parser");
  const stripe = require('stripe')("sk_test_51NoPYESARFgxIzE4AlNOaISGssBKsrD9E95GWI6IYHj7rCxm3hbsy4E0aCZDy0xVQnsBzomwpXlYE4e1DGe21MiZ00oIrKzDrr")

 

    
  dotenv.config();
   const app= express();

   const dbURL = 'mongodb://127.0.0.1:27017/E-commerce-app';
   mongoose.connect(dbURL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     
   }).then(()=>{
        console.log(" mongodb connected")
   }).catch((err)=>{                    
        console.log(err);
   })       

   // middleware
   app.use(express.json());
   app.use(
     cors({
       origin: ["http://localhost:3000"],
       methods: ["GET", "POST", "PUT", "DELETE"],
       credentials: true,
     })
   );
   app.use(cookieParser());
   app.use(bodyParser.urlencoded({ extended: true }));


    


    
  // import Routes
  const products = require('./routes/productRoutes');
  const userRoutes  = require("./routes/userRoutes")
   
   app.use("/api/v1", products);  
   app.use("/api/v1", userRoutes);  
   
   
   app.post("/api/v1/payment",async(req,res)=>{
     const cartItems = req.body;
 
 
     const lineItems = cartItems.map((product)=>({
         price_data:{
             currency:"inr",
             product_data:{
                 name:product.name,
                 images:[product.image]
             },
             unit_amount:product.price *100,
         },
         quantity:product.quantity
     }));
 
     const session = await stripe.checkout.sessions.create({
         payment_method_types:["card"],
         line_items:lineItems,
         mode:"payment",
         success_url:"http://localhost:3000/success",
         cancel_url:"http://localhost:3000/cancel"
         
     });
     console.log(session);
 
     res.json(session.url)
  
 })

  





   app.use(errorMiddleware);


   app.listen( 8000 , ()=>{
        
    console.log(" Running on port 8000")
   })