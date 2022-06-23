import React from "react";

import style from "../../styles/bookmodal.module.css"
const BookModal = ({closeModal, bookDetails}) => {
  return (
    <section className={style.body}>
      <section className={style.photoSection}>
        <img src={bookDetails.thumbnail} alt=""/>
      </section>
      <section className={style.rightSection}>
        <section className={style.titleBox}>
          <p className={style.title}>Title: {bookDetails.title}</p>
        </section>
        <section className={style.authorBox}>
          <p className={style.author}>Author: {bookDetails.author}</p>
        </section>
        <section className={style.pubBox}>
          <p className={style.pubDate}>Publication Date: {bookDetails.publishedDate}</p>
        </section>
        <section className={style.descBox}>
          <p className={style.desc}>Description: {bookDetails.description}</p>
        </section>
        <section className={style.pageBox}>
          <p className={style.page}>Page Count: {bookDetails.pageCount}</p>
        </section>
      </section>
    </section>
  )
}

export default BookModal