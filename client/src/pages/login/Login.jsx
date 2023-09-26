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
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <p className="note">
        <span>Note:</span> Only for Supervisors. Students are not allowed to
        login here.
      </p>
      <form action="">
        <label htmlFor="email">
          Email address <span>*</span>
        </label>
        <input type="email" required />
        <label htmlFor="password">
          Password <span>*</span>
        </label>
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
