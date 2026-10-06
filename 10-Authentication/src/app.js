const express = require('express');
const userModel = require("./models/user.model");
const authenticate = require("./middleware/auth.middleware")
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());


app.get("/",(req,res)=>{
  res.send("Hello from the home page");
})


app.post("/api/auth/register",async(req,res)=>{


  const {email,name,password} = req.body;

  const user = await userModel.create({email,name,password});

  // jwt token is used to travel every protected route successfully

  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);


  res.status(201).json({
    message:"User registered successfully",
    data:{
      user:{
        email,
        name,
        id:user._id,
      },
      token
    }
  })


})



app.get("/api/auth/me",authenticate,async(req,res)=>{

  console.log(req.user);

  res.status(200).json({
    data:{
      user:req.user
    }
  })

})


module.exports = app;