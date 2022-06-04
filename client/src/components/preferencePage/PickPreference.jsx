import React from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import style from "../../styles/preferences.module.css";

function PickPreference() {
  const navigate = useNavigate();
  let user = JSON.parse(sessionStorage.getItem("loggedUser"));

  const preferences = [
    { value: "Romance" },
    { value: "Horror" },
    { value: "Survival" },
    { value: "Adventure" },
    { value: "Society" },
    { value: "War" },
    { value: "Action" },
    { value: "Detective" },
    { value: "Fantasy" },
    { value: "Fiction" },
    { value: "Poetry" },
    { value: "Science" },
    { value: "Thriller" },
    { value: "History" },
    { value: "Technology" },
    { value: "Crime" },
    { value: "Programming" },
    { value: "Children's" },
    { value: "Drama" },
    { value: "Mystery" },
  ];

  const handleClick = async (e) => {
    e.preventDefault();
    user.preference = user.preference.flat();
    console.log(user)
    sessionStorage.setItem("loggedUser", JSON.stringify(user));

    /* let res = await axios
      .post("/api/user/update-user", {
        _id: user._id,
        imageUrl: user.imageUrl,
        preference: user.preference,
      })
      .then((data) => data.data);
    console.log(res); */
    navigate(`/${user.username}`);
  };;

  return (
    <div className={`${style.preferencesSection}`}>
      <Typography
        sx={{ fontSize: "1.9rem", fontFamily: "Montserrat" }}
        varient="h2"
        component="h2"
      >
        Select Preferences
      </Typography>

      <div className={style.preferences}>
        {preferences.map((preference, index) => {
          return <Card key={index} value={preference.value} />;
        })}
      </div>

      <div className={style.button}>
        <Button
          color="secondary"
          variant="contained"
          endIcon={<SendIcon style={{ fill: "#1A2D31" }} />}
          onClick={handleClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default PickPreference;
