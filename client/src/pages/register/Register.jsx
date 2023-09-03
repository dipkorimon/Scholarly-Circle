import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <h1>Register for Scholarly Circle</h1>
      <p>
        Or{" "}
        <span>
          <a href="/login">already have an account</a>
        </span>
      </p>
      <form action="">
        <label htmlFor="">Full name</label>
        <input type="text" required />
        <label htmlFor="">Email address</label>
        <input type="text" required />
        <label htmlFor="">Skills and expertise</label>
        <input type="text" required />
        <label htmlFor="">Research interest</label>
        <input type="text" required />
        <label htmlFor="">Department</label>
        <input type="text" required />
        <label htmlFor="">Password</label>
        <input type="password" required />
      </form>
      <button>Sign up</button>
      <div className="pass">
        <p>
          Password must be a minimum of 8 characters, contain one lower case,
          one upper case, one number and one special of these special characters
          #?!,.@$ %^&*_()=+-
        </p>
      </div>
    </div>
  );
};

export default Register;
