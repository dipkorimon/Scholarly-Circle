import React from "react";
import "./authors.scss";
import Author from "../../components/author/Author";

const Authors = () => {
  return (
    <div className="authors">
      <div className="items">
        <Author />
      </div>
    </div>
  );
};

export default Authors;
