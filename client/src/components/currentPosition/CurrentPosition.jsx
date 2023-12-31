import React, { useEffect, useState } from "react";
import "./currentPosition.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import moment from "moment";

const CurrentPosition = () => {
  const { currentPosition } = useParams();

  const [position, setPosition] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/currentPositions/" + currentPosition)
      .then((res) => setPosition(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/supervisors/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const login = localStorage.getItem("ChairmanLogin");

  return (
    <div className="current-positions">
      <h3>All Supervisors of current position {currentPosition}</h3>
      <div className="pos-items">
        {position.map((item) => (
          <div className="sup-info" key={item.id}>
            <div className="img">
              <img
                src={`http://localhost:8800/documents/` + item.photo}
                alt=""
              />
            </div>
            <div className="name">
              <a href={`/supervisorReports/${item.supervisor_id}`}>
                {item.full_name}
              </a>
            </div>
            <div className="info">
              <div className="info-desc">
                <PersonIcon />
                <p style={{ fontWeight: "bold" }}>{item.current_position}</p>
              </div>
              <div className="info-desc">
                <SchoolIcon />
                <p>{item.education}</p>
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
                <DateRangeIcon />
                <p>
                  Joining Date:{" "}
                  {moment(item.joining_date).format("MMMM Do YYYY")}
                </p>
              </div>
              <div className="research">
                <div className="r-int">
                  <ArchitectureIcon />
                  <p>Research Interests:</p>
                </div>
                <p className="r-desc">{item.research_interests}</p>
              </div>
            </div>
            {login ? (
              <div className="update-delete">
                <button className="update">
                  <a href={`/updateSupervisor/${item.id}`}>Update details</a>
                </button>
                <button
                  className="remove"
                  onClick={() => handleDelete(item.id)}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default CurrentPosition;
