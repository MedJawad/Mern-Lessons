const express = require("express");
const usersController = require("../controllers/users-controller");
const router = express.Router();

router.get("/", usersController.getUsers);

router.post("/", usersController.createUser);

router.get("/:id", usersController.getUserById);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);
module.exports = router; // Default Export
// exports.userRouter = router; // NOT default export
