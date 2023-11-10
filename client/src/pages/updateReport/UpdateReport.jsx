import React, { useState } from "react";
import "./updateReport.scss";

const AddReport = () => {
  return (
    <div className="report">
      <h1>Update report</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="">
        <label htmlFor="">
          Title<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Abstract<span>*</span>
        </label>
        <textarea type="text" required />
        <label htmlFor="">
          Supervisor name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Authors name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Category<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Report type<span>*</span>
        </label>
        <input type="text" required />
        <div className="doc-upload">
          <label htmlFor="file1">
            Upload Document<span>*</span>
          </label>
          <input type="file" id="file1" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReport;
