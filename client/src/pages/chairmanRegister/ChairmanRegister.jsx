import React, { useState } from "react";
import "./chairmanRegister.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChairmanRegister = () => {
  const [values, setValues] = useState({
    full_name: "",
    email: "",
    password: "",
    current_position: "",
    phd: "",
    phone: "",
    blood_group: "",
    joining_date: "",
    research_interests: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8800/register", values)
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
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Full name</label>
        <input
          type="text"
          name="full_name"
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <label htmlFor="">Current position</label>
        <input
          type="text"
          name="current_position"
          onChange={(e) =>
            setValues({ ...values, current_position: e.target.value })
          }
        />
        <label htmlFor="">ph.d (University name)</label>
        <input
          type="text"
          name="phd"
          onChange={(e) => setValues({ ...values, phd: e.target.value })}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        <label htmlFor="">Blood group</label>
        <input
          type="text"
          name="blood_group"
          onChange={(e) =>
            setValues({ ...values, blood_group: e.target.value })
          }
        />
        <label htmlFor="">Joining date</label>
        <input
          type="date"
          name="joining_date"
          onChange={(e) =>
            setValues({ ...values, joining_date: e.target.value })
          }
        />
        <label htmlFor="">Research interests</label>
        <input
          type="text"
          name="research_interests"
          onChange={(e) =>
            setValues({ ...values, research_interests: e.target.value })
          }
        />
        <label htmlFor="">About</label>
        <input
          type="text"
          name="about"
          onChange={(e) => setValues({ ...values, about: e.target.value })}
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
