import React, { useState } from "react";
import "./post.scss";

const Post = () => {
  const [institutes] = useState([
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Machine Learning",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Natural Languge Processing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      tags: "Computer Networking",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tempore vitae omnis nobis quae praesentium esse excepturi a placeat aspernatur.",
      document: "../../../public/agent.pdf",
    },
    {
      id: 4,
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
            <h1>{item.title}</h1>
            <span>Tags: {item.tags}</span>
            <p>{item.desc}</p>
            <button>Download pdf</button>
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
