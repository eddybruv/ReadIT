import React, { useState, useContext, useEffect } from "react";
import {PreferenceContext} from "./PreferenceContext";
import axios from "axios";
import style from "../../styles/Pcard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function Card({ value }) {
  const [added, setAdded] = useState(false);
  const {preferences, setPreferences} = useContext(PreferenceContext);

  const handleClick = async (e) => {
    const word = e.target.parentNode.childNodes[0].firstChild.data;


    if (typeof word === "string") {
      setAdded(!added);
      if (!added) {
        let temp = [...preferences, word];
        setPreferences(temp);
      } else {
        let temp = preferences;
        temp.splice(temp.indexOf(word), 1);
        setPreferences(temp)
      }
    }
  };

  const handleIconClick = async (e) => {
    const word = e.target.parentNode.parentNode.childNodes[0].firstChild.data;
    if (typeof word === "string") {
      setAdded(!added);
      if (!added) {
        let temp = [...preferences, word];
        setPreferences(temp);
      } else {
        let temp = preferences;
        temp.splice(temp.indexOf(word), 1);
        setPreferences(temp)
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
