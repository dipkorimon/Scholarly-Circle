import React from "react";
import "./profile.scss";
import Photo from "../../../public/profile.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Profile = () => {
  return (
    <div className="profile">
      <div className="left">
        <div className="img">
          <img src={Photo} alt="" />
        </div>
        <div className="info">
          <h1>Unknown Name</h1>
          <p>
            <span>Position:</span> Associate Professor
          </p>
          <a href="#">
            <LinkedInIcon /> Connect
          </a>
          <a href="#">
            <EmailIcon /> Contact
          </a>
        </div>
      </div>
      <div className="right">
        <h1>Personal Information</h1>
        <p>
          From{" "}
          <span>Noakhali Science and Tchnology University, Bangladesh</span>.
        </p>
        <p>
          Department of{" "}
          <span>Computer Science and Telecommunication Engineering</span>.
        </p>
        <p>
          <span>Hometown:</span> Noakhali, Chittagong, Bangladesh
        </p>
        <p>
          <span>Research interest:</span> Natural Language Processing, Computer
          Networking.
        </p>
        <p>
          <span>Skills and expertise:</span> C, C++, Python, Machine Learning,
          Natural Language Processing, Computer Networking, Web Application
          Development.
        </p>
      </div>
    </div>
  );
};

export default Profile;
