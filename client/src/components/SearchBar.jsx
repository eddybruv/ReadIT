import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import axios from "axios";
import style from "../styles/searchbar.module.css";
import { useState, useEffect } from "react";
import Card from "./foryouPage/Card";

function SearchBar() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));

  const [results, setResults] = useState([]);
  const [select, setSelect] = useState("intitle:");

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = async (e) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${select}${text}&maxResults=40&key=AIzaSyC6gNm9Y2bLTInrIZ9zMPax2s3Ohw8lJhE`;
    let request = await axios.get(url);
    setResults(request.data.items);
    sessionStorage.setItem("results", JSON.stringify(request.data.items));
  };

  return (
    <>
      <section className={style.body}>
        <section className={style.choices}>
          <select
            onChange={handleSelect}
            className={style.select}
            name="option"
            id=""
          >
            <option value="intitle:">Title</option>
            <option value="inauthor:">Author</option>
            <option value="subject:">Subject</option>
          </select>
        </section>
        <section className={style.searchInput}>
          <input
            onChange={handleChange}
            type="text"
            value={text}
            placeholder="Search here"
          />
        </section>
        <IconButton onClick={handleSubmit}>
          <SearchIcon style={{ fill: "#e0a101" }} />
        </IconButton>
      </section>

      <section className={`row ${style.searchResults}`}>
        {results !== null
          ? results
              .filter((book) => {
                return (
                  book.volumeInfo.hasOwnProperty("imageLinks") &&
                  book.volumeInfo.hasOwnProperty("authors") &&
                  book.volumeInfo.hasOwnProperty("publishedDate") &&
                  book.volumeInfo.hasOwnProperty("pageCount") &&
                  book.volumeInfo.hasOwnProperty("previewLink") &&
                  book.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail") &&
                  book.volumeInfo.hasOwnProperty("description") &&
                  book.volumeInfo.hasOwnProperty("title")
                );
              })
              .map((book, index) => (
                <Card
                  key={index}
                  title={book.volumeInfo.title}
                  author={book.volumeInfo.authors[0]}
                  publishedDate={book.volumeInfo.publishedDate}
                  description={book.volumeInfo.description}
                  pageCount={book.volumeInfo.pageCount}
                  smallThumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                  thumbnail={book.volumeInfo.imageLinks.thumbnail}
                  previewLink={book.volumeInfo.previewLink}
                  userID={user._id}
                  averageRating={book.volumeInfo.averageRating}
                  added={false}
                />
              ))
          : ""}
      </section>
    </>
  );
}

export default SearchBar;
