import React, {useState} from "react";
import BookModal from "./BookModal";
import OptionModal from "./OptionModal"
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
  userID,
  saleability,
  averageRating,
}) {

  const [showModal, setShowModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const bookDetails = {
    title,
    author,
    publishedDate,
    description,
    pageCount,
    smallThumbnail,
    thumbnail,
    previewLink,
    userID,
    saleability,
    averageRating,
  }


  const handlePreview = (e) => {
    console.log(bookDetails)
    setShowModal(true);
  }

  const handleClose = (e) => {
    setShowModal(!showModal);
  }

  const handleAdd = () => {
    setShowOptions(true);
  }

  const handleCloseAdd = () => {
    setShowOptions(!showOptions);
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
          <Button onClick={handleAdd} color="secondary" variant="contained">
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
      {showOptions &&
        <OptionModal
          closeOption={handleCloseAdd}
          bookDetails={bookDetails}
        />
      }
    </section>
  );
}

export default Card;
