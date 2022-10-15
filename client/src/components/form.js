import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, updateBlog } from "../actions/blogs";

export default function Form({currentId, setCurrentId}) {
    const [blogData, setBlogData] = useState({
        title: "",
        body: "",
    });
    const blog = useSelector((state) => currentId ? state.blogs.find((b) => b._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() =>{
        if(blog) setBlogData(blog);
    }, [blog]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId){
            dispatch(updateBlog(currentId, blogData));
        }
        else{
            dispatch(createBlog(blogData));
        }
        setCurrentId(null);
        setBlogData({title: "",body: "",});

        
    }
    
    return (
            <div className="bg-white p-2 rounded-2">
                <form autoCapitalize="off" noValidate onSubmit={handleSubmit} className="bg-light p-2 m-2 ">
                    <h5>{!currentId ? 'Create' : 'Edit'} Blog Post</h5>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="title" label="Title" className="form-control" id="title" value = {blogData.title} onChange={(e) => setBlogData({...blogData, title: e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="body" className="form-label">Body</label>
                        <textarea rows={5} name="body" label="Body" className="form-control" id="body" value = {blogData.body} onChange={(e) => setBlogData({...blogData, body: e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}