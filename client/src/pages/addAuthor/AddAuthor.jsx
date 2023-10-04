import React from "react";
import "./addAuthor.scss";

const AddAuthor = () => {
  return (
    <div className="addAuthor">
      <h1>
        Add author with student ID, full name, email, session, batch, defense
        date and a photo.
      </h1>
      <form action="">
        <label htmlFor="">Student ID</label>
        <input type="text" />
        <label htmlFor="">Full name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Session</label>
        <input type="text" />
        <label htmlFor="">Batch</label>
        <input type="text" />
        <label htmlFor="">Defense date</label>
        <input type="date" />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input type="file" id="file" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
