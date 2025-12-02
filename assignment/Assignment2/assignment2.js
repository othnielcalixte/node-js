const express = require("express");

const app = express();

app.use("/add", (req, res, rext) => {
  console.log("thing in the console");
  res.send("<h1>The first one</h1>");
});

app.use("/", (req, res, rext) => {
  console.log("response 2");
  res.send("<h1>The second one</h1>");
});

app.listen(3000);
