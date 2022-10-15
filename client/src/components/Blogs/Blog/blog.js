import React from "react";
import moment from "moment";
import { useDispatch } from 'react-redux';
import { deleteBlog } from "../../../actions/blogs";
import './blog.css';

export default function Blog({blog, setCurrentId}) {
    const dispatch = useDispatch();

    const handleDel = () => {
        dispatch(deleteBlog(blog._id));
    }

    return (
            <div>
                <div className="rounded-2 card blog">
                    <div className="position-absolute d-flex justify-content-end text-secondary">
                        <button className="btn btn-link navbar-brand pt-1 px-0 mx-2" 
                                onClick={() => setCurrentId(blog._id)}>
                                Edit
                        </button>
                        <button className="btn btn-link navbar-brand pt-1 px-0 mx-2"
                            onClick={handleDel}>
                            Del
                        </button>
                    </div>

                    <div className="card-body text-center">
                        <h4 className="card-title text-dark pb-2">{blog.title}</h4>
                        <p className="card-text">{blog.body}</p>
                    </div>
                    
                    <div className="text-secondary d-flex text-capitalize my-0 justify-content-between align-items-end">
                        <p className="mb-1 p-2"> {moment(blog.cDate).fromNow()} </p>
                        {!(blog.uDate === blog.cDate) ? <p className="mb-1 p-2"> Updated {moment(blog.uDate).fromNow()}</p> : <p/> }
                    </div>
                </div>
            </div>
    )
}