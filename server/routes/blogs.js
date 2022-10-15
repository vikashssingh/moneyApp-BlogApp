import express from "express";

import { getBlogs, createBlogs, updateBlogs, deleteBlogs } from "../controllers/blogs.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", createBlogs);
router.patch("/:id", updateBlogs);
router.delete("/:id", deleteBlogs);

export default router;