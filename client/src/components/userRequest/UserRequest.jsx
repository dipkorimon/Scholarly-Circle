import React, { useState } from "react";
import "./userRequest.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRequest = () => {
  const [student_id, setStudentId] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [supervisor_id, setSupervisorId] = useState("");
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
    formData.append("supervisor_id", supervisor_id);
    formData.append("session", session);
    formData.append("defense_date", defense_date);
    formData.append("file", file);
    axios
      .post("http://localhost:8800/userRequests", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          alert("Account request submitted successfully.");
        }
      })
      .catch((err) =>
        alert("Error submitting account request. Please try again.")
      );
  };

  return (
    <div className="request-author">
      <h1>Request for an account</h1>
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
          Select supervisor<span>*</span>
        </label>
        <select name="" id="" onChange={(e) => setSupervisorId(e.target.value)}>
          <option value="">Select Session</option>
          <option value="s01">Dr. Mohammed Humayun Kabir</option>
          <option value="s02">Md. Javed Hossain</option>
          <option value="s03">Dr. Md. Ashadun Nobi</option>
          <option value="s04">Dr. Nahid Akter</option>
          <option value="s05">Dr. Nazia Majadi</option>
          <option value="s06">Dr. Md. Kamal Uddin</option>
          <option value="s07">Dr. Fateha Khanam Bappy</option>
          <option value="s08">Abul Kalam Azad</option>
          <option value="s09">Iftekhar Mahmud Tawhid</option>
          <option value="s10">Md. Hasnat Riaz</option>
          <option value="s11">Koushik Chandra Howlader</option>
          <option value="s12">A.R.M Mahamudul Hasan Rana</option>
          <option value="s13">Ratnadip Kuri</option>
          <option value="s14">A Q M SALA UDDIN PATHAN</option>
          <option value="s15">Sharmin Akter Milu</option>
        </select>
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

export default UserRequest;
