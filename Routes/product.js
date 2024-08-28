const express = require("express");
const router = express();
const {
  read,
  list,
  create,
  update,
  remove,
} = require("../Controllers/product");

router.get("/product", read);
router.get("/product", list);
router.post("/product", create);
router.put("/product", update);
router.delete("/product", remove);

// http://localhost:5000/api/product
router.get("/product", (req, res) => {
  res.send("Hello Endpoin");
});
router.post("/product/:id", (req, res) => {
  res.send(`Hello ${req.params.id} product`);
});
router.post("/product", (req, res) => {
  res.send("post");
});
router.put("/product/:id", (req, res) => {
  res.send(`Hello ${req.params.id} product`);
});

router.delete("/product/:id", (req, res) => {
  res.json({ name: "mix", id: 123 });
});

module.exports = router;
