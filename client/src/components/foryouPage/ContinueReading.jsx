import React from 'react';
import style from "../../styles/continue.module.css";
import Card from './Card';
import books from './book';

function ContinueReading() {
  return (
    <section className={style.previous}>
      <h2 className={style.previousText}>Continue Reading</h2>
      <section className={`row ${style.previousCard}`}>
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
  );
}

export default ContinueReading