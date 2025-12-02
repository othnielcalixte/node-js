// const http = require("http");

const express = require("express");

const app = express();

//62. How Middleware Works
//This is adummy middleware that is not doing anything except cl, removed it.
// app.use((req, res, next) => {
//   console.log("In the middleware!");
//   next(); // This allows the request to continue to the next middleware in line
// });

// app.use("/", (req, res, next) => {
//   console.log("This Always runs!");
//   next();
// });

app.use("/add-product", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>The Add Product page</h1>");
});
//After this one is excuted, we are not calling next so the other one will not get executed
//You also do not want to call next, cause only one or the other will get used and this makes it so yu can go from one page to the other

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

// The two things that we have above can done in one line of code:

app.listen(3000); //becaus of this we can remove the http import above

//64. Handling Different Routes
