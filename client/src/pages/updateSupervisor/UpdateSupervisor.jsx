import React, { useState } from "react";
import "./updateSupervisor.scss";

const AddSupervisor = () => {
  return (
    <div className="updateSupervisor">
      <h1>Update supervisor</h1>
      <form action="">
        <label htmlFor="">Full name</label>
        <input type="text" />
        <label htmlFor="email">email</label>
        <input type="email" />
        <label htmlFor="password">password</label>
        <input type="password" />
        <label htmlFor="">Current position</label>
        <input type="text" />
        <label htmlFor="">PhD (University name)</label>
        <input type="text" />
        <label htmlFor="">Phone</label>
        <input type="text" />
        <label htmlFor="">Joining date</label>
        <input type="date" />
        <label htmlFor="">Research in interests</label>
        <input type="text" />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input type="file" id="file" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddSupervisor;
