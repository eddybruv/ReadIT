import React, {useEffect, useState} from 'react';
import axios from "axios"
import style from "../../styles/yourchoice.module.css"
import books from "./book";
import Card from "./Card";

function YourChoice() {
  const [book, setBooks] = useState()
  let stuff = ["crime", "mystery", "fiction"];

  const fetchData = async ()=>{
    let allPromises = []
    stuff.forEach((one)=>{
      const myPromise = new Promise(async(resolve,reject)=>{
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${one}&key=AIzaSyC6gNm9Y2bLTInrIZ9zMPax2s3Ohw8lJhE`;
        let request = await axios.get(url)
        resolve(request.data.items)
      })

      allPromises.push(myPromise)
    })

    return await Promise.all(allPromises)
  }

  useEffect(() => {
      let data = fetchData().then((info) => setBooks(info.flat()));
    },
    [])

  useEffect(() => {
      console.log(book)
    },
    [book]);

  return (
    <section className={style.body}>
      <h3 className={style.title}> Based On Your Choices</h3>
      <section className={`row ${style.cards}`}>
        {books.map((book, index) => {
          return (
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
              saleability={book.saleInfo.saleability}
              averageRating={book.volumeInfo.averageRating}
            />
          );
        })}
      </section>
    </section>
  )
}

export default YourChoice