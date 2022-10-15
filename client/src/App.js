import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Navbar from "./components/navbar.js";
import Blogs from "./components/Blogs/blogs.js";
import Form from "./components/form.js";
import { getBlogs } from './actions/blogs'

export default function App() {
    const [currentId, setCurrentId] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getBlogs())
    }, [currentId, dispatch] );

    return (
        <div className="container">
            <Navbar showForm = {showForm} setShowForm = {setShowForm}/>
            <div className= {!showForm ? 'visually-hidden container m-2' : ''}>
                <Form currentId = {currentId} setCurrentId = {setCurrentId}/> 
            </div>
            <div className="container">
                    <Blogs setCurrentId = {setCurrentId}/>
            </div>
            
        </div>
    )
}

