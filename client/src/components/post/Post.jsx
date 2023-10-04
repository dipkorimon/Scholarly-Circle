import React, { useState } from "react";
import "./post.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Post = () => {
  const [posts] = useState([
    {
      id: 1,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Natural Language Processing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 2,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 3,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
    {
      id: 4,
      profilePhoto: "/profile.png",
      userName: "Supervisor Name",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      authors: "Unknown name",
      session: "2017-2018",
      category: "Artificial Intelligence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      date: "10 months",
    },
  ]);

  return (
    <div className="post">
      {posts.map((item, index) => (
        <div className="post-item">
          <div className="info">
            <img src={item.profilePhoto} alt="" />
            <div className="sup">
              <p className="sup-name">{item.userName}</p>
              <p>Supervisor</p>
            </div>
            <EditIcon sx={{ color: "rgb(42, 52, 71)", cursor: "pointer" }} />
            <DeleteIcon sx={{ color: "rgb(229, 18, 46)", cursor: "pointer" }} />
            <p>Published {item.date} ago.</p>
          </div>
          <div className="title">
            <p>{item.title}</p>
          </div>
          <div className="abstract">
            <p>{item.desc}</p>
          </div>
          <div className="report-authors">
            <p>Authors: {item.authors}</p>
          </div>
          <div className="session">
            <p>{item.session}</p>
            <p>{item.category}</p>
          </div>
          <div className="buttons">
            <button>Download Full-Text</button>
            <button>Download Presentation</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
