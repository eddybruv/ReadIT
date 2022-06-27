import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Material Ui imports
import { TextField, Box, Button, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import HttpsIcon from "@mui/icons-material/Https";
import { makeStyles } from "@mui/styles";

import style from "./../styles/login.module.css";
import logo from "../images/logo.png";

import quote from "../quote";
import axios from "axios";

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

function Login() {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(false);
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const checkFields = (user) => {
    if (user.email === "" || user.password === "") {
      alert("Please fill all input fields!");
      setUser({ name: "", email: "", password: "", username: "" });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setIsDisabled(false);
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkFields(user)) {
      setIsDisabled(!isDisabled);
      const result = await axios
        .post("/api/user/login", user)
        .then((data) => data)
        .catch(() => alert("login went wrong"));

      console.log(result);
      if (result.data.message === "user not found") {
        alert("User Not Found!");
      } else {
        if (result.status === 200) {
          localStorage.setItem(
            "loggedUser",
            JSON.stringify(result.data.data)
          );
          const username = JSON.parse(
            localStorage.getItem("loggedUser")
          ).username;
          navigate(`/${username}`);
        } else {
          alert("Account not registered");
        }
      }
    }
  };

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
                value={user.email}
                onChange={handleChange}
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
                value={user.password}
                onChange={handleChange}
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
              onClick={handleSubmit}
              type="submit"
              color="secondary"
              variant="contained"
              disabled={isDisabled}
            >
              Login
            </Button>
            <p className={style.signupLink}>
              New to ReadIT?{" "}
              <Link
                style={{ textDecoration: "none", color: "orange" }}
                to="/register"
              >
                Register
              </Link>{" "}
            </p>
          </form>
        </section>

        <section className={`${style.rightSide}`}>
          <div className={`${style.imageContainer}`}>
            <img src={logo} className="img-fluid" alt="logo" />
          </div>
          <p className={style.qoute}>{quote}</p>
        </section>
      </div>
    </section>
  );
}

export default Login;
