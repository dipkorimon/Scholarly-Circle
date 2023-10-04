import React, { useState } from "react";
import "./author.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import AdjustIcon from "@mui/icons-material/Adjust";

const Author = () => {
  const [authors] = useState([
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      photo: "/profile.png",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
    {
      id: "1",
      full_name: "Unknown Name",
      photo: "/profile.png",
      current_position: "Student",
      email: "example@student.nstu.edu.bd",
      session: "2017-2018",
      batch: "13",
      phone: "01600000000",
      blood_group: "A+",
      defense_date: "10-10-2023",
    },
  ]);

  return (
    <div className="author">
      {authors.map((item, index) => (
        <div className="aut-info">
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
              <EmailIcon />
              <p>{item.email}</p>
            </div>
            <div className="info-desc">
              <PhoneIcon />
              <p>{item.phone}</p>
            </div>
            <div className="info-desc">
              <AdjustIcon />
              <p>Session: {item.session}</p>
            </div>
            <div className="info-desc">
              <BatchPredictionIcon />
              <p>Batch: {item.batch}</p>
            </div>
            <div className="info-desc">
              <BloodtypeIcon />
              <p>Blood Group: {item.blood_group}</p>
            </div>
            <div className="info-desc">
              <DateRangeIcon />
              <p>Defense Date: {item.defense_date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Author;
