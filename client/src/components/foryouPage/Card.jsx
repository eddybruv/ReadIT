import React, {useState} from "react";
import BookModal from "./BookModal"
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

  const [showModal, setShowModal] = useState(false);
  const bookDetails = {
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
  }


  const handlePreview = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false)
  }

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
          <Button onClick={handlePreview} color="secondary">Preview</Button>
          <Button color="secondary" variant="contained">
            Add
          </Button>
        </ButtonGroup>
      </div>
      {showModal &&
        <BookModal
          closeModal={handleClose}
          bookDetails={bookDetails}
        />
      }
    </section>
  );
}

export default Card;
