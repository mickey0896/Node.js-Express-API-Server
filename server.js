const express = require("express");
const { readdirSync } = require("fs");
// const productRouters = require("./Route/product");
// const authRouters = require("./Route/auth");
const app = express();

// app.use("/api", productRouters);
// app.use("/api", authRouters);

// auto
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(5000, () => console.log("Server is Running 5000"));
