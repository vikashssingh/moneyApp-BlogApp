import React from "react";
import { useSelector } from 'react-redux';
import Blog from "./Blog/blog";

export default function Blogs({setCurrentId}) {
    const blogs = useSelector((state) => state.blogs);
    
    return (
            !blogs.length ? <h3 className="text-center">Blogs coming soon...</h3> : (
                <div className="container">
                    <div className="row">
                        {blogs.map((blog) => (
                            <div className="col-12 p-2" key={blogs._id}>
                               <Blog blog = {blog} setCurrentId={setCurrentId}/>
                            </div>
                        ))}
                    </div>
                </div>
            )
    )
}