import React, { useState } from "react";
import "./addSupervisor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSupervisor = () => {
  const [supervisor_id, setSupervisorId] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [current_position, setCurrentPosition] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("supervisor_id", supervisor_id);
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("current_position", current_position);
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
      <h1>Add a new Supervisor</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Supervisor ID<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setSupervisorId(e.target.value)}
        />
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
        <select
          name=""
          id=""
          onChange={(e) => setCurrentPosition(e.target.value)}
        >
          <option value="">Select Current Position</option>
          <option value="Professor">Professor</option>
          <option value="Associate Professor">Associate Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
          <option value="Lecturer">Lecturer</option>
        </select>
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
