import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    cDate: {type: Date, default: new Date()},
    uDate: {type: Date, default: new Date()},
    reviewCount: {type: Number, default: 0}
});

const BlogM = mongoose.model("Blogs", blogSchema);
export default BlogM;