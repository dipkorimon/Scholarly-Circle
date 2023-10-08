import React, { useState } from "react";
import "./updateAuthor.scss";

const AddAuthor = () => {
  return (
    <div className="updateAuthor">
      <h1>Update author</h1>
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
        <label htmlFor="">Current Position</label>
        <input type="text" />
        <label htmlFor="">Phone</label>
        <input type="text" />
        <label htmlFor="">Blood Group</label>
        <input type="text" />
        <label htmlFor="">Defense date</label>
        <input type="date" name="defense_date" />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input type="file" id="file" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
