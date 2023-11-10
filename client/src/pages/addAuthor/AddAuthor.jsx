import React, { useState } from "react";
import "./addAuthor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAuthor = () => {
  const [student_id, setStudentId] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [session, setSession] = useState("");
  const [batch, setBatch] = useState("");
  const [current_position, setCurrentPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("student_id", student_id);
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("session", session);
    formData.append("batch", batch);
    formData.append("current_position", current_position);
    formData.append("phone", phone);
    formData.append("defense_date", defense_date);
    formData.append("file", file);
    axios
      .post("http://localhost:8800/addAuthor", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/authors");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addAuthor">
      <h1>
        Add author with student ID, full name, email, session, batch,
        current_position, phone, blood group, defense date and a photo.
      </h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Student ID<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="">
          Email<span>*</span>
        </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setSession(e.target.value)}
        />
        <label htmlFor="">
          Batch<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setBatch(e.target.value)}
        />
        <label htmlFor="">
          Current Position<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setCurrentPosition(e.target.value)}
        />
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="">
          Defense date<span>*</span>
        </label>
        <input
          type="date"
          required
          onChange={(e) => setDefenseDate(e.target.value)}
        />
        <div className="photo-upload">
          <label htmlFor="file">
            Upload Photo<span>*</span>
          </label>
          <input
            type="file"
            id="file"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
