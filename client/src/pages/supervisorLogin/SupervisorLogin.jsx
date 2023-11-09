import React, { useState } from "react";
import "./supervisorLogin.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SupervisorLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/supervisorLogin", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
          localStorage.setItem("SupervisorLogin", true);
        } else {
          alert("Wrong email or password !!!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <h1>Sign in as Supervisor</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
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

export default SupervisorLogin;
