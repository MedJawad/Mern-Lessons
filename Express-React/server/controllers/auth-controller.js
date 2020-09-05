const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");

const loginWithUsernameAndPassword = async (req, res) => {
  const user = await usersModel.loginWithUsernameAndPassword(
    req.body.username,
    req.body.password
  );
  if (!user) res.status(401).json({ message: "Wrong Username Or Password !" }); //Unauthorized
  const token = jwt.sign(user.toJSON(), process.env.TOKEN_KEY, {
    expiresIn: 60 * 60,
  });
  res.json({ username: req.body.username, token });
};

exports.loginWithUsernameAndPassword = loginWithUsernameAndPassword;
