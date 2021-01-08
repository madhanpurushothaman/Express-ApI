const Post = require("../modles/Post");

//GET BACK AL THE POST
exports.getRecipe = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};
//GET SPECIFIC POST WITH INGRIDENT AND DISH SPECIFIED
exports.getSpecificRecipe = async (req, res) => {
  try {
    var ingredientscs = req.params.ingredients;
    var ingredientArr = ingredientscs.split(",");
    const posts = await Post.find({
      ingredients: { $in: ingredientArr },
      title: { $regex: req.params.dish.charAt(0).toUpperCase() },
    });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
};
