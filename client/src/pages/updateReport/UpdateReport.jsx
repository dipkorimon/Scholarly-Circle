import React, { useEffect, useState } from "react";
import "./updateReport.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddReport = () => {
  const [data, setData] = useState([""]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8800/updateReport/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="report">
      <h1>
        {data[0].title}
        <sup>title</sup>
      </h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="">
        <label htmlFor="">
          Title<span>*</span>
        </label>
        <input type="text" value={data[0].title} required />
        <label htmlFor="">
          Abstract<span>*</span>
        </label>
        <textarea type="text" value={data[0].abstract} required />
        <label htmlFor="">
          Supervisor name<span>*</span>
        </label>
        <input type="text" value={data[0].supervisor_name} required />
        <label htmlFor="">
          Authors name<span>*</span>
        </label>
        <input type="text" value={data[0].authors_name} required />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <input type="text" value={data[0].session} required />
        <label htmlFor="">
          Category<span>*</span>
        </label>
        <input type="text" value={data[0].category} required />
        <label htmlFor="">
          Report type<span>*</span>
        </label>
        <input type="text" value={data[0].report_type} required />
        <div className="doc-upload">
          <label htmlFor="file1">
            Upload Document<span>*</span>
          </label>
          <input type="file" id="file1" value={""} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddReport;
