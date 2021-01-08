const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postsRoute = require("./routes/RecipePost");
const getRoute = require("./routes/RecipeGet");
const bodyParse = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());
app.use("/", bodyParse.json());

//IMPORT ROUTES
app.use("/posts", postsRoute);
app.use("/recipe", getRoute);

//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log("connected to db");
  }
);

app.listen(3001);
