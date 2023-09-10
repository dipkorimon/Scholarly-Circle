import React, { useState } from "react";
import "./home.scss";
import Category from "../../components/category/Category.jsx";
import Faculty from "../../components/faculty/Faculty";
import Institues from "../../components/institutes/Institues";
import Post from "../../components/post/Post";

const Home = () => {
  return (
    <div className="home">
      <div className="post">
        <Post />
      </div>
      <div className="sidebar">
        <Category />
        <Faculty />
        <Institues />
      </div>
    </div>
  );
};

export default Home;
