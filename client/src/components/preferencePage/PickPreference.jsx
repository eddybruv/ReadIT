import React from "react";
import Card from "./Card";

import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import style from "../../styles/preferences.module.css";

function PickPreference() {
  let count = 0;

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
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default PickPreference;
