import React from "react";
import "./navBar.scss";
import Photo from "../../../public/profile.jpg";

const NavBar = () => {
  return (
    <div>
      <div className="navBar">
        <div className="left">
          <a href="/">
            <img src="./../../public/logo.png" alt="" />
          </a>
          <a href="/">ScholarlyCircle</a>
        </div>
        <div className="links">
          <div className="middle">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="right">
            <a href="/register" className="regi">
              Sign up
            </a>
            <a href="/login" className="log">
              Sign in
            </a>
            <img src={Photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
