const express = require("express");
const router = express();


// Route 1
router.get("/product", (req, res) => {
  res.send("Hello Endpoin");
});

module.exports = router;
