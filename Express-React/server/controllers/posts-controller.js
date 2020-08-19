const postsModel = require("../models/posts-model");

const getPosts = async (req, res) => {
  const posts = await postsModel.getPosts();

  res.json(posts);
};

const createPost = async (req, res) => {
  const post = await postsModel.createPost({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  });
  res.status(201).json(post);
};

const getPostById = async (req, res) => {
  console.log(req.params.id);
  const post = await postsModel.getPostById(req.params.id);
  res.json(post);
};

const updatePost = async (req, res) => {
  const posts = await postsModel.updatePost(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  });
  res.status(202).json(posts);
};
const deletePost = (req, res) => {
  const posts = postsModel.deletePost(req.params.id);
  res.status(205).json(posts);
};
exports.getPosts = getPosts;
exports.createPost = createPost;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
