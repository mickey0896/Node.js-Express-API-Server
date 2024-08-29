const express = require("express");
const router = express();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

// http://localhost:5000/api/product
router.get("/product/:id", read);
router.get("/product", list);
router.post("/product", create);
router.put("/product/:id", update);
router.delete("/product/:id", remove);

module.exports = router;
