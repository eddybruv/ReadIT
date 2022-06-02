import React from "react"
import style from '../../styles/authorCard.module.css';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function AuthorCard({name, imgUrl, value, num, occ}) {
  return (
    <section className={`col-xl-4 col-xs-6 ${style.body}`}>
      <section className={style.top}>
        <section className={style.imageContainer}>
          <img className={style.img} src={imgUrl} alt=""/>
        </section>
        <section className={style.count}>
          <p className={style.num}>{num}</p>
          <p className={style.text}>Books</p>
        </section>
      </section>
      <section className={style.bottom}>
        <section className={style.info}>
          <p className={style.name}>{name}</p>
          <p className={style.title}>{occ}</p>
        </section>
        <section className={style.last}>
          <p className={style.link}>More...</p>
          <SendOutlinedIcon />
        </section>
      </section>
    </section>
  )
}

export default AuthorCard