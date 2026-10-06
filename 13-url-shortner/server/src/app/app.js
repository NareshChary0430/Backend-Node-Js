import express from "express";

const app = express();
app.use(express.json());

import urlRoutes from "../routes/url.route.js";
import urlModel from "../models/url.model.js";


app.use("/api/url", urlRoutes);

/**
 * @GET http://localhost:3000/api/url/:shortCode
 */


app.get("/:code",async (req,res)=>{
    const {code} = req.params;

    const url = await urlModel.findOne({shortCode:code});

    if(!url) {
        return res.status(404).json({error: "Short URL not found"});
    }

    res.redirect(302, url.originalUrl);

    await urlModel.findOneAndUpdate({shortCode:code},{$inc:{clicks:1}});

});



export default app;


















