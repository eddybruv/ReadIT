import React from "react";
import style from "../../styles/authors.module.css";
import authors from "./authors";
import AuthorCard from "./AuthorCard";
import me from "../../images/me.jpg"

function FeaturedAuthors() {
  return (
    <section className={style.body}>
      <section className={style.self}>
        <div className={style.imageContainer}>
          <img src={me} alt=""/>
        </div>
        <p className={style.name}>Edwin Ajong</p>
      </section>
      <p className={style.header}>Writers and Authors</p>
      <section className={`row ${style.cards}`}>
        {authors.map((author, index) => (
          <AuthorCard
            key={index}
            imgUrl={author.imgUrl}
            name={author.name}
            value={author.value}
            num={author.num}
            occ={author.occ}
          />
        ))}
      </section>
    </section>
  );
}

export default FeaturedAuthors;
