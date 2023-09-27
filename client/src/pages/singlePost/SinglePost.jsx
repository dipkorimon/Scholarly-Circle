import React, { useState } from "react";
import "./singlePost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SinglePost = () => {
  const [value, setValue] = useState("");

  return (
    <div className="single-post">
      <div className="content">
        <p>
          Publish your research paper with a title, authors name, department,
          tags, a short description about your research paper and select a
          category also.
        </p>
        <input type="text" placeholder="Title" />
        <input
          type="text"
          placeholder="Authors Name (Ex: Author_1, Author_2)"
        />
        <input
          type="text"
          placeholder="Department (Ex: Computer Science and Telecommunication Engineering)"
        />
        <input
          type="text"
          placeholder="Tags (Ex: Machine Learning, Artificial Intelligence)"
        />
        <div className="editor">
          <ReactQuill
            className="edit"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
