import React from "react";
import "./requestSupervisor.scss";

const RequestSupervisor = () => {
  return (
    <div className="request-supervisor">
      <h1>Request for a Supervisor account</h1>
      <p>
        An asterisk (<span>*</span>) indicates required field
      </p>
      <form action="">
        <label htmlFor="">
          Supervisor ID<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="">
          Full name<span>*</span>
        </label>
        <input type="text" required />
        <label htmlFor="email">
          Email<span>*</span>
        </label>
        <input type="email" required />
        <label htmlFor="password">
          Password<span>*</span>
        </label>
        <input type="password" required />
        <label htmlFor="">
          Current position<span>*</span>
        </label>
        <select name="" id="">
          <option value="">Select Current Position</option>
          <option value="Professor">Professor</option>
          <option value="Associate Professor">Associate Professor</option>
          <option value="Assistant Professor">Assistant Professor</option>
          <option value="Lecturer">Lecturer</option>
        </select>
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

export default RequestSupervisor;
