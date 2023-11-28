import React, { useState } from "react";
import "./addSupervisor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSupervisor = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [current_position, setCurrentPosition] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [research_interests, setResearchInterests] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("current_position", current_position);
    formData.append("education", education);
    formData.append("phone", phone);
    formData.append("joining_date", joining_date);
    formData.append("research_interests", research_interests);
    formData.append("file", file);
    axios
      .post("http://localhost:8800/addSupervisor", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/supervisors");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addSupervisor">
      <h1>
        Add supervisor with full name, email, password, current position,
        education, phone number, joining date, research interests and a photo.
      </h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">
          Current position<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setCurrentPosition(e.target.value)}
        />
        <label htmlFor="">
          Education (University name)<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setEducation(e.target.value)}
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
          Joining date<span>*</span>
        </label>
        <input
          type="date"
          required
          onChange={(e) => setJoiningDate(e.target.value)}
        />
        <label htmlFor="">
          Research in interests<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setResearchInterests(e.target.value)}
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

export default AddSupervisor;
