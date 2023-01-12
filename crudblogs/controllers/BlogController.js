//const blogService = require("../services/BlogService");
// const BlogModel = require("../models/Blog");


const blogModel=require('../models/Blog'); 
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//one function 
exports.getAllBlogs = async () => {
    return await blogModel.find();
  };
 
exports.createBlog = async (req, res) => {
  try {
    const blog = await blogModel.create(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogModel.find(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogModel.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.delete(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





 
