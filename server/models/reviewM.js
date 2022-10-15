import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    userId: String,
    description: String,
    cDate: {type: Date, default: new Date()},
    uDate: {type: Date, default: new Date()},
    blog_id: String
});

const ReviewM = mongoose.model("Reviews", reviewSchema);
export default ReviewM;