import React, { useState } from "react";
import "./category.scss";

const SideBar = () => {
  const [category] = useState([
    {
      name: "Machine Learning",
    },
    {
      name: "Natural Language Processing",
    },
    {
      name: "Image Processing",
    },
    {
      name: "Computer Networking",
    },
    {
      name: "Telecommunication",
    },
    {
      name: "Web Engineering",
    },
    {
      name: "Electronics",
    },
    {
      name: "Optics",
    },
    {
      name: "Power Engineering",
    },
  ]);

  return (
    <div className="category">
      <p>Popular Categories</p>
      <div className="category-list">
        {category.map((item, index) => (
          <a href="">
            {item.name}
            <br />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
