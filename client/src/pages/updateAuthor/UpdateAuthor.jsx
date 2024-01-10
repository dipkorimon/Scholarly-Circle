import React, { useEffect, useState } from "react";
import "./updateAuthor.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const AddAuthor = () => {
  const [data, setData] = useState([""]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8800/updateAuthor/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="updateAuthor">
      <h1>
        {data[0].full_name}
        <sup>author</sup>
      </h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="">
        <label htmlFor="">
          Student ID<span>*</span>
        </label>
        <input type="text" value={data[0].student_id} required />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" value={data[0].full_name} required />
        <label htmlFor="">
          Email<span>*</span>
        </label>
        <input type="email" value={data[0].email} required />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <input type="text" value={data[0].session} required />
        <label htmlFor="">
          Batch<span>*</span>
        </label>
        <input type="text" value={data[0].batch} required />
        <label htmlFor="">
          Current Position<span>*</span>
        </label>
        <input type="text" value={data[0].current_position} required />
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input type="text" value={data[0].phone} required />
        <label htmlFor="">
          Defense date<span>*</span>
        </label>
        <input type="date" value={data[0].defense_date} required />
        <div className="photo-upload">
          <label htmlFor="file">
            Upload Photo<span>*</span>
          </label>
          <input type="file" id="file" value={""} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
