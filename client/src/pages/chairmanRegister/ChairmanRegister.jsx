import React, { useState } from "react";
import "./chairmanRegister.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChairmanRegister = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/chairmanRegister", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/chairmanLogin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register">
      <h1>Register for Scholarly Circle as Chairman</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          name="full_name"
          required
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        <label htmlFor="email">
          Email address<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <div className="pass">
          <p>
            *Password must be a minimum of 8 characters, contain one lower case,
            one upper case, one number and one special of these special
            characters #?!,.@$ %^&*_()=+-
          </p>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="sign">
        <p>
          Already have an account? <a href="/chairmanLogin">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default ChairmanRegister;
