const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("/PRACTICE GET REQUEST");
  res.send("/PRACTICE GET REQUEST");
});

router.post("/", (req, res) => {
  console.log("/PRACTICE POST REQUEST");
  res.send("/PRACTICE POST REQUEST");
});

module.exports = router;
