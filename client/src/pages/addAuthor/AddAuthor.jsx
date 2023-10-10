import React, { useState } from "react";
import "./addAuthor.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validation from "../validation/AuthorValidation";

const AddAuthor = () => {
  const [values, setValues] = useState({
    student_id: "",
    full_name: "",
    email: "",
    session: "",
    batch: "",
    current_position: "",
    phone: "",
    defense_date: "",
    photo: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (
      errors.student_id == "" &&
      errors.full_name === "" &&
      errors.email === ""
    ) {
      axios
        .post("http://localhost:8800/addAuthor", values)
        .then((res) => {
          if (res.data.Status === "Success") {
            navigate("/authors");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="addAuthor">
      <h1>
        Add author with student ID, full name, email, session, batch,
        current_position, phone, blood group, defense date and a photo.
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Student ID</label>
        <input
          type="text"
          name="student_id"
          onChange={(e) => setValues({ ...values, student_id: e.target.value })}
        />
        {errors.student_id && <span>{errors.student_id}</span>}
        <label htmlFor="">Full name</label>
        <input
          type="text"
          name="full_name"
          onChange={(e) => setValues({ ...values, full_name: e.target.value })}
        />
        {errors.full_name && <span>{errors.full_name}</span>}
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        {errors.email && <span>{errors.email}</span>}
        <label htmlFor="">Session</label>
        <input
          type="text"
          name="session"
          onChange={(e) => setValues({ ...values, session: e.target.value })}
        />
        <label htmlFor="">Batch</label>
        <input
          type="text"
          name="batch"
          onChange={(e) => setValues({ ...values, batch: e.target.value })}
        />
        <label htmlFor="">Current Position</label>
        <input
          type="text"
          name="current_position"
          onChange={(e) =>
            setValues({ ...values, current_position: e.target.value })
          }
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
        <label htmlFor="">Defense date</label>
        <input
          type="date"
          name="defense_date"
          onChange={(e) =>
            setValues({ ...values, defense_date: e.target.value })
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

export default AddAuthor;
