const express = require("express");
const router = express.Router();
const Post = require("../modles/Post");
const { getRecipe, getSpecificRecipe } = require("../Controllers/RecipeGet");

//GET BACK AL THE POST
router.get("/", getRecipe);

//GET SPECIFIC POST WITH INGRIDENT AND DISH SPECIFIED
router.get("/:ingredients/:dish", getSpecificRecipe);

module.exports = router;
