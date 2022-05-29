const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const BookModel = require("../models/Book.model");

router.post("/add-books", (req, res) => {
  const {
    title,
    author,
    publishedDate,
    description,
    pageCount,
    smallThumbnail,
    thumbnail,
    previewLink,
    saleability,
    userID,
  } = req.body;

  const newBook = new BookModel({
    title,
    author,
    publishedDate,
    description,
    pageCount,
    smallThumbnail,
    thumbnail,
    previewLink,
    saleability,
    userID,
  });

  newBook.save();

  res.json({ message: "created new book", data: newBook });
});

router.post("/get-books", (req, res) => {
  const { userID } = req.body;
  const books = BookModel.find({ userID }).populate({
    path: "userID",
    select: "-password",
  });

  books
    ? res.json({ message: "books found", data: books })
    : res.json({ message: "no books found" });
});

module.exports = router;
