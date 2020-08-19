const mongoose = require("./mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

const userSchema = new mongoose.Schema({
  username: { type: String, minlength: 4, unique: true, required: true },
  password: { type: String, required: true },
  posts: [{ type: ObjectId, ref: "Post" }],
});

const User = mongoose.model("User", userSchema);

const getUsers = async () => {
  const users = await User.find().select({ password: 0, __v: 0 }).exec();
  return users;
};

const createUser = async (user) => {
  const createdUser = new User(user);
  await createdUser.save();

  return createdUser;
};
const getUserById = async (id) => {
  const user = await User.findById(ObjectId(id)).exec();

  return user;
};
const updateUser = async (id, updatedUser) => {
  await User.replaceOne(
    {
      _id: ObjectId(id),
    },
    updatedUser
  );
  return updatedUser;
};
const deleteUser = async (id) => {
  await User.deleteOne({
    _id: ObjectId(id),
  });
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.User = User;
