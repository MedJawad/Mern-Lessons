const usersModel = require("../models/users-model");
const jwt = require("jsonwebtoken");

const loginWithUsernameAndPassword = async (req, res) => {
  const user = await usersModel.loginWithUsernameAndPassword(
    req.body.username,
    req.body.password
  );
  //   if(!u)

  res.json(user);
};

exports.loginWithUsernameAndPassword = loginWithUsernameAndPassword;
