const mongoose = require("mongoose");

const uri = process.env.DB_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log(err));

module.exports = mongoose;
