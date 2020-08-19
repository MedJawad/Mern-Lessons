const express = require("express");
require('dotenv').config();
const userRouter = require("./server/routes/users-routes");

const postRouter = require("./server/routes/posts-routes");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(
  path.join(__dirname,"client/build")
));

app.use("/api/users", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname,"client/build/","index.html"));
}
);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("LISTENING on PORT 3000...");
});
