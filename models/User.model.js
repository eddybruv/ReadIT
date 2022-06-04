const mongoose = require("mongoose");

// create user model
const UserSchema = new mongoose.Schema(
  {
    name: {type: String },
    email: {type: String  },
    password: {type: String },
    username: {type: String },
    imageUrl: {type: String },
    preference: {type: []}
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);