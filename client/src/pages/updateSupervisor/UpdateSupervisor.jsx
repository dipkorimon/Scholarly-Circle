import React, { useEffect, useState } from "react";
import "./updateSupervisor.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddSupervisor = () => {
  const [data, setData] = useState([""]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8800/updateSupervisor/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="updateSupervisor">
      <h1>
        {data[0].full_name}
        <sup>Supervisor</sup>
      </h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="">
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" value={data[0].full_name} required />
        <label htmlFor="email">
          email<span>*</span>
        </label>
        <input type="email" value={data[0].email} required />
        <label htmlFor="password">
          password<span>*</span>
        </label>
        <input type="password" value={data[0].password} required />
        <label htmlFor="">
          Current position<span>*</span>
        </label>
        <input type="text" value={data[0].current_position} required />
        <label htmlFor="">
          PhD (University name)<span>*</span>
        </label>
        <input type="text" value={data[0].phd} required />
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input type="text" value={data[0].phone} required />
        <label htmlFor="">
          Joining date<span>*</span>
        </label>
        <input type="date" value={data[0].joining_date} required />
        <label htmlFor="">
          Research in interests<span>*</span>
        </label>
        <input type="text" value={data[0].research_interests} required />
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

export default AddSupervisor;
