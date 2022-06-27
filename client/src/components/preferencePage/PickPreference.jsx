import React, {useContext, useEffect, useState} from "react";
import {PreferenceContext} from "./PreferenceContext";
import Card from "./Card";
import axios from "axios";

import {useNavigate} from "react-router-dom";

import {Button, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import style from "../../styles/preferences.module.css";

function PickPreference() {
  const {preferences, setPreferences} = useContext(PreferenceContext)
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("loggedUser"));

  const [isDisabled, setIsDisabled] = useState(false);


  const choices = [
    {value: "Science"},
    {value: "Technology"},
    {value: "Romance"},
    {value: "Self Confidence"},
    {value: "Sports"},
    {value: "Women Empowerment"},
    {value: "Horror"},
    {value: "Survival"},
    {value: "Adventure"},
    {value: "Society"},
    {value: "War"},
    {value: "Action"},
    {value: "Detective"},
    {value: "Fantasy"},
    {value: "Fiction"},
    {value: "Poetry"},
    {value: "Thriller"},
    {value: "History"},
    {value: "Crime"},
    {value: "Programming"},
    {value: "Children's"},
    {value: "Drama"},
    {value: "Mystery"},
    {value: "Finance"},
    {value: "Anime"}
  ];

  const handleClick = async (e) => {
    e.preventDefault();
    setIsDisabled(true);

    let res = await axios
      .post("/api/user/update-user", {
        _id: user._id,
        imageUrl: user.imageUrl,
        preference: preferences,
      })
      .then((data) => data.data);
    localStorage.setItem("loggedUser", JSON.stringify(res.data));
    navigate(`/${user.username}`);
  };

  return (

    <div className={`${style.preferencesSection}`}>
      <Typography
        sx={{fontSize: "1.9rem", fontFamily: "Montserrat"}}
        varient="h2"
        component="h2"
      >
        Select Preferences
      </Typography>
      <Typography sx={{fontSize: ".9rem", fontFamily: "Montserrat", fontStyle: "italic", fontWeight: "100"}}
                  varient="p"
                  component="p">(At least 2, at most 5)</Typography>
      <div className={style.preferences}>
        {choices.map((preference, index) => {
          return <Card key={index} value={preference.value}/>;
        })}
      </div>

      <div className={style.button}>
        <Button
          color="secondary"
          variant="contained"
          endIcon={<SendIcon style={{fill: "#1A2D31"}}/>}
          onClick={handleClick}
          disabled={isDisabled}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default PickPreference;
