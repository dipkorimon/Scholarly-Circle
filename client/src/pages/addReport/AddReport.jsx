import React, { useState } from "react";
import "./addReport.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddReport = () => {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [supervisor_name, setSupervisorName] = useState("");
  const [authors_name, setAuthorsName] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [report_type, setReportType] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("abstract", abstract);
    formData.append("supervisor_name", supervisor_name);
    formData.append("authors_name", authors_name);
    formData.append("session", session);
    formData.append("category", category);
    formData.append("defense_date", defense_date);
    formData.append("report_type", report_type);
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
    <div className="report">
      <h1>
        Add a new report in Scholarly Circle with a title, abstract, supervisor
        name, authors name, defense date, category, report type(project or
        thesis), document(docx or pdf).
      </h1>
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
          Supervisor name<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setSupervisorName(e.target.value)}
        />
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
        <input
          type="text"
          required
          onChange={(e) => setSession(e.target.value)}
        />
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
        <input
          type="text"
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <label htmlFor="">
          Report type<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setReportType(e.target.value)}
        />
        <div className="doc-upload">
          <label htmlFor="file1">
            Upload Document<span>*</span>
          </label>
          <input
            type="file"
            id="file1"
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
