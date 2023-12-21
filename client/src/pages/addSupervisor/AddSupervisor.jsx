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
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [joining_date, setJoiningDate] = useState("");
  const [research_interests, setResearchInterests] = useState("");
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
      <h1>Add a new Supervisor</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Supervisor ID<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setSupervisorId(e.target.value)}>
          <option value="">Select Supervisor ID</option>
          <option value="s01">s01</option>
          <option value="s02">s02</option>
          <option value="s03">s03</option>
          <option value="s04">s04</option>
          <option value="s05">s05</option>
          <option value="s06">s06</option>
          <option value="s07">s07</option>
          <option value="s08">s08</option>
          <option value="s09">s09</option>
          <option value="s10">s10</option>
          <option value="s11">s11</option>
          <option value="s12">s12</option>
          <option value="s13">s13</option>
          <option value="s14">s14</option>
          <option value="s15">s15</option>
        </select>
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setFullName(e.target.value)}>
          <option value="">Select Full Name</option>
          <option value="Dr. Mohammed Humayun Kabir">
            Dr. Mohammed Humayun Kabir
          </option>
          <option value="Md. Javed Hossain">Md. Javed Hossain</option>
          <option value="Dr. Md. Ashadun Nobi">Dr. Md. Ashadun Nobi</option>
          <option value="Dr. Nahid Akter">Dr. Nahid Akter</option>
          <option value="Dr. Nazia Majadi">Dr. Nazia Majadi</option>
          <option value="Dr. Md. Kamal Uddin">Dr. Md. Kamal Uddin</option>
          <option value="Dr. Fateha Khanam Bappy">
            Dr. Fateha Khanam Bappy
          </option>
          <option value="Abul Kalam Azad">Abul Kalam Azad</option>
          <option value="Iftekhar Mahmud Tawhid">Iftekhar Mahmud Tawhid</option>
          <option value="Md. Hasnat Riaz">Md. Hasnat Riaz</option>
          <option value="Koushik Chandra Howlader">
            Koushik Chandra Howlader
          </option>
          <option value="A.R.M Mahamudul Hasan Rana">
            A.R.M Mahamudul Hasan Rana
          </option>
          <option value="Ratnadip Kuri">Ratnadip Kuri</option>
          <option value="A Q M SALA UDDIN PATHAN">
            A Q M SALA UDDIN PATHAN
          </option>
          <option value="Sharmin Akter Milu">Sharmin Akter Milu</option>
        </select>
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
        <select
          name=""
          id=""
          onChange={(e) => setResearchInterests(e.target.value)}
        >
          <option value="">Select Research Interest</option>
          <option value="Security issues in Computer Networks">
            Security issues in Computer Networks
          </option>
          <option value="Fuzzy Logics">Fuzzy Logics</option>
          <option value="Signal Processing in Wireless Communication">
            Signal Processing in Wireless Communication
          </option>
          <option value="FinFET Nano Devices">FinFET Nano Devices</option>
          <option value="Data mining">Data Mining</option>
          <option value="Complex network">Complex Network</option>
          <option value="Time series analysis">Time Series Analysis</option>
          <option value="machine learning">Machine Learning</option>
          <option value="Renewable Energy (Solar Cell)">
            Renewable Energy (Solar Cell)
          </option>
          <option value="Optoelectronic devices">Optoelectronic Devices</option>
          <option value="Sensor Networks">Sensor Networks</option>
          <option value="eCommerce Security">eCommerce Security</option>
          <option value="Recommendation Systems">Recommendation Systems</option>
          <option value="Person Re-identification">
            Person Re-identification
          </option>
          <option value="Multi-camera Target Tracking">
            Multi-camera Target Tracking
          </option>
          <option value="Object Detection">Object Detection</option>
          <option value="Wireless Sensor Networks (WSN)">
            Wireless Sensor Networks (WSN)
          </option>
          <option value="Internet of Things (IoT)">
            Internet of Things (IoT)
          </option>
          <option value="Natural Language Processing">
            Natural Language Processing
          </option>
          <option value="Network Security">Network Security</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Bioinformatics">Bioinformatics</option>
          <option value="Deep Learning">Deep Learning</option>
          <option value="Big Data">Big Data</option>
          <option value="Cloud Computring">Cloud Computring</option>
          <option value="Mobile Computing">Mobile Computing</option>
          <option value="Blockchain Technology">Blockchain Technology</option>
          <option value="Data Analysis">Data Analysis</option>
          <option value="Computer Security">Computer Security</option>
          <option value="Information Theory">Information Theory</option>
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
