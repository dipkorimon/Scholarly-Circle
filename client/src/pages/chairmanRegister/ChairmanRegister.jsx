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
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input
          type="text"
          name="full_name"
          required
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        <label htmlFor="email">
          Email address<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <label htmlFor="">
          Current position<span>*</span>
        </label>
        <input
          type="text"
          name="current_position"
          required
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
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input
          type="text"
          name="phone"
          required
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        <label htmlFor="">
          Joining date<span>*</span>
        </label>
        <input
          type="date"
          name="joining_date"
          required
          onChange={(e) =>
            setValues({ ...values, joining_date: e.target.value })
          }
        />
        <label htmlFor="">
          Research interests<span>*</span>
        </label>
        <input
          type="text"
          name="research_interests"
          required
          onChange={(e) =>
            setValues({ ...values, research_interests: e.target.value })
          }
        />
        <label htmlFor="">
          About<span>*</span>
        </label>
        <input
          type="text"
          name="about"
          required
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
