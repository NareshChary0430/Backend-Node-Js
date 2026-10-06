import express from "express";

const router = express.Router();

import generateCode from "../utils/generateCode.js";
import urlModel from "../models/url.model.js";


/**
 * 
 * @POST /api/url
 */


router.post("/", async (req,res)=>{
    const {url} = req.body;

    if(!url) {
        return res.status(400).json({error: "URL is required"});
    }

    if((!url.startsWith("http://") && !url.startsWith("https://"))) {
        return res.status(400).json({error: "Invalid URL format"});
    }

    if(url.length > 2048) {
        return res.status(400).json({error: "URL is too long"});
    }


    const code = generateCode();

    const newUrl = await urlModel.create(
        {
            originalUrl: url,
            shortCode: code,
        }
    );
    res.status(201).json({
        message: "Short URL created successfully",
        data: {
            originalUrl: newUrl.originalUrl,
            shortCode: newUrl.shortCode,
        }
    });
})


/**
 * 
 * @GET /api/url
 * 
 */


router.get("/",async (req,res)=>{
    const urls = await urlModel.find();
    res.status(200).json({
        message: "URLs fetched successfully",
        data: urls,
    });
});


/**
 * @DELETE /api/url/:id
 */


router.delete("/:id",async (req,res)=>{
    const {id} = req.params;

    const url = await urlModel.findById(id);

    if(!url) {
        return res.status(404).json({error: "URL not found"});
    }

    await urlModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "URL deleted successfully",
    });
});

export default router;