const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  const token = authHeader ? authHeader.split(" ")[1] : "";
  try {
    const user = jwt.verify(token, process.env.TOKEN_KEY);
    req.body.user = user;
    next();
  } catch {
    res.status(401).json({ message: "Invalid Token !" });
  }
};

exports.authMiddleware = authMiddleware;
