import React from "react";
import "./about.scss";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import Photo from "/about.jpg";

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
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>A project and research paper sharing platform</h3>
          </div>
          <p>
            The Chairman and Supervisors can upload project and thesis reports
            that are under their supervision to Scholarly Circle and share them
            with other supervisors and authors.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>A search tool</h3>
          </div>
          <p>
            All users can search project and thesis reports by sessions,
            authors, and their categories added by supervisors or chairman.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Download reports</h3>
          </div>
          <p>
            All users can download the project and thesis reports that they
            need.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Roles of Chairman</h3>
          </div>
          <p>
            The Chairman can add supervisors and authors and also can share
            project and thesis reports.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Roles of supervisors</h3>
          </div>
          <p>
            Supervisors can add authors and can share project and thesis
            reports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
