const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("service API working");
});

module.exports = router;
