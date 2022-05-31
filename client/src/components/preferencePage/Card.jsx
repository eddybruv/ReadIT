import React, { useState } from "react";
import style from "../../styles/Pcard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";

function Card({ value }) {
  const [added, setAdded] = useState(false);

  const handleClick = (e) => {
    const word = e.target.parentNode.parentNode.childNodes[0].firstChild.data;
    if (typeof word === "string") {
      
      setAdded(!added);
    }
    
  }

  return (
    <section className={`${style.body} ${added? style.active : ""}`}>
      <div className={style.content}>{value}</div>
      <IconButton onClick={handleClick}>
        {added?  <RemoveIcon/> : <AddIcon/> }
      </IconButton>
    </section>
  );
}

export default Card;
