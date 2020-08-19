const mongoose = require("./mongoose");
const { User } = require("./users-model");
const ObjectId = require("mongoose").Types.ObjectId;

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: ObjectId, ref: "User" },
},{
  timestamps:true
});

const Post = mongoose.model("Post", postSchema);

const getPosts = async () => {
  const posts = await Post.find().populate("author", "_id username").exec();
  return posts;
};

const createPost = async ({ title, description, author }) => {
  const createdPost = new Post({
    title,
    description,
    author: ObjectId(author),
  });
  await createdPost.save();
  await User.findOneAndUpdate(
    {
      _id: ObjectId(author),
    },
    {
      $push: { posts: createdPost._id },
    }
  );
  return createdPost;
};
const getPostById = async (id) => {
  const post = await Post.findById(ObjectId(id)).exec();

  return post;
};
const updatePost = async (id, updatedPost) => {
  await Post.replaceOne(
    {
      _id: ObjectId(id),
    },
    updatedPost
  );
  return updatedPost;
};
const deletePost = async (id) => {
  await Post.deleteOne({
    _id: ObjectId(id),
  });
};

exports.getPosts = getPosts;
exports.createPost = createPost;
exports.getPostById = getPostById;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
