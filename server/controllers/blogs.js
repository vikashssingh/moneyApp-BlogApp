import mongoose from "mongoose";
import BlogM from "../models/blogM.js";

export const getBlogs = async (req, res) => {
    try {
        const blogs = await BlogM.find();
        res.status(200).json(blogs);

    } catch (error) {
        res.status(404).json({message: error});
        
    }
}

export const createBlogs = async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogM(blog);

    try {
        await newBlog.save();
        res.status(201).json(newBlog);

    } catch (error) {
        res.status(409).json({message: error});

    }
}

export const updateBlogs = async (req, res) => {
    const { id } = req.params;
    const blog = req.body;
    const uDate = new Date();

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid blog');
    
    const updatedBlog = await BlogM.findByIdAndUpdate(id, {...blog, uDate}, { new: true });
    
    res.json(updatedBlog);
}

export const deleteBlogs = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid blog');
    
    await BlogM.findByIdAndRemove(id);
    
    res.json({ message: 'Blog deleted!' });
}