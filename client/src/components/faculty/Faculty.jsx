import React, { useState } from "react";
import "./faculty.scss";

const Faculty = () => {
  const [faculty] = useState([
    {
      name: "Faculty of Engineering",
    },
    {
      name: "Faculty of Science",
    },
    {
      name: "Faculty of Social Science and Humanities",
    },
    {
      name: "Faculty of Business Administration",
    },
    {
      name: "Faculty of Education Sciences",
    },
    {
      name: "Faculty of Law",
    },
  ]);

  return (
    <div className="faculty">
      <p>Faculties and Departments</p>
      <div className="faculty-list">
        {faculty.map((item, index) => (
          <a href="">
            {item.name}
            <br />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
