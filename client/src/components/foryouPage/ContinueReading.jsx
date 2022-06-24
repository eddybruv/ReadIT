import React, {useState, useEffect} from 'react';
import style from "../../styles/continue.module.css";
import Card from './Card';
import axios from "axios";
// import books from './book';

function ContinueReading() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchServer = async () => {
      const res = await axios.post("/api/book/get-books", {userID: user._id})
        .then((data) => setBooks(data.data.data));
    }
    fetchServer().then();
  }, [])

  useEffect(() => {
    console.log(books);
  }, [books])

  return (
    <section className={style.previous}>
      <h2 className={style.previousText}>Continue Reading</h2>
      <section className={`row ${style.previousCard}`}>
        { books !== null ?
          books.map((book, index) => {
          return (
            <Card
              key={index}
              title={book.title}
              author={book.authors}
              publishedDate={book.publishedDate}
              description={book.description}
              pageCount={book.pageCount}
              smallThumbnail={book.smallThumbnail}
              thumbnail={book.thumbnail}
              previewLink={book.previewLink}
              user_id={index}
              // saleability={book.saleInfo.saleability}
              // averageRating={book.averageRating}
            />
          )
        }).reverse(): ""}
      </section>
    </section>
  );
}

export default ContinueReading