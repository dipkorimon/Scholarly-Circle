import React, { useState } from "react";
import "./home.scss";
import Category from "../../components/category/Category.jsx";
import Post from "../../components/post/Post";
import SearchIcon from "@mui/icons-material/Search";
import FacultyMembers from "../../components/facultyMembers/FacultyMembers";

const Home = () => {
  return (
    <div className="home">
      <div className="left-sidebar">
        <Category />
      </div>
      <div className="middle">
        <div className="search">
          <div className="icon">
            <SearchIcon sx={{ color: "rgb(229, 18, 46)" }} />
            <p>Search with Category, Session or Author</p>
          </div>
          <form action="">
            <input type="text" placeholder="Ex: Category, Session, Author" />
          </form>
        </div>
        <div className="post">
          <Post />
        </div>
      </div>
      <div className="right-sidebar">
        <FacultyMembers />
      </div>
    </div>
  );
};

export default Home;
