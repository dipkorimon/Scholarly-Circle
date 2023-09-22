import React, { useState } from "react";
import "./faculty.scss";
import Faculty_photo from "../../../public/faculty.png";

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
    {
      name: "Institute of Information Sciences (IIS)",
    },
    {
      name: "Institute of Information Technology (IIT)",
    },
  ]);

  return (
    <div className="faculty">
      <div className="title">
        <img src={Faculty_photo} alt="" />
        <p>Faculties and Institutes</p>
      </div>
      <div className="faculty-list">
        {faculty.map((item, index) => (
          <button href="">
            {item.name}
            <br />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
