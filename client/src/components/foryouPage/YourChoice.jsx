import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/yourchoice.module.css";
import defaultBooks from "./book";
import Card from "./Card";

function YourChoice() {
  // const [book, setBooks] = useState(null);
  let stuff = ["crime", "mystery", "fiction"];

  const user = JSON.parse(sessionStorage.getItem("loggedUser"))
  let books = user.preference;

  /* const fetchData = async () => {
    let allPromises = [];
    stuff.forEach((one) => {
      const myPromise = new Promise(async (resolve, reject) => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${one}&key=AIzaSyC6gNm9Y2bLTInrIZ9zMPax2s3Ohw8lJhE`;
        let request = await axios.get(url);
        resolve(request.data.items);
      });

      allPromises.push(myPromise);
    });

    return await Promise.all(allPromises);
  }; */

  useEffect(() => {
    console.log(books);
  }, [books]);

  useEffect(() => {
    // let data = fetchData().then((info) => setBooks(info.flat()));
  }, []);


    books = books.filter((book) => {
      if (
        book.volumeInfo.hasOwnProperty("imageLinks") &&
        book.volumeInfo.hasOwnProperty("authors") &&
        book.volumeInfo.hasOwnProperty("publishedDate") &&
        book.volumeInfo.hasOwnProperty("pageCount") &&
        book.volumeInfo.hasOwnProperty("previewLink") &&
        book.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail")
      ) {
        return true;
      }
      return false;
    })


    



  return (
    <section className={style.body}>
      <h3 className={style.title}> Based On Your Choices</h3>
      <section className={`row ${style.cards}`}>
        {books !== null
          ? books.map((book, index) => (
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
                user_id={index}
                averageRating={book.volumeInfo.averageRating}
              />
            ))
          : ""}
      </section>
    </section>
  );
}

export default YourChoice;
