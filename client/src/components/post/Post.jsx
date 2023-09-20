import React, { useState } from "react";
import "./post.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Post = () => {
  const [institutes] = useState([
    {
      id: 1,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Machine Learning",
      category: "Natural Language Processing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 2,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Natural Languge Processing",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 3,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Computer Networking",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Computer Networking",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
  ]);

  return (
    <div className="post">
      {institutes.map((item, index) => (
        <div className="post-item">
          <div className="desc">
            <div className="info">
              <img src={item.profilePhoto} alt="" />
              <a href="/profile">{item.userName}</a>
              <a href="/singlePost">
                <EditIcon
                  sx={{ color: "rgb(255, 230, 0)", cursor: "pointer" }}
                />
              </a>
              <DeleteIcon
                sx={{ color: "rgb(229, 18, 46)", cursor: "pointer" }}
              />
              <p>Published {item.date} ago.</p>
            </div>
            <h1>{item.title}</h1>
            <div className="tags">
              <span>Tags: {item.tags}</span>
              <span>Category: {item.category}</span>
            </div>
            <p>{item.desc}</p>
            <div className="btn">
              <button>Download full-text</button>
              <button>Cite</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
