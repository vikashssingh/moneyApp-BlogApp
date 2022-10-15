import axios from 'axios';

const url = "https://moneyappbackend.herokuapp.com/";

export const fetchBlogs = () => axios.get(url);
export const createBlog = (newBlog) => axios.post(url, newBlog);
export const updateBlog = (id, updatedBlog) => axios.patch(`${url}/${id}`, updatedBlog);
export const deleteBlog = (id) => axios.delete(`${url}/${id}`);

export const fetchReviews = () => axios.get(`${url}/reviews`);
export const createReview = (newReview) => axios.post(`${url}/reviews`, newReview);
