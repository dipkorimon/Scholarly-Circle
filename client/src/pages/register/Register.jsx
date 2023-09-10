import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <h1>Register for Scholarly Circle</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="">
        <label htmlFor="">
          Full name <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Email address <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Password <span>*</span>
        </label>
        <input type="password" required />
        <label htmlFor="">
          Skills and expertise <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Research interest <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Department <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Current position <span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">LinkedIn profile</label>
        <input type="text" />
        <label htmlFor="">
          Hometown <span>*</span>
        </label>
        <input type="text" />
        <input style={{ display: "none" }} type="file" id="file" required />
        <label className="upload" htmlFor="file">
          Upload Profile Photo
        </label>
        <div className="pass">
          <p>
            *Password must be a minimum of 8 characters, contain one lower case,
            one upper case, one number and one special of these special
            characters #?!,.@$ %^&*_()=+-
          </p>
        </div>
        <div className="checkbox">
          <input type="checkbox" /> I understand and agree to the terms of use
          and privacy policy. <br />
          <input type="checkbox" /> Please send me occasional Scholarly Circle
          news and updates.
        </div>
        <button>Sign up</button>
      </form>
      <div className="sign">
        <p>
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
