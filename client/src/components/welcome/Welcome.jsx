import React from "react";
import "./welcome.scss";
import welcome from "/welcome.jpg";

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>A project and research paper-sharing platform</h1>
      <div className="about">
        <p>
          For the Department of Computer Science and Telecommunication
          Engineering
        </p>
        <p>Noakhali Science and Technology University</p>
      </div>
      <div className="explore">
        <a href="/reports">Explore</a>
      </div>
      <div className="photo">
        <img src={welcome} alt="" />
      </div>
      <p>
        Offers a search tool for searching your expected research papers or
        projects
      </p>
    </div>
  );
};

export default Welcome;
