import React, { useState } from "react";
import "./addAuthor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddAuthor = () => {
  const [student_id, setStudentId] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("student_id", student_id);
    formData.append("full_name", full_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("session", session);
    formData.append("defense_date", defense_date);
    formData.append("file", file);
    axios
      .post("http://localhost:8800/addAuthor", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/authors");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addAuthor">
      <h1>Add a new Author</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Student ID<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="">
          Email<span>*</span>
        </label>
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">
          Password<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
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

export default AddAuthor;
