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
            title="Role-Based Access Control"
            desc="Differentiated access levels ensure that users can perform tasks according to their roles and responsibilities, promoting efficient collaboration and accountability."
          />
          <AboutInfo
            title="Comprehensive Search Functionality"
            desc="Advanced search tools enable users to
quickly locate relevant project and thesis reports based on keywords, authors,
supervisors, and other criteria, enhancing discoverability and accessibility."
          />
          <AboutInfo
            title="Secure Report Management"
            desc="Robust security measures and version control
mechanisms safeguard sensitive data and ensure the integrity of uploaded reports,
fostering trust and confidence among users."
          />
          <AboutInfo
            title="User Account Management"
            desc="Seamless account creation and approval processes
facilitate user onboarding, while profile management tools empower users to
customize their experience and track their contributions."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
