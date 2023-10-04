import React from "react";
import "./addSupervisor.scss";

const AddSupervisor = () => {
  return (
    <div className="addSupervisor">
      <h1>
        Add supervisor with full name, email, password, current position,
        university name from where PhD degree owned, phone number, blood group,
        joining date, research interests, about and a photo.
      </h1>
      <form action="">
        <label htmlFor="">Full name</label>
        <input type="text" />
        <label htmlFor="">email</label>
        <input type="email" />
        <label htmlFor="">password</label>
        <input type="password" />
        <label htmlFor="">Current position</label>
        <input type="text" />
        <label htmlFor="">PhD (University name)</label>
        <input type="text" />
        <label htmlFor="">Phone</label>
        <input type="text" />
        <label htmlFor="">Blood group</label>
        <input type="text" />
        <label htmlFor="">Joining date</label>
        <input type="date" />
        <label htmlFor="">Research in interests</label>
        <input type="text" />
        <label htmlFor="">About</label>
        <textarea type="text" />
        <div className="photo-upload">
          <label htmlFor="file">Upload Photo</label>
          <input type="file" id="file" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddSupervisor;
