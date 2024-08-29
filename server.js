const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const body = require("body-parser");
const { readdirSync } = require("fs");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

const app = express();
connectDB();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

// auto
readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(5000, () => console.log("Server is Running 5000"));
