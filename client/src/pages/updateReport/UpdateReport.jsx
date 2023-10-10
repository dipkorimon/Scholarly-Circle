import React, { useState } from "react";
import "./updateReport.scss";

const AddReport = () => {
  return (
    <div className="report">
      <h1>Update report</h1>
      <form action="">
        <label htmlFor="">Title</label>
        <input type="text" />
        <label htmlFor="">Abstract</label>
        <textarea type="text" />
        <label htmlFor="">Supervisor name</label>
        <input type="text" />
        <label htmlFor="">Authors name</label>
        <input type="text" />
        <label htmlFor="">Session</label>
        <input type="text" />
        <label htmlFor="">Category</label>
        <input type="text" />
        <label htmlFor="">Report type</label>
        <input type="text" />
        <div className="doc-upload">
          <label htmlFor="file1">Upload Document</label>
          <input type="file" id="file1" />
          <label htmlFor="file2">Upload Presentation Slide</label>
          <input type="file" id="file2" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReport;
