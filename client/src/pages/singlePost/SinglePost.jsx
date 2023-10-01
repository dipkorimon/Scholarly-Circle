import React, { useState } from "react";
import "./singlePost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const animatedComponents = makeAnimated();

const SinglePost = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
    skills_and_expertise: "",
    research_interest: "",
    current_position: "",
    linkedin_profile: "",
    location: "",
    profile_photo: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {};

  const deptOptions = [
    {
      value: "computer science and telecommunication engineering",
      label: "Computer Science and Telecommunication Engineering",
    },
  ];

  const sessionOptions = [
    {
      value: "2010-2011",
      label: "2010-2011",
    },
    {
      value: "2011-2012",
      label: "2011-2012",
    },
    {
      value: "2012-2013",
      label: "2012-2013",
    },
    {
      value: "2013-2014",
      label: "2013-2014",
    },
    {
      value: "2014-2015",
      label: "2014-2015",
    },
    {
      value: "2015-2016",
      label: "2015-2016",
    },
    {
      value: "2016-2017",
      label: "2016-2017",
    },
    {
      value: "2017-2018",
      label: "2017-2018",
    },
    {
      value: "2018-2019",
      label: "2018-2019",
    },
  ];

  const categoryOptions = [
    {
      value: "machine learning",
      label: "Machine Learning",
    },
    {
      value: "natural language processing",
      label: "Natural Language Processing",
    },
    {
      value: "artificial intelligence",
      label: "Artificial Intelligence",
    },
    {
      value: "digital image processing",
      label: "Digital Image Processing",
    },
    {
      value: "computer networking",
      label: "Computer Networking",
    },
    {
      value: "telecommunication",
      label: "Telecommunication",
    },
    {
      value: "web engineering",
      label: "Web Engineering",
    },
    {
      value: "computer vision",
      label: "Computer Vision",
    },
    {
      value: "internet of things",
      label: "Internet of Things",
    },
    {
      value: "human computer interaction",
      label: "Human Computer Interaction",
    },
    {
      value: "ethical hacking",
      label: "Ethical Hacking",
    },
    {
      value: "role of the blockchain",
      label: "Role of the Blockchain",
    },
    {
      value: "wireless sensor networks",
      label: "Wireless Sensor Networks",
    },
    {
      value: "cognitive radio networks",
      label: "Cognitive Radio Networks",
    },
    {
      value: "cyber physical systems",
      label: "Cyber Physical Systems",
    },
    {
      value: "theory and algorithms",
      label: "Theory and Algorithms",
    },
    {
      value: "distributed data clustering",
      label: "Distributed Data Clustering",
    },
    {
      value: "mobile systems",
      label: "Mobile Systems",
    },
    {
      value: "3-D object modeling",
      label: "3-D Object Modeling",
    },
  ];

  const [value, setValue] = useState("");
  const [department, setDepartment] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="single-post">
      <div className="content">
        <p>
          Publish your research paper with a title, authors name, department,
          session, a short description about your research paper and select a
          category also. <br />
          <span>Note: This page is only for supervisors.</span>
        </p>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" />
          <input
            type="text"
            placeholder="Supervisor Name (Ex: Supervisor Name)"
          />
          <input
            type="text"
            placeholder="Authors Name (Ex: Author_1, Author_2)"
          />

          <Select
            options={deptOptions}
            defaultValue={department}
            placeholder="Select Department"
            onChange={setDepartment}
            components={animatedComponents}
            isMulti
            isSearchable
            noOptionsMessage={() => "No department available"}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: 14,
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                boxShadow: "none",
              }),
            }}
          />
          <Select
            options={sessionOptions}
            defaultValue={session}
            placeholder="Select Session"
            onChange={setSession}
            components={animatedComponents}
            isMulti
            isSearchable
            noOptionsMessage={() => "No session available"}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: 14,
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                boxShadow: "none",
              }),
            }}
          />
          <Select
            options={categoryOptions}
            defaultValue={category}
            placeholder="Select Category"
            onChange={setCategory}
            components={animatedComponents}
            isMulti
            isSearchable
            noOptionsMessage={() => "No category available"}
            styles={{
              placeholder: (baseStyles, state) => ({
                ...baseStyles,
                fontSize: 14,
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                boxShadow: "none",
              }),
            }}
          />
          <div className="editor">
            <ReactQuill
              className="edit"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="paper-upload">
            <label htmlFor="file">Upload research paper</label>
            <input type="file" id="file" />
          </div>
          <div className="btn">
            <p>
              <span>Status:</span> Public
            </p>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;
