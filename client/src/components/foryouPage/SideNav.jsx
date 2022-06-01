import React from 'react';
// import {Link, useNavigate} from 'react-router-dom';

import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

import style from "../../styles/sideNav.module.css";
import logo from '../../images/logo.png'


function SideNav() {
  return (
    <section className={`${style.body} container-fluid`}>
      <div className={style.imageBox}>
        <img src={logo} className="img-fluid" alt="" />
      </div>
      <div className={`${style.icons}`}>
        <LibraryBooksIcon fontSize='large'/>
      </div>
    </section>
  )
}

export default SideNav