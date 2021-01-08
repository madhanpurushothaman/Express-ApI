const Post = require("../modles/Post");

//SUBMITS A POST
exports.RecipePost = async (req, res) => async (req, res) => {
  const post = new Post({
    title: req.body.title,
    href: req.body.href,
    ingredients: req.body.ingredients,
    thumbnail: req.body.thumbnail,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
};

//SPECIFIC POST
exports.RecipeSpecificPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

//DELETE POST
exports.DeletePost = async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
};
//UPDATE A POST
exports.UpdatePost = async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
};
