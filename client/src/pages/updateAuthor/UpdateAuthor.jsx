import React, { useState } from "react";
import "./updateAuthor.scss";

const AddAuthor = () => {
  return (
    <div className="updateAuthor">
      <h1>Update author</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="">
        <label htmlFor="">
          Student ID<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Email<span>*</span>
        </label>
        <input type="email" required />
        <label htmlFor="">
          Session<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Batch<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Current Position<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Defense date<span>*</span>
        </label>
        <input type="date" name="defense_date" required />
        <div className="photo-upload">
          <label htmlFor="file">
            Upload Photo<span>*</span>
          </label>
          <input type="file" id="file" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAuthor;
