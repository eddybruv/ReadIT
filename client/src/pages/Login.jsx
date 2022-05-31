import React, { useState } from "react";
import { Link } from "react-router-dom";

// Material Ui imports
import {
  TextField,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import { makeStyles } from "@material-ui/core";

import style from "./../styles/login.module.css";
import logo from "../images/logo.png";

const useStyles = makeStyles({
  emailBox: {
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "72%",
    marginLeft: "0",
    marginRight: "0",
  },
  passwordBox: {
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "80%",
    marginLeft: "0",
    marginRight: "0",
  },
});

const quotes = [
  '"Many people, myself among them, feel better at the mere sight of a book."',
  '"The library is inhabited by spirits that come out of the pages at night."',
  "\"If you don't like to read, you haven't found the right book.\"",
  '"When I have a little money, I buy books; and if I have any left, I buy food and clothes."',
  '"Fill your house with stacks of books, in all the crannies and all the nooks."',
  '"Rainy days should be spent at home with a cup of tea and a good book."',
  '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."',
  '"Books are good company, in sad times and happy times, for books are people - people who have managed to stay alive by hiding between the covers of a book."',
  '"A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors."',
];

function Login() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className={`container-fluid p-0 m-0 ${style.body}`}>
      <div
        className={`container d-flex justify-space-around ${style.bigContainer}`}
      >
        <section className={`container-fluid ${style.leftSide}`}>
          <div className={style.emailBox}>
            <h2 className={`${style.loginText}`}>Login</h2>
            <div className={style.line}></div>
          </div>

          <form noValidate autoComplete="off ">
            <Box
              className={classes.emailBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <MailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                sx={{ input: { color: "white" } }}
                fullWidth
                color="secondary"
                name="email"
                id="email"
                label="Email"
                variant="standard"
                InputLabelProps={{ style: { color: "#fff" } }}
              />
            </Box>
            <Box
              className={classes.passwordBox}
              sx={{ display: "flex", alignItems: "flex-end" }}
            >
              <HttpsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                sx={{ input: { color: "white" } }}
                type={showPassword ? "text" : "password"}
                fullWidth
                color="secondary"
                name="password"
                id="password"
                label="Password"
                variant="standard"
                InputLabelProps={{ style: { color: "#fff" } }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{ mr: 1, my: -1 }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Box>
            <Button
              sx={{ mt: 3, color: "white" }}
              onClick={(e) => {
                e.preventDefault();
                console.log("clicked");
              }}
              type="submit"
              color="secondary"
              variant="contained"
            >
              Login
            </Button>
            <p className={style.signupLink}>
              New to ReadIT? <Link style={{textDecoration: "none", color: "orange"}} to="/register">Register</Link>{" "}
            </p>
          </form>
        </section>

        <section className={`${style.rightSide}`}>
          <div className={`${style.imageContainer}`}>
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          <p className={style.qoute}>{quotes[Math.floor(Math.random() * 9)]}</p>
        </section>
      </div>
    </section>
  );
}

export default Login;
