import React, { useState } from "react";
import "./updateSupervisor.scss";

const AddSupervisor = () => {
  return (
    <div className="updateSupervisor">
      <h1>Update supervisor</h1>
      <p>
        An asterisk (<span>*</span>) indicates a required field
      </p>
      <form action="">
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="email">
          email<span>*</span>
        </label>
        <input type="email" required />
        <label htmlFor="password">
          password<span>*</span>
        </label>
        <input type="password" required />
        <label htmlFor="">
          Current position<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          PhD (University name)<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Phone<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Joining date<span>*</span>
        </label>
        <input type="date" required />
        <label htmlFor="">
          Research in interests<span>*</span>
        </label>
        <input type="text" required />
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

export default AddSupervisor;
