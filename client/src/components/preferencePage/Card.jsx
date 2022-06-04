import React, { useState } from "react";
import axios from "axios";
import style from "../../styles/Pcard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function Card({ value }) {
  const [added, setAdded] = useState(false);

  const handleClick = async (e) => {
    let user = JSON.parse(sessionStorage.getItem("loggedUser"));
    const word = e.target.parentNode.childNodes[0].firstChild.data;

    if (typeof word === "string") {
      setAdded(!added);
      console.log(user);
      let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${word}&maxResults=40&key=AIzaSyDRXGABhuGOKXhvKC6_Bp0r6Q7dERVOpWE`;

      console.log(added);
      if (!added) {
        let request = await axios.get(url);
        user.preference = [...user.preference, request.data.items];
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        console.log(user.preference);
      }
    }
  };

  const handleIconClick = async (e) => {
    let user = JSON.parse(sessionStorage.getItem("loggedUser"));
    const word = e.target.parentNode.parentNode.childNodes[0].firstChild.data;
    if (typeof word === "string") {
      setAdded(!added);
      let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${word}&maxResults=40&key=AIzaSyDRXGABhuGOKXhvKC6_Bp0r6Q7dERVOpWE`;

      if (!added) {
        let request = await axios.get(url);
        user.preference = [...user.preference, request.data.items];
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
        console.log(user.preference);
      }
    }
  };

  return (
    <section className={`${style.body} ${added ? style.active : ""}`}>
      <div onClick={handleClick} className={style.content}>
        {value}
      </div>
      <IconButton onClick={handleIconClick}>
        {added ? <RemoveIcon /> : <AddIcon />}
      </IconButton>
    </section>
  );
}

export default Card;
