import React, { useState } from "react";
import "./facultyMembers.scss";
import faculty from "../../../public/faculty.png";

const FacultyMembers = () => {
  const [facultyMembers] = useState([
    {
      photo: "../../../public/humayun sir.jpg",
      name: "Dr. Mohammed Humayun Kabir",
      position: "Professor",
    },
    {
      photo: "../../../public/javed sir.jpg",
      name: "Md. Javed Hossain",
      position: "Professor",
    },
    {
      photo: "../../../public/ashadun nobi sir.jpg",
      name: "Dr. Md. Ashadun Nobi",
      position: "Professor",
    },
    {
      photo: "../../../public/nahid mam.jpg",
      name: "Dr. Nahid Akter",
      position: "Professor",
    },
    {
      photo: "../../../public/nazia mam.png",
      name: "Dr. Nazia Majadi",
      position: "Associate Professor",
    },
    {
      photo: "../../../public/kamal sir.jpg",
      name: "Dr. Md. Kamal Uddin",
      position: "Associate Professor",
    },
    {
      photo: "../../../public/bappy mam.jpg",
      name: "Dr. Fateha Khanam Bappy",
      position: "Associate Professor",
    },
    {
      photo: "../../../public/azad sir.jpg",
      name: "Abul Kalam Azad",
      position: "Associate Professor",
    },
    {
      // photo: "../../../public/profile.jpg",
      name: "Iftekhar Mahmud Tawhid",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/hasnat sir.jpg",
      name: "Md. Hasnat Riaz",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/koushik sir.jpg",
      name: "Koushik Chandra Howlader",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/rana sir.jpg",
      name: "A.R.M Mahamudul Hasan Rana",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/ratnadip sir.jpg",
      name: "Ratnadip Kuri",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/akash sir.jpg",
      name: "A Q M SALA UDDIN PATHAN",
      position: "Assistant Professor",
    },
    {
      photo: "../../../public/milu mam.jpg",
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
