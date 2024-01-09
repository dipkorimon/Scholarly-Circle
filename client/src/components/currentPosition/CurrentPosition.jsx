import React, { useEffect, useState } from "react";
import "./currentPosition.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <div className="current-position">
      <div className="all-items">
        <div className="pos">
          <h3>All Supervisors of current position {currentPosition}</h3>
        </div>
        <div className="all-info">
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
                <div className="info-pos">
                  <p>{item.current_position}</p>
                </div>
                <div className="info-email">
                  <p>{item.email}</p>
                </div>
              </div>

              <div className="update-delete">
                <button className="view-reports">
                  <a href={`/supervisorReports/${item.supervisor_id}`}>
                    View Reports
                  </a>
                </button>
                {login ? (
                  <div className="icons">
                    <button className="update">
                      <a href={`/updateSupervisor/${item.id}`}>
                        <EditIcon style={{ fontSize: 20 }} />
                      </a>
                    </button>
                    <button
                      className="remove"
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteIcon style={{ fontSize: 20 }} />
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentPosition;
