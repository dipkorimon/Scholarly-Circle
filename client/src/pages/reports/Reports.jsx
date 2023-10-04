import React from "react";
import "./reports.scss";
import SearchIcon from "@mui/icons-material/Search";
import Post from "../../components/post/Post";

const Reports = () => {
  return (
    <div className="reports">
      <div className="search">
        <div className="search-text">
          <SearchIcon style={{ color: "rgb(229, 18, 46)", fontSize: "25" }} />
          <h3>Search with Session, Category and Author</h3>
        </div>
        <div className="search-box">
          <form action="">
            <input type="text" placeholder="Ex: Session, Category, Author" />
          </form>
        </div>
      </div>
      <div className="items">
        <Post />
      </div>
    </div>
  );
};

export default Reports;
