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
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 2,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Natural Languge Processing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 3,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Computer Networking",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 4,
      profilePhoto: "../../../public/profile.jpg",
      userName: "Bjarne Stroustrup",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Computer Networking",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
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
                  sx={{ color: "rgb(240, 173, 78)", cursor: "pointer" }}
                />
              </a>
              <DeleteIcon
                sx={{ color: "rgb(229, 18, 46)", cursor: "pointer" }}
              />
            </div>
            <h1>{item.title}</h1>
            <span>Tags: {item.tags}</span>
            <p>{item.desc}</p>
            <div className="btn">
              <button>Download full-text</button>
              <button>Cite</button>
            </div>
          </div>
          <div className="document">
            <iframe src={item.document}></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
