import React, { useState } from "react";
import "./addSupervisor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSupervisor = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [current_position, setCurrentPosition] = useState("");
  const [phd, setPhd] = useState("");
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
    formData.append("phd", phd);
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
        university name from where PhD degree owned, phone number, joining date,
        research interests and a photo.
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Full name</label>
        <input type="text" onChange={(e) => setFullName(e.target.value)} />
        <label htmlFor="email">email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor="">Current position</label>
        <input
          type="text"
          onChange={(e) => setCurrentPosition(e.target.value)}
        />
        <label htmlFor="">PhD (University name)</label>
        <input type="text" onChange={(e) => setPhd(e.target.value)} />
        <label htmlFor="">Phone</label>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor="">Joining date</label>
        <input type="date" onChange={(e) => setJoiningDate(e.target.value)} />
        <label htmlFor="">Research in interests</label>
        <input
          type="text"
          onChange={(e) => setResearchInterests(e.target.value)}
        />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSupervisor;
