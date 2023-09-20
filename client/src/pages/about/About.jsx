import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="about-page">
        <div className="header">
          <p>
            Scholarly Circle is a social networking website for scientists and
            researchers to share papers, and find collaborators.
          </p>
        </div>
        <div className="desc">
          <p className="incl">
            Scholarly Circle offers a variety of features for researchers,
            including:
          </p>
          <ul className="list">
            <li>
              A paper-sharing platform: Researchers can upload their papers to
              Scholarly Circle and share them with other researchers.
            </li>
            <li>
              A collaborator search tool: Researchers can search for other
              researchers who are working in their field. All users can filter
              all kinds of research papers department-wise and category-wise and
              can search research papers by their tags and categories added by
              authors.
            </li>
            <li>
              A news feed: Researchers can stay up-to-date on the latest
              research-related posts.
            </li>
            <li>
              A profile page: Researchers can create a profile page to showcase
              their research and experience.
            </li>
            <li>
              Citation: A “citation” is the way you tell your readers that
              certain material in your work came from another source. It also
              gives your readers the information necessary to find the location
              details of that source on the reference or Works Cited page. All
              users can give citations in any posts that are helpful for them.
            </li>
          </ul>
        </div>
        <div className="bottom">
          <p>
            Scholarly Circle is a valuable resource for scientists and
            researchers. It provides a platform for sharing research, and
            finding collaborators. However, it is important to be aware of the
            potential for academic misconduct on the website.
          </p>
          <br />
          <p>
            It is specially made for{" "}
            <a href="https://nstu.edu.bd/">
              Noakhali Science and Technology University
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
