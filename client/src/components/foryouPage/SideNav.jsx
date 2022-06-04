import React from 'react';
// import {Link, useNavigate} from 'react-router-dom';

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import  Tooltip  from '@mui/material/Tooltip';

import style from "../../styles/sideNav.module.css";
import logo from '../../images/logo.png'
import {Navigate, useNavigate} from "react-router-dom"

function SideNav() {
  return (
    <section className={`${style.body} container-fluid`}>
      <div className={style.imageBox}>
        <img src={logo} className="img-fluid" alt="" />
      </div>
      <div className={`${style.icons}`}>
        <Tooltip title="Home Page">
          <IconButton>
            <LibraryBooksIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="My Books">
          <IconButton>
            <LocalLibraryRoundedIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Book Club">
          <IconButton>
            <GroupsIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Settings">
          <IconButton>
            <SettingsOutlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>

      <div className={`${style.logOut} ${style.icons}`}>
        <IconButton onClick={() => Navigate("/registration")}>
          <LogoutIcon fontSize="large" />
        </IconButton>
      </div>
    </section>
  );
}

export default SideNav