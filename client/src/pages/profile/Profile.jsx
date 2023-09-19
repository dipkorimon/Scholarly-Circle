import React, { useState } from "react";
import "./profile.scss";
import Photo from "../../../public/profile.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Post from "../../components/post/Post";

const Profile = () => {
  const [profile] = useState([
    {
      img: "../../../public/nstu.png",
      title: "University",
      desc: "Noakhali Science and Technology University",
    },
    {
      img: "../../../public/dept.png",
      title: "Department",
      desc: "Computer Science and Telecommunicaion Engineering",
    },
    {
      img: "../../../public/location.png",
      title: "Location",
      desc: "Noakhali, Chittagong, Bangladesh",
    },
    {
      img: "../../../public/research.png",
      title: "Research Interest",
      desc: "Machine Learning, Image Processing, Computer Networking",
    },
    {
      img: "../../../public/skill.png",
      title: "Skills and Expertise",
      desc: "C, C++, Pyhton, Machine Learning, Natural Language Processing, Computer Networking, Web Application Development",
    },
  ]);

  return (
    <div className="profile-page">
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
      <div className="posts-details">
        <h2>All posts added by Author</h2>
        <Post />
      </div>
    </div>
  );
};

export default Profile;
