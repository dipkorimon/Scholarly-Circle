import React, { useState } from "react";
import "./addReport.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddReport = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [supervisor_id, setSupervisorId] = useState("");
  const [supervisor_name, setSupervisorName] = useState("");
  const [authors_name, setAuthorsName] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [report_type, setReportType] = useState("");
  const [publication, setPublication] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("abstract", abstract);
    formData.append("supervisor_id", supervisor_id);
    formData.append("supervisor_name", supervisor_name);
    formData.append("authors_name", authors_name);
    formData.append("session", session);
    formData.append("category", category);
    formData.append("defense_date", defense_date);
    formData.append("report_type", report_type);
    formData.append("publication", publication);
    formData.append("file", file);
    axios
      .post("http://localhost:8800/addReport", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/reports");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addReport">
      <h1>Add a new Report</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Title<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">
          Abstract<span>*</span>
        </label>
        <textarea
          type="text"
          required
          onChange={(e) => setAbstract(e.target.value)}
        />
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
          Supervisor name<span>*</span>
        </label>
        <select
          name=""
          id=""
          onChange={(e) => setSupervisorName(e.target.value)}
        >
          <option value="">Select Supervisor Name</option>
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
        <label htmlFor="">
          Authors name<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setAuthorsName(e.target.value)}
        />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setSession(e.target.value)}>
          <option value="">Select Session</option>
          <option value="2006-2007">2006-2007</option>
          <option value="2007-2008">2007-2008</option>
          <option value="2008-2009">2008-2009</option>
          <option value="2009-2010">2009-2010</option>
          <option value="2010-2011">2010-2011</option>
          <option value="2011-2012">2011-2012</option>
          <option value="2012-2013">2012-2013</option>
          <option value="2013-2014">2013-2014</option>
          <option value="2014-2015">2014-2015</option>
          <option value="2015-2016">2015-2016</option>
          <option value="2016-2017">2016-2017</option>
          <option value="2017-2018">2017-2018</option>
          <option value="2018-2019">2018-2019</option>
          <option value="2019-2020">2019-2020</option>
          <option value="2020-2021">2020-2021</option>
          <option value="2021-2022">2021-2022</option>
          <option value="2022-2023">2022-2023</option>
        </select>
        <label htmlFor="">
          Defense date<span>*</span>
        </label>
        <input
          type="date"
          required
          onChange={(e) => setDefenseDate(e.target.value)}
        />
        <label htmlFor="">
          Category<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
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
        <label htmlFor="">
          Report type<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setReportType(e.target.value)}>
          <option value="">Select Report Type</option>
          <option value="thesis">Thesis</option>
          <option value="project">Project</option>
        </select>
        <label htmlFor="">
          Thesis Publication link or Project live demo link<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setPublication(e.target.value)}
        />

        <div className="doc-upload">
          <label htmlFor="file">
            Upload Document<span>*</span>
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

export default AddReport;
