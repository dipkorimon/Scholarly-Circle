import React, { useState } from "react";
import "./supervisor.scss";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const Supervisor = () => {
  const [supervisors] = useState([
    {
      id: 1,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "A+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 1,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "A+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 1,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "A+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 1,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "A+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 1,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "A+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 2,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "B+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 2,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "B+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
    {
      id: 2,
      photo: "/profile.png",
      full_name: "Unknown name",
      current_position: "Assistant Professor",
      phd: "University name",
      email: "example@nstu.edu.bd",
      phone: "01600000000",
      blood_group: "B+",
      joining_date: "10-10-2018",
      research_interests:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, eligendi.",
    },
  ]);

  return (
    <div className="supervisor">
      {supervisors.map((item, index) => (
        <div className="sup-info">
          <div className="img">
            <img src={item.photo} alt="" />
          </div>
          <div className="name">
            <h3>{item.full_name}</h3>
          </div>
          <div className="info">
            <div className="info-desc">
              <PersonIcon />
              <p>{item.current_position}</p>
            </div>
            <div className="info-desc">
              <SchoolIcon />
              <p>PhD ({item.phd})</p>
            </div>
            <div className="info-desc">
              <EmailIcon />
              <p>{item.email}</p>
            </div>
            <div className="info-desc">
              <PhoneIcon />
              <p>{item.phone}</p>
            </div>
            <div className="info-desc">
              <BloodtypeIcon />
              <p>Blood Group: {item.blood_group}</p>
            </div>
            <div className="info-desc">
              <DateRangeIcon />
              <p>Joining Date: {item.joining_date}</p>
            </div>
            <div className="research">
              <div className="r-int">
                <ArchitectureIcon />
                <p>Research Interests:</p>
              </div>
              <p className="r-desc">{item.research_interests}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Supervisor;
