const express = require("express");
const postsController = require("../controllers/posts-controller");
const router = express.Router();

router.get("/", postsController.getPosts);

router.post("/", postsController.createPost);

router.get("/:id", postsController.getPostById);

router.put("/:id", postsController.updatePost);

router.delete("/:id", postsController.deletePost);
module.exports = router; // Default Export
// exports.postRouter = router; // NOT default export
