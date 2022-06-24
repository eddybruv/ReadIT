import React from "react";
import axios from "axios";
import {Button} from "@mui/material";
import style from "../../styles/optionModal.module.css"

const OptionModal = ({closeOption, bookDetails}) => {

  const handleClose = () => {
    closeOption();
  }

  const handleYes = async () => {
    const res = await axios.post("/api/book/add-book", bookDetails);
    if (res.status === 200) {
      closeOption();
    }
  }

  return (
    <section className={style.body}>
      <section className={style.content}>
        <p>Add {bookDetails.title} to Personal Library?</p>
        <section className={style.option}>
          <Button onClick={handleYes} variant={"contained"} color={"secondary"}>Yes</Button>
          <Button onClick={handleClose} color={"secondary"}>No</Button>
        </section>
      </section>

    </section>
  )
}

export default OptionModal