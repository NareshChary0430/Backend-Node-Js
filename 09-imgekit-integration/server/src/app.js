import express from "express";
const app = express();
app.use(express.json());

import postRoutes from "./routes/post.route.js"

import dotenv from "dotenv";
dotenv.config();



app.use('/api/post',postRoutes)

app.get("/",(req,res)=>{
    res.send("hello");
})




export default app;