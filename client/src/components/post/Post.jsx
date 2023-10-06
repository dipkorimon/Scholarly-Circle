import React, { useEffect, useState } from "react";
import "./post.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";

const Post = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="post">
      {report.map((item, index) => (
        <div className="post-item">
          <div className="info">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="sup">
              <h5>{item.supervisor_name}</h5>
              <p>Supervisor</p>
            </div>
          </div>
          <div className="post-details">
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="category">
              <p>{item.session}</p>
              <p>{item.category}</p>
            </div>
            <div className="abstract">
              <p>{item.abstract}</p>
            </div>
            <div className="authors-name">
              <PersonIcon />
              <p>{item.authors_name}</p>
            </div>
            <div className="date">
              <DateRangeIcon />
              <p>{item.date}</p>
            </div>
          </div>
          <div className="buttons">
            <button>Download full-text</button>
            <button>Download Presentation</button>
            <button style={{ background: "none", padding: "0" }}>
              <DeleteIcon
                style={{
                  fontSize: "25",
                  color: "rgb(229, 18, 46)",
                }}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
