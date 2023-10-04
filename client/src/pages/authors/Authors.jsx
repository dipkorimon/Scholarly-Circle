import React from "react";
import "./authors.scss";
import Author from "../../components/author/Author";

const Authors = () => {
  return (
    <div className="authors">
      <div className="aut">
        <h3>
          Authors (Students) of the Department of Computer Science and
          Telecommunication Engineering
        </h3>
      </div>
      <div className="items">
        <Author />
      </div>
    </div>
  );
};

export default Authors;
