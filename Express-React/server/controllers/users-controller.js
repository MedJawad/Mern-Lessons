const usersModel = require("../models/users-model");

const getUsers = async (req, res) => {
  const users = await usersModel.getUsers();

  res.json(users);
};

const createUser = async (req, res) => {
  try {
    const user = await usersModel.createUser({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  console.log(req.params.id);
  const user = await usersModel.getUserById(req.params.id);
  res.json(user);
};

const updateUser = async (req, res) => {
  const users = await usersModel.updateUser(req.params.id, {
    username: req.body.username,
    password: req.body.password,
  });
  res.status(202).json(users);
};
const deleteUser = (req, res) => {
  const users = usersModel.deleteUser(req.params.id);
  res.status(205).json(users);
};
exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
