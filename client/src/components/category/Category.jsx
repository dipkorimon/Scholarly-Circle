import React, { useState } from "react";
import "./category.scss";
import Category_photo from "../../../public/category.png";

const Category = () => {
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
      <div className="title">
        <img src={Category_photo} alt="" />
        <p>Popular Categories</p>
      </div>
      <div className="category-list">
        {category.map((item, index) => (
          <button href="">
            {item.name}
            <br />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
