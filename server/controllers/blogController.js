import Blog from "../models/Blog.js";

// Add Blog
export const addBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json({ message: "Blog Added Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get Blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Update Blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Blog Updated", blog });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
