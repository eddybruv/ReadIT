import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import style from "../../styles/preferences.module.css";
import picture from "../../images/default.png";
import axios from "axios";

const preset = "readit";

function SelectPhoto() {
  let user = JSON.parse(sessionStorage.getItem("loggedUser"));

  const [preview, setPreview] = useState("");

  const handleImage = async(e) => {
    
    setPreview(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();

    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", preset);
    formData.append("cloud_name", "eddybruv")

    const res = await axios.post("https://api.cloudinary.com/v1_1/eddybruv/image/upload", formData).then((data) => {
      return data.data.secure_url
    }).catch(() => alert("Please try uploading again"));
    const imageUrl = res;
    console.log(imageUrl);

    user.imageUrl = imageUrl;
    sessionStorage.setItem("loggedUser", JSON.stringify(user));
  };

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
        <img
          className={style.img}
          src={preview === "" ? picture : preview}
          alt=""
        />
      </div>
      <input type="file" name="" onChange={handleImage} className={style.input} id="" />
      <Button
        sx={{ my: 2, alignSelf: "center" }}
        color="secondary"
        variant="outlined"
        onClick={() => document.querySelector("input[type=file]").click()}
      >
        Upload Photo
      </Button>
    </div>
  );
}

export default SelectPhoto;
