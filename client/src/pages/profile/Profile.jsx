import React, { useState } from "react";
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
  const [profile] = useState([
    {
      img: { Nstu },
      title: "University",
      desc: "Noakhali Science and Technology University",
    },
    {
      img: { Dept },
      title: "Department",
      desc: "Computer Science and Telecommunicaion Engineering",
    },
    {
      img: { Location },
      title: "Location",
      desc: "Noakhali, Chittagong, Bangladesh",
    },
    {
      img: { Research },
      title: "Research Interest",
      desc: "Machine Learning, Image Processing, Computer Networking",
    },
    {
      img: { Skill },
      title: "Skills and Expertise",
      desc: "C, C++, Pyhton, Machine Learning, Natural Language Processing, Computer Networking, Web Application Development",
    },
  ]);

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
          <a href="/singlePost" className="post">
            Post New Item
          </a>
        </div>
      </div>
      <div className="right">
        <h1>Personal Information</h1>
        {profile.map((item, index) => (
          <p>
            <div className="data">
              <img src={item.img} alt="" />
              <strong>{item.title}</strong>
            </div>
            <span>{item.desc}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
