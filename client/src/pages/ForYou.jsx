import React from "react";
import PreferenceProvider from "../components/preferencePage/PreferenceContext"
import style from "../styles/foryou.module.css";
import SideNav from "../components/foryouPage/SideNav";
import Hero from "../components/foryouPage/Hero";
import FeaturedAuthors from "../components/foryouPage/FeaturedAuthors";

function ForYou() {
  return (
    <PreferenceProvider>
    <section className={`${style.body} container-fluid p-0`}>
      <section className={`${style.sideNav}`}>
        <SideNav />
      </section>
      <section className={`${style.hero}`}>
        <Hero />
      </section>
      <section className={`${style.rightNav}`}>
        <FeaturedAuthors />
      </section>
    </section>
    </PreferenceProvider>
  );
}

export default ForYou;
