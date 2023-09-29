import React, { useState } from "react";
import "./register.scss";
import validation from "../RegisterValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
    skills_and_expertise: "",
    research_interest: "",
    current_position: "",
    linkedin_profile: "",
    location: "",
    profile_photo: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (
      errors.full_name === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8800/register", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="register">
      <h1>Register for Scholarly Circle</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Full name</label>
        <input
          type="text"
          name="full_name"
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        {errors.full_name && <span>{errors.full_name}</span>}
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        {errors.password && <span>{errors.password}</span>}
        <label htmlFor="">Skills and expertise</label>
        <input
          type="text"
          name="skills_and_expertise"
          onChange={(e) =>
            setValues({ ...values, skills_and_expertise: e.target.value })
          }
        />
        <label htmlFor="">Research interest</label>
        <input
          type="text"
          name="research_interest"
          onChange={(e) =>
            setValues({ ...values, research_interest: e.target.value })
          }
        />
        <label htmlFor="">Current position</label>
        <input
          type="text"
          name="current_position"
          onChange={(e) =>
            setValues({ ...values, current_position: e.target.value })
          }
        />
        <label htmlFor="">LinkedIn profile</label>
        <input
          type="text"
          name="linkedin_profile"
          onChange={(e) =>
            setValues({ ...values, linkedin_profile: e.target.value })
          }
        />
        <label htmlFor="">Location</label>
        <input
          type="text"
          name="location"
          onChange={(e) => setValues({ ...values, location: e.target.value })}
        />
        <label className="upload" htmlFor="file">
          Upload Profile Photo
        </label>
        <input
          style={{ display: "none" }}
          name="profile_photo"
          onChange={(e) =>
            setValues({ ...values, profile_photo: e.target.value })
          }
          type="file"
          id="file"
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
        <button type="submit">Sign up</button>
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
