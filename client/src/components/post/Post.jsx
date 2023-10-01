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
          <div className="desc">
            <div className="info">
              <img src={item.profilePhoto} alt="" />
              <div className="supervisor">
                <h3>{item.userName}</h3>
                <p>Supervisor</p>
              </div>
              <a href="/singlePost">
                <EditIcon
                  sx={{ color: "rgb(42, 52, 71)", cursor: "pointer" }}
                />
              </a>
              <DeleteIcon
                sx={{ color: "rgb(229, 18, 46)", cursor: "pointer" }}
              />
              <p>Published {item.date} ago.</p>
            </div>
            <h1>{item.title}</h1>
            <div className="authors">
              <span>Authors: {item.authors}</span>
            </div>
            <div className="session-cat">
              <span>{item.session}</span>
              <span>{item.category}</span>
            </div>
            <p>{item.desc}</p>
            <div className="btn">
              <button>Download full-text</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
