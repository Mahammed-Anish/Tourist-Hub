const express = require("express");
const app = express();
const users = require("./routes/user");
const practice = require("./routes/practice");

app.get("/", (req, res) => {
  res.send("Hi I am a User Root");
});

app.use("/users", users);
app.use("/practice", practice);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
