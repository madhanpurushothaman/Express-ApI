const express = require("express");
const router = express.Router();
const Post = require("../modles/Post");
const {
  RecipePost,
  RecipeSpecificPost,
  DeletePost,
  UpdatePost,
} = require("../Controllers/RecipePost");

//SUBMITS A POST
router.post("/", RecipePost);

//SPECIFIC POST

router.get("/:postId", RecipeSpecificPost);

//DELETE POST
router.delete("/:postId", DeletePost);

//UPDATE A POST
router.patch("/:postId", UpdatePost);

module.exports = router;
