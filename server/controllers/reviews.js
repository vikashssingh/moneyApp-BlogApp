import mongoose from "mongoose";
import ReviewM from "../models/reviewM.js";

export const getReviews = async (req, res) => {
    try {
        const { blog_id } = req.params;
        const reviews = await ReviewM.findById(blog_id);
        res.status(200).json(reviews);

    } catch (error) {
        res.status(404).json({message: error});
        
    }
}

export const createReview = async (req, res) => {
    const review = req.body;
    const newReview = new ReviewM(review);

    try {
        await newReview.save();
        res.status(201).json(newReview);

    } catch (error) {
        res.status(409).json({message: error});

    }
}