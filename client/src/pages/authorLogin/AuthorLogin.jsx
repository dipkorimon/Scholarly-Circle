import React, { useState } from "react";
import "./authorLogin.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChairmanLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/authorLogin", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem("AuthorLogin", true);
          navigate("/");
        } else {
          alert("Wrong email or password !!!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h1>Sign in as Author</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email address<span>*</span>
        </label>
        <input
          type="email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          name="email"
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          name="password"
        />
        <button type="submit">Sign in</button>
      </form>
      <p className="forgot">
        <a href="">Forgot your password?</a>
      </p>
    </div>
  );
};

export default ChairmanLogin;
