import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <div className="header">
          <p>
            Scholarly Circle is a social networking website for Department of
            Computer Science and Telecommunication Engineering to share research
            papers.
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
              category-wise and can search research papers by their tags and
              categories added by supervisors.
            </li>
            <li>
              A news feed: All users can stay up-to-date on the latest
              research-related posts.
            </li>
            <li>
              A profile page: All users can create a profile page to showcase
              their research interest and experience.
            </li>
            <li>
              Citation: A “citation” is the way you tell your readers that
              certain material in your work came from another source. It also
              gives your readers the information necessary to find the location
              details of that source on the reference or Works Cited page. All
              users can give citations in any research papers that are helpful
              for them.
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>
            It is specially made for It is specially made for{" "}
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
