import React, { useState, useEffect } from "react";
import style from "../../styles/hero.module.css";
import SearchBar from "../SearchBar";
import ContinueReading from "./ContinueReading";
import Categories from "./Categories";
import YourChoice from "./YourChoice";

function Hero() {
  return (
    <section className={`${style.body} container-fluid`}>
      <SearchBar />
      <ContinueReading/>
      <Categories/>
      <YourChoice />
    </section>
  );
}

export default Hero;
