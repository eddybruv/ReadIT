import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import style from "../../styles/preferences.module.css";
import picture from "../../images/me.jpg";

function SelectPhoto() {
  return (
    <div className={`${style.photoSection}`}>
      <Typography
        sx={{ fontSize: "1.9rem", fontFamily: "Montserrat" }}
        varient="h2"
        component="h2"
      >
        Add Your Photo
      </Typography>
      <div className={style.imageContainer}>
        <img className={style.img} src={picture} alt="" />
      </div>
      <Button
        sx={{ my: 2, alignSelf: "center" }}
        color="secondary"
        variant="outlined"
      >
        Upload Photo
      </Button>
    </div>
  );
}

export default SelectPhoto;
