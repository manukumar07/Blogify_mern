// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const Post = require("../models/Post");
// const Comment = require("../models/Comment");
// const VerifyToken = require("../VerifyToken");

// //CREATE
// router.post("/create", VerifyToken, async (req, res) => {
//   try {
//     const newPost = new Post(req.body);
//     // console.log(req.body)
//     const savedPost = await newPost.save();

//     res.status(200).json(savedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //UPDATE
// router.put("/:id", VerifyToken, async (req, res) => {
//   try {
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //DELETE
// router.delete("/:id", VerifyToken, async (req, res) => {
//   try {
//     await Post.findByIdAndDelete(req.params.id);
//     await Comment.deleteMany({ postId: req.params.id });
//     res.status(200).json("Post has been deleted!");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET POST DETAILS
// router.get("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET POSTS
// router.get("/", async (req, res) => {
//   const query = req.query;

//   try {
//     const searchFilter = {
//       title: { $regex: query.search, $options: "i" },
//     };
//     const posts = await Post.find(query.search ? searchFilter : null);
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// //GET USER POSTS
// router.get("/user/:userId", async (req, res) => {
//   try {
//     const posts = await Post.find({ userId: req.params.userId });
//     res.status(200).json(posts);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
// routes/post.js
const express = require("express");
const router = express.Router();
// const verifyToken = require('../verifyToken');
const verifyToken = require("../middleware/VerifyToken");
const {
  createPost,
  updatePost,
  deletePost,
  getPostDetails,
  getAllPosts,
  getUserPosts,
} = require("../controllers/postController");

// CREATE POST
router.post("/create", verifyToken, createPost);

// UPDATE POST
router.put("/:id", verifyToken, updatePost);

// DELETE POST
router.delete("/:id", verifyToken, deletePost);

// GET POST DETAILS
router.get("/:id", getPostDetails);

// GET ALL POSTS WITH SEARCH QUERY
router.get("/", getAllPosts);

// GET USER POSTS
router.get("/user/:userId", getUserPosts);

module.exports = router;
