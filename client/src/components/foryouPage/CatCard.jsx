import React from 'react'
import style from "../../styles/catcard.module.css";

function CatCard({title, num, icon}) {
  return (
    <section className={`${style.body}`}>
      <div className={style.left}>
        <p className={style.title}>{title}</p>
        <p className={style.icon}>{icon}</p>
      </div>
      <div className={style.right}>
        <p className={style.num}>{num}</p>
        <p className={style.aval}>Books available</p>
      </div>
    </section>
  );
}

export default CatCard