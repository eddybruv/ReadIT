const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 8080

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
