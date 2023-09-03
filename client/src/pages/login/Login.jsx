import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <h1>Sign in</h1>
      <p>
        Or{" "}
        <span>
          <a href="/register">register for an account</a>
        </span>
      </p>
      <form action="">
        <label htmlFor="">Email address</label>
        <input type="text" required />
        <label htmlFor="">Password</label>
        <input type="password" required />
      </form>
      <button>Sign in</button>
      <p className="forgot">
        <a href="">Forgot your password?</a>
      </p>
    </div>
  );
};

export default Login;
