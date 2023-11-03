import React, { useState } from "react";
import "./chairmanLogin.scss";
import validation from "../../validation/LoginValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChairmanLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8800/chairmanLogin", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            localStorage.setItem("ChairmanLogin", true);
            navigate("/");
          } else {
            alert("Wrong email or password !!!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="login">
      <h1>Sign in as Chairman</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          name="email"
        />
        {errors.email && (
          <span style={{ color: "rgb(229, 18, 46)" }}>{errors.email}</span>
        )}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
          name="password"
        />
        {errors.password && (
          <span style={{ color: "rgb(229, 18, 46)" }}>{errors.password}</span>
        )}
        <button type="submit">Sign in</button>
      </form>
      <p className="forgot">
        <a href="">Forgot your password?</a>
      </p>
    </div>
  );
};

export default ChairmanLogin;
