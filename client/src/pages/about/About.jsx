import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <div className="header">
          <p>
            Scholarly Circle is a project and research paper-sharing platform
            for the Department of Computer Science and Telecommunication
            Engineering, NSTU.
          </p>
        </div>
        <div className="desc">
          <p className="incl">
            Scholarly Circle offers a variety of features, including:
          </p>
          <ul className="list">
            <li>
              A project and research paper sharing platform: The Chairman and
              Supervisors can upload research papers that are under their
              supervision to Scholarly Circle and share them with other
              supervisors and authors.
            </li>
            <li>
              A search tool: All users can filter all kinds of research papers
              category-wise and can search research papers by sessions, authors,
              and their categories added by supervisors.
            </li>
            <li>
              A news feed: All users can stay up-to-date on the latest
              research-related posts.
            </li>
            <li>
              Download research papers: All users can download the research
              papers that they need.
            </li>
            <li>
              Roles of Chairman: The Chairman can create supervisors and add
              authors and also can share projects and research papers.
            </li>
            <li>
              Roles of supervisors: Supervisors can add authors and can share
              projects and research papers.
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
