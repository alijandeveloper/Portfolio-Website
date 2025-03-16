import express from "express";
import { addBlog, getBlogs, updateBlog, deleteBlog } from "../controllers/blogController.js";

const router = express.Router();

router.post("/add", addBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
