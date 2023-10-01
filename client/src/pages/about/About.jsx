import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <div className="header">
          <p>
            Scholarly Circle is a social networking website for the Department
            of Computer Science and Telecommunication Engineering to share
            research papers.
          </p>
        </div>
        <div className="desc">
          <p className="incl">
            Scholarly Circle offers a variety of features, including:
          </p>
          <ul className="list">
            <li>
              A paper-sharing platform: Supervisors can upload their papers
              which are under their supervision to Scholarly Circle and share
              them with other researchers.
            </li>
            <li>
              A search tool: All users can filter all kinds of research papers
              category-wise and can search research papers by sessions and their
              categories added by supervisors.
            </li>
            <li>
              A news feed: All users can stay up-to-date on the latest
              research-related posts.
            </li>
            <li>
              Download research papers: All users can download the research
              papers that they need.
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>
            It is specially made for It is specially made for the{" "}
            <span>
              Department of Computer Science and Telecommunication Engineering
            </span>
            , Noakhali Science and Technology University.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
