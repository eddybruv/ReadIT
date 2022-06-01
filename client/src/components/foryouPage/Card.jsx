import React from "react";
import style from "../../styles/card.module.css";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Card({
  title,
  author,
  publishedDate,
  description,
  pageCount,
  smallThumbnail,
  thumbnail,
  previewLink,
  user_id,
  saleability,
}) {
  return (
    <section className={`${style.body} col-lg-4 col-md-2`}>
      <div className={style.imageContainer}>
        <img src={smallThumbnail} alt="" />
      </div>
      <div className={style.titleBox}>
        <p className={style.author}>{title}</p>
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </section>
  );
}

export default Card;
