import React, { useState } from "react";
import "./addSupervisor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "../validation/RegisterValidation";

const AddSupervisor = () => {
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
    photo: "",
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
        .post("http://localhost:8800/addSupervisor", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="addSupervisor">
      <h1>
        Add supervisor with full name, email, password, current position,
        university name from where PhD degree owned, phone number, blood group,
        joining date, research interests, about and a photo.
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Full name</label>
        <input
          type="text"
          name="full_name"
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        {errors.full_name && <span>{errors.full_name}</span>}
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        {errors.password && <span>{errors.password}</span>}
        <label htmlFor="">Current position</label>
        <input
          type="text"
          name="current_position"
          onChange={(e) =>
            setValues({ ...values, current_position: e.target.value })
          }
        />
        <label htmlFor="">PhD (University name)</label>
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
        <label htmlFor="">Research in interests</label>
        <input
          type="text"
          name="research_interests"
          onChange={(e) =>
            setValues({ ...values, research_interests: e.target.value })
          }
        />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input
            type="file"
            id="file"
            name="photo"
            onChange={(e) => setValues({ ...values, photo: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSupervisor;
