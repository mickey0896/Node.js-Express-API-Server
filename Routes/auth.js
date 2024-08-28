const express = require("express");
const router = express();

// Route 1
router.get("/auth", (req, res) => {
  res.send("Hello auth Endpoin");
});

module.exports = router;
