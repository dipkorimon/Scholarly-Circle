import React, { useState } from "react";
import "./category.scss";
import Category_photo from "/category.png";

const Category = () => {
  const [category] = useState([
    {
      name: "Machine Learning",
    },
    {
      name: "Natural Language Processing",
    },
    {
      name: "Artificial Intelligence",
    },
    {
      name: "Digital Image Processing",
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
      name: "Computer Vision",
    },
    {
      name: "Internet of Things",
    },
    {
      name: "Human Computer Interaction",
    },
    {
      name: "Ethical Hacking",
    },
    {
      name: "Role of the Blockchain",
    },
    {
      name: "Wireless Sensor Networks",
    },
    {
      name: "Cognitive Radio Networks",
    },
    {
      name: "Cyber Physical Systems",
    },
    {
      name: "Theory and Algorithms",
    },
    {
      name: "Distributed Data Clustering",
    },
    {
      name: "Mobile Systems",
    },
    {
      name: "3-D Object Modelling",
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
