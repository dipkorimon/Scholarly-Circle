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
            desc="All users can search project and thesis reports by keywords related to reports."
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
          <AboutInfo
            title="Request for an account"
            desc="Supervisors and authors can make account creation requests which will be accepted by the Chairman and supervisors if the person is valid."
          />
          <AboutInfo
            title="Statistics of Scholarly Circle"
            desc="Statistics of Scholarly Circle is a study of data describing
        the total number of Supervisors, Authors, and Reports added."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
