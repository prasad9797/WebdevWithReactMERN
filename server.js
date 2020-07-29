const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = require("./config/keys").mongoURI;

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log("mongo db connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("hello world!!Fuck u"));

const port = process.env.PORT || 5100;
app.listen(port, () => console.log(`Server running on port ${port}`));
