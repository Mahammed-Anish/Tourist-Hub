const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("/USER GET REQUEST");
  res.send("/USER GET REQUEST");
});

router.post("/", (req, res) => {
  console.log("/USER POST REQUEST");
  res.send("/USER POST REQUEST");
});

module.exports = router;
