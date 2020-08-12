const { ObjectId } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jawad:jawad@cluster0.aqusr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect();

let DUMMY_USERS = [
  { id: 1, name: "Jawad" },
  { id: 2, name: "John" },
];

const getUsers = async () => {
  const users = await client.db().collection("users").find().toArray();
  return users;
};

const createUser = async (user) => {
  await client.db().collection("users").insertOne(user);

  return user;
};
const getUserById = async (id) => {
  const user = await client
    .db()
    .collection("users")
    .findOne({
      _id: ObjectId(id),
    });

  return user;
};
const updateUser = async (id, updatedUser) => {
  await client
    .db()
    .collection("users")
    .replaceOne(
      {
        _id: ObjectId(id),
      },
      updatedUser
    );
  return updatedUser;
};
const deleteUser = async (id) => {
  DUMMY_USERS = DUMMY_USERS.filter((user) => user.id != id);
  return DUMMY_USERS;
};

exports.getUsers = getUsers;
exports.createUser = createUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
