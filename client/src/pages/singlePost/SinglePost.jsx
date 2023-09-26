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
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="upload" htmlFor="file">
            Upload Research Paper
          </label>
          <div className="buttons">
            <button>Save as draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Select Category</h1>
          <div className="cat">
            <input type="radio" name="category" id="ml" />
            <label htmlFor="ml">Machine Learning</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="nlp" />
            <label htmlFor="nlp">Natural Language Processing</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="ip" />
            <label htmlFor="ip">Image Processing</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="cn" />
            <label htmlFor="cn">Computer Networking</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="tc" />
            <label htmlFor="tc">Telecommunication</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="we" />
            <label htmlFor="we">Web Engineering</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="e" />
            <label htmlFor="e">Electronics</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="o" />
            <label htmlFor="o">Optics</label>
          </div>
          <div className="cat">
            <input type="radio" name="category" id="pe" />
            <label htmlFor="pe">Power Engineering</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
