import React from "react";
import "./about.scss";
import Photo from "/about.svg";
import AboutInfo from "../aboutInfo/AboutInfo";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <img src={Photo} alt="" />
      </div>
      <div className="right">
        <div className="features">
          <h1>About Scholarly Circle</h1>
          <p>Scholarly Circle offers a variety of features, including:</p>
        </div>
        <div className="info">
          <AboutInfo
            title="A project and research paper sharing platform"
            desc="The Chairman and Supervisors can upload project and thesis reports that
        are under their supervision to Scholarly Circle and share them with
        other supervisors and authors."
          />
          <AboutInfo
            title="A search tool"
            desc="All users can search project and thesis reports by sessions, authors,
        and their categories added by supervisors or chairman."
          />
          <AboutInfo
            title="Download reports"
            desc="All users can download the project and thesis reports that they need."
          />
          <AboutInfo
            title="Roles of Chairman"
            desc="The Chairman can add supervisors and authors and also can share project
        and thesis reports."
          />
          <AboutInfo
            title="Roles of supervisors"
            desc="Supervisors can add authors and can share project and thesis reports."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
