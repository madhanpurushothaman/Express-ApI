const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  href: {
    type: String,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
