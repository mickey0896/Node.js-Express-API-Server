const express = require("express");
const router = express();

// http://localhost:5000/api/auth
router.get("/auth", (req, res) => {
  res.send("Hello auth Endpoin");
});

module.exports = router;
