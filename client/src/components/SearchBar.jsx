import React from 'react'

import SearchIcon from "@mui/icons-material/Search";

import style from "../styles/searchbar.module.css";


function SearchBar() {
  return (
    <section className={style.body}>
      <SearchIcon />
      <section className={style.choices}>
        <select className={style.select} name="option" id="">
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
        </select>
      </section>
      <section className={style.searchInput}>
        <input type="text" placeholder='Search here' />
      </section>

    </section>
  )
}

export default SearchBar