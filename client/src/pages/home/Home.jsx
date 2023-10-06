import React, { useState } from "react";
import "./home.scss";
import Welcome from "../../components/welcome/Welcome";
import About from "../../components/about/About";
import FeaturedPages from "../../components/featuredPages/FeaturedPages";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <Welcome />
      </div>
      <div className="pages">
        <FeaturedPages />
      </div>
      <div className="works">
        <About />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
