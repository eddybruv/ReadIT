const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pageCount: { type: Number, required: true },
    smallThumbnail: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    previewLink: {
      type: String,
      required: true,
    },

    userID: { type: mongoose.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("books", BookSchema);
