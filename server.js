const mongoose = require("mongoose");

const app = require("./app");
const dotenv = require("dotenv");

const DB_HOST = process.env.DB_HOST;

const PORT = process.env.PORT;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("db connected");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
