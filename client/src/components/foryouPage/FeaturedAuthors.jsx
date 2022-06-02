import React from "react";
import style from "../../styles/authors.module.css";
import authors from "./authors";
import AuthorCard from "./AuthorCard";

function FeaturedAuthors() {
  return (
    <section className={style.body}>
      <section className={`row ${style.cards}`}>
        {authors.map((author) => (
          <AuthorCard
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
