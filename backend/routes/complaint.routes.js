const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("complaint API working");
});

module.exports = router;
