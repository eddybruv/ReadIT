import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/yourchoice.module.css";
import defaultBooks from "./book";
import Card from "./Card";

function YourChoice() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"))
  let topics = user.preference;

  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    let allPromises = [];
    topics.forEach((one) => {
      const myPromise = new Promise(async (resolve, reject) => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${one}&maxResults=30&&key=AIzaSyC6gNm9Y2bLTInrIZ9zMPax2s3Ohw8lJhE`;
        let request = await axios.get(url);
        resolve(request.data.items);
      });

      allPromises.push(myPromise);
    });

    return await Promise.all(allPromises);
  };

  useEffect(() => {
  }, [books])

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData();
      setBooks(data.flat())
    }
    fetch().then();
  }, []);


  Array.prototype.shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  return (
    <section className={style.body}>
      <h3 className={style.title}> Based On Your Choices</h3>
      <section className={`row ${style.cards}`}>
        {books !== null
          ? books.filter((book) => {
            return book.volumeInfo.hasOwnProperty("imageLinks") &&
              book.volumeInfo.hasOwnProperty("authors") &&
              book.volumeInfo.hasOwnProperty("publishedDate") &&
              book.volumeInfo.hasOwnProperty("pageCount") &&
              book.volumeInfo.hasOwnProperty("previewLink") &&
              book.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail")&&
              book.volumeInfo.hasOwnProperty("description") &&
              book.volumeInfo.hasOwnProperty("title");
          }).map((book, index) => (
              <Card
                key={index}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors[0]}
                publishedDate={book.volumeInfo.publishedDate}
                description={book.volumeInfo.description}
                pageCount={book.volumeInfo.pageCount}
                smallThumbnail={book.volumeInfo.imageLinks.thumbnail}
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                previewLink={book.volumeInfo.previewLink}
                userID={user._id}
                averageRating={book.volumeInfo.averageRating}
              />
            ))
          : ""}
      </section>
    </section>
  );
}

export default YourChoice;
