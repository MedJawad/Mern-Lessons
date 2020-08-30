const express = require("express");
const {
  loginWithUsernameAndPassword,
} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/login", loginWithUsernameAndPassword);

module.exports = router;
