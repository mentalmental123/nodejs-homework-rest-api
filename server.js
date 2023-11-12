const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("SERVER IS RUNNING");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
