const mongoose = require("mongoose");

// create user model
const UserSchema = new mongoose.Schema(
  {
    name: {type: String, required: true },
    email: {type: String, required: true  },
    password: {type: String, required: true },
    username: {type: String, required: true },
    imageUrl: {type: String, required: true },
    preference: {type: [String]}
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);