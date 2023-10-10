import React, { useEffect, useState } from "react";
import "./supervisor.scss";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import moment from "moment";

const Supervisor = () => {
  const [supervisor, setSupervisor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/supervisors")
      .then((res) => setSupervisor(res.data))
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
    <div className="supervisor">
      {supervisor.map((item) => (
        <div className="sup-info" key={item.id}>
          <div className="img">
            <img src={item.photo} alt="" />
          </div>
          <div className="name">
            <h3>{item.full_name}</h3>
            {login ? (
              <div>
                <a href={`/updateSupervisor/${item.id}`}>
                  <EditIcon
                    style={{
                      fontSize: "25",
                      color: "rgb(42, 52, 71)",
                    }}
                  />
                </a>
                <button onClick={() => handleDelete(item.id)}>
                  <DeleteIcon
                    style={{
                      fontSize: "25",
                      color: "rgb(229, 18, 46)",
                    }}
                  />
                </button>
              </div>
            ) : (
              <div></div>
            )}
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
              <DateRangeIcon />
              <p>
                Joining Date: {moment(item.joining_date).format("MMMM Do YYYY")}
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
        </div>
      ))}
    </div>
  );
};

export default Supervisor;
