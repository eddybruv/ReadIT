const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const UserModel = require("../models/User.model");

router.post("/create-user", (req, res) => {
  const { name, email, password, username, imageUrl, preference } = req.body;
  const newUser = new UserModel({
    name,
    email,
    password,
    username,
    imageUrl,
    preference,
  });
  newUser.save();
  res.json({ message: "new user created", data: newUser });
});

router.get("/get-users", (req, res) => {
  const users = UserModel.find({});
  users
    ? res.json({ message: "found users", data: users })
    : res.json({ message: "no user found" });
});

module.exports = router;
