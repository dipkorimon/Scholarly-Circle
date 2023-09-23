import React, { useState } from "react";
import "./register.scss";

const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    skills_and_expertise: "",
    research_interest: "",
    department: "",
    current_position: "",
    linkedIn_profile: "",
    location: "",
    photo: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">
          Email address <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">
          Password <span>*</span>
        </label>
        <input type="password" required onChange={handleChange} />
        <label htmlFor="">
          Skills and expertise <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">
          Research interest <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">
          Department <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">
          Current position <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label htmlFor="">LinkedIn profile</label>
        <input type="text" onChange={handleChange} />
        <label htmlFor="">
          Location <span>*</span>
        </label>
        <input type="text" required onChange={handleChange} />
        <label className="upload" htmlFor="file">
          Upload Profile Photo
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={handleChange}
        />
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
