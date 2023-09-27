import React, { useState } from "react";
import "./facultyMembers.scss";
import faculty from "/faculty.png";

const FacultyMembers = () => {
  const [facultyMembers] = useState([
    {
      photo: "/humayun sir.jpg",
      name: "Dr. Mohammed Humayun Kabir",
      position: "Professor",
    },
    {
      photo: "/javed sir.jpg",
      name: "Md. Javed Hossain",
      position: "Professor",
    },
    {
      photo: "/ashadun nobi sir.jpg",
      name: "Dr. Md. Ashadun Nobi",
      position: "Professor",
    },
    {
      photo: "/nahid mam.jpg",
      name: "Dr. Nahid Akter",
      position: "Professor",
    },
    {
      photo: "/nazia mam.png",
      name: "Dr. Nazia Majadi",
      position: "Associate Professor",
    },
    {
      photo: "/kamal sir.jpg",
      name: "Dr. Md. Kamal Uddin",
      position: "Associate Professor",
    },
    {
      photo: "/bappy mam.jpg",
      name: "Dr. Fateha Khanam Bappy",
      position: "Associate Professor",
    },
    {
      photo: "/azad sir.jpg",
      name: "Abul Kalam Azad",
      position: "Associate Professor",
    },
    {
      // photo: "/profile.jpg",
      name: "Iftekhar Mahmud Tawhid",
      position: "Assistant Professor",
    },
    {
      photo: "/hasnat sir.jpg",
      name: "Md. Hasnat Riaz",
      position: "Assistant Professor",
    },
    {
      photo: "/koushik sir.jpg",
      name: "Koushik Chandra Howlader",
      position: "Assistant Professor",
    },
    {
      photo: "/rana sir.jpg",
      name: "A.R.M Mahamudul Hasan Rana",
      position: "Assistant Professor",
    },
    {
      photo: "/ratnadip sir.jpg",
      name: "Ratnadip Kuri",
      position: "Assistant Professor",
    },
    {
      photo: "/akash sir.jpg",
      name: "A Q M SALA UDDIN PATHAN",
      position: "Assistant Professor",
    },
    {
      photo: "/milu mam.jpg",
      name: "Sharmin Akter Milu",
      position: "Lecturer",
    },
  ]);

  return (
    <div className="facultyMembers">
      <div className="title">
        <img src={faculty} alt="" />
        <p>Faculty Members</p>
      </div>
      <div className="members-list">
        {facultyMembers.map((item, index) => (
          <div className="info">
            <div className="img">
              <img src={item.photo} alt="" />
            </div>
            <div className="name">
              <p>{item.name}</p>
              <span>{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyMembers;
