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
            The Chairman and Supervisors can upload research papers that are
            under their supervision to Scholarly Circle and share them with
            other supervisors and authors.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>A search tool</h3>
          </div>
          <p>
            All users can filter all kinds of research papers and projects
            category-wise and can search research papers by sessions, authors,
            and their categories added by supervisors.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Download research papers</h3>
          </div>
          <p>All users can download the research papers that they need.</p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Roles of Chairman</h3>
          </div>
          <p>
            The Chairman can create supervisors and add authors and also can
            share projects and research papers.
          </p>
          <div className="icon">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <h3>Roles of supervisors</h3>
          </div>
          <p>
            Supervisors can add authors and can share projects and research
            papers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
