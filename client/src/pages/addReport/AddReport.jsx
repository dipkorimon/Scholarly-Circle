import React, { useState } from "react";
import "./addReport.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "../validation/ReportValidation";

const AddReport = () => {
  const [values, setValues] = useState({
    title: "",
    abstract: "",
    supervisor_name: "",
    authors_name: "",
    session: "",
    published_date: "",
    category: "",
    report_type: "",
    document: "",
    presentation: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (
      errors.title == "" &&
      errors.abstract === "" &&
      errors.supervisor_name === "" &&
      errors.authors_name === "" &&
      errors.document === ""
    ) {
      axios
        .post("http://localhost:8800/addReport", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/reports");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="report">
      <h1>
        Add a new report in Scholarly Circle with a title, abstract, published
        date, category, report type(project or thesis), document(docx or pdf)
        and a presentation silde(pptx).
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
        {errors.title && <span>{errors.title}</span>}
        <label htmlFor="">Abstract</label>
        <textarea
          type="text"
          name="abstract"
          onChange={(e) => setValues({ ...values, abstract: e.target.value })}
        />
        {errors.abstract && <span>{errors.abstract}</span>}
        <label htmlFor="">Supervisor name</label>
        <input
          type="text"
          name="supervisor_name"
          onChange={(e) =>
            setValues({ ...values, supervisor_name: e.target.value })
          }
        />
        {errors.supervisor_name && <span>{errors.supervisor_name}</span>}
        <label htmlFor="">Authors name</label>
        <input
          type="text"
          name="authors_name"
          onChange={(e) =>
            setValues({ ...values, authors_name: e.target.value })
          }
        />
        {errors.authors_name && <span>{errors.authors_name}</span>}
        <label htmlFor="">Session</label>
        <input
          type="text"
          name="session"
          onChange={(e) => setValues({ ...values, session: e.target.value })}
        />
        <label htmlFor="">Published date</label>
        <input
          type="date"
          name="published_date"
          onChange={(e) =>
            setValues({ ...values, published_date: e.target.value })
          }
        />
        <label htmlFor="">Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
        <label htmlFor="">Report type</label>
        <input
          type="text"
          name="report_type"
          onChange={(e) =>
            setValues({ ...values, report_type: e.target.value })
          }
        />
        <div className="doc-upload">
          <label htmlFor="file1">Upload Document</label>
          <input
            type="file"
            id="file1"
            name="document"
            onChange={(e) => setValues({ ...values, document: e.target.value })}
          />
          {errors.document && <span>{errors.document}</span>}
          <label htmlFor="file2">Upload Presentation Slide</label>
          <input
            type="file"
            id="file2"
            name="presentation"
            onChange={(e) =>
              setValues({ ...values, presentation: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReport;
