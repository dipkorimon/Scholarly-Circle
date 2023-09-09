import React from "react";
import "./profile.scss";
import Photo from "../../../public/profile.jpg";
import Nstu from "../../../public/nstu.png";
import Dept from "../../../public/dept.png";
import Location from "../../../public/location.png";
import Research from "../../../public/research.png";
import Skill from "../../../public/skill.png";
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
          <div className="data">
            <img src={Nstu} alt="" />
            <strong>University</strong>
          </div>
          <span>Noakhali Science and Tchnology University, Bangladesh.</span>
        </p>
        <p>
          <div className="data">
            <img src={Dept} alt="" />
            <strong>Department</strong>
          </div>
          <span>Computer Science and Telecommunication Engineering.</span>
        </p>
        <p>
          <div className="data">
            <img src={Location} alt="" />
            <strong>Hometown</strong>
          </div>
          <span>Noakhali, Chittagong, Bangladesh.</span>
        </p>
        <p>
          <div className="data">
            <img src={Research} alt="" />
            <strong>Research Interest</strong>
          </div>
          <span>Natural Language Processing, Computer Networking.</span>
        </p>
        <p>
          <div className="data">
            <img src={Skill} alt="" />
            <strong>Skills and Expertise</strong>
          </div>
          <span>
            C, C++, Python, Machine Learning, Natural Language Processing,
            Computer Networking, Web Application Development.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
