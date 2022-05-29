const mongoose = require("mongoose");

// create user model
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    imageUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);