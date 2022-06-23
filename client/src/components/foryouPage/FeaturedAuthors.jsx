import React from "react";
import style from "../../styles/authors.module.css";
import authors from "./authors";
import AuthorCard from "./AuthorCard";
import me from "../../images/me.jpg"

function FeaturedAuthors() {
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));
  return (
    <section className={style.body}>
      <section className={style.self}>
        <div className={style.imageContainer}>
          <img src={user.imageUrl} alt=""/>
        </div>
        <p className={style.name}>{user.name}</p>
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
