import React from "react";
import style from "../../styles/card.module.css";
import { ButtonGroup, IconButton, Button } from "@mui/material";
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
  averageRating,
}) {
  return (
    <section className={`${style.body} col-lg-4 col-md-4 col-xs-12 p-0`}>
      <div className={style.imageContainer}>
        <img src={smallThumbnail} alt="" />
      </div>
      <div className={style.leftSide}>
        <div className={style.titleBox}>
          <p className={style.title}>{title}</p>
        </div>
        <div className={style.authorBox}>
          <p className={style.author}>{author}</p>
          <p className={style.rating}>{averageRating}</p>
        </div>
        <div className={style.dateBox}>
          <p className={style.date}>Year: {publishedDate.split("-")[0]}</p>
        </div>
        <ButtonGroup>
          <Button color="secondary">Preview</Button>
          <Button color="secondary" variant="contained">
            Add
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}

export default Card;
