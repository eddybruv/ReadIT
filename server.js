const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

// routes
const UserRouter = require("./routes/User.router");
const BookRouter = require("./routes/Book.router");

const app = express();
const dbConnnection = mongoose.connect(process.env.MONGODB_URL);

dbConnnection.then(() => console.log("DB Connected...")).catch(() => console.log("DB not connected..."))

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/user", UserRouter);
app.use("/api/book", BookRouter);

const PORT = process.env.PORT || 8080;

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
