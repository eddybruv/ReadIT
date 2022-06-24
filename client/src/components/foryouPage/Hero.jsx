import React, {useState, useEffect} from "react";
import style from "../../styles/hero.module.css";
import SearchBar from "../SearchBar";
import ContinueReading from "./ContinueReading";
import Categories from "./Categories";
import YourChoice from "./YourChoice";
import axios from "axios"

function Hero() {
  const [books, setBooks] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("loggedUser"))
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("/api/book/get-books", {userID: user._id}).then(data => setBooks(data.data.data));
    }
    fetchData().then();
  })



  return (
    <section className={`${style.body} container-fluid`}>
      <SearchBar/>
      {books?.length ? <ContinueReading/> : "" }
      <Categories/>
      <YourChoice/>
    </section>
  );
}

export default Hero;
