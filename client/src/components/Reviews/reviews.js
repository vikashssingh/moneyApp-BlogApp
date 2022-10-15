import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews, createReview } from "../../actions/reviews";

export default function Reviews() {
    const [reviewData, setReviewData] = useState({
        userId: "",
        description: "",
        blog_id: "",
    });

    const reviews = useSelector((state) => console.log(state));
    const dispatch = useDispatch();

    const handleReview = (e) => {
        e.preventDefault();

        dispatch(createReview(reviewData));
       
    }
    return (
            <div className="rounded-2 bg-light p-1">
                <form autoCapitalize="off" noValidate onSubmit={handleReview} className="bg-light p-2 m-2 ">
                    <h5>Review</h5>
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">Name</label>
                        <input type="text" name="userId" label="userId" className="form-control" id="userId" value = {reviewData.userId} onChange={(e) => setReviewData({...reviewData, userId: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Review</label>
                        <textarea rows={2} name="description" label="description" className="form-control" id="description" value = {reviewData.description} onChange={(e) => setReviewData({...reviewData, description: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
    )
}