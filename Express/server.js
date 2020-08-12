const express = require("express");
const userRouter = require("./routes/users-routes");
const app = express();

app.use(express.json());

app.use("/users", (req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.listen(3000, () => {
  console.log("LISTENING on PORT 3000...");
});
