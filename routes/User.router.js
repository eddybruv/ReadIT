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
    imageUrl: '',
    preference,
  });
  newUser.save();
  res.json({ message: "new user created", data: newUser });
});

router.get("/get-users", async (req, res) => {
  const users = await UserModel.find({});
  users
    ? res.json({ message: "found users", data: users })
    : res.json({ message: "no user found" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password });

  user
    ? res.json({ message: "found user", data: user })
    : res.json({ message: "user not found" });
});

router.post("/update-user", async (req, res) => {
  const { _id, imageUrl, preference } = req.body;
  await UserModel.findByIdAndUpdate({_id}, { imageUrl, preference });
  const user = await UserModel.findById({_id});

  user
    ? res.json({ message: "user updated", data: user })
    : res.json({ message: "user not updated" });
});

module.exports = router;
