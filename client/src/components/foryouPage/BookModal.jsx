import React, {useState} from "react";
import {IconButton, Button, ButtonGroup} from "@mui/material";

import style from "../../styles/bookmodal.module.css"
import OptionModal from "./OptionModal";
const BookModal = ({closeModal, bookDetails}) => {

  const [showOptions, setShowOptions] = useState(false);

  const handleClose = (e) => {
    closeModal();
  }

  const handleAdd = () => {
    setShowOptions(true);
  }

  const handleCloseAdd = () => {
    setShowOptions(!showOptions);
  }

  return (
    <section className={style.body}>
      <section className={style.content}>
        <section className={style.photoSection}>
          <img src={bookDetails.thumbnail} alt=""/>
          <p className={style.mobileTitle}>{bookDetails.title}</p>
        </section>
        <section className={style.rightSection}>
          <section className={style.titleBox}>
            <p className={style.title}>{bookDetails.title}</p>
          </section>
          <section className={style.authorBox}>
            <p className={style.author}>By {bookDetails.author}</p>
          </section>
          <section className={style.descBox}>
            <p className={style.desc}>{bookDetails.description}</p>
          </section>
          <section className={style.pubBox}>
            <p className={style.pubDate}>Publication Date: {bookDetails.publishedDate}</p>
          </section>
          <section className={style.pageBox}>
            <p className={style.page}>{bookDetails.pageCount} Pages</p>
          </section>
          <section className={style.link}>
            View on <a target={"_blank"} href={bookDetails.previewLink}>Google</a>
          </section>
          <ButtonGroup>
            <Button color="secondary" onClick={handleClose}>Close</Button>
            <Button color="secondary" variant="contained" onClick={handleAdd}>Add</Button>
          </ButtonGroup>
        </section>
      </section>
      {showOptions &&
        <OptionModal
          closeOption={handleCloseAdd}
          bookDetails={bookDetails}
        />
      }
    </section>
  )
}

export default BookModal