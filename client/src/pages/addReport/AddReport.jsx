import React from "react";
import "./addReport.scss";

const AddReport = () => {
  return (
    <div className="report">
      <h1>
        Add a new report in Scholarly Circle with a title, abstract, current
        date, category, document(docx or pdf) and a presentation silde(pptx).
      </h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Abstract</label>
        <input type="text" />
        <label htmlFor="">Date</label>
        <input type="date" />
        <label htmlFor="">Category</label>
        <input type="text" />
        <div className="doc-upload">
          <label htmlFor="file">Upload Document</label>
          <input type="file" id="file" />
          <label htmlFor="file">Upload Presentation Slide</label>
          <input type="file" id="file" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddReport;
