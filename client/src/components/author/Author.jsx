import React, { useEffect, useState } from "react";
import "./author.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import AdjustIcon from "@mui/icons-material/Adjust";
import axios from "axios";

const Author = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/authors")
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="author">
      {author.map((item, index) => (
        <div className="aut-info">
          <div className="img">
            <img src={item.photo} alt="" />
          </div>
          <div className="name">
            <h3>{item.full_name}</h3>
          </div>
          <div className="update-delete">
            <button>Update</button>
            <button>Delete</button>
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
