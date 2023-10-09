import React, { useEffect, useState } from "react";
import "./author.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import AdjustIcon from "@mui/icons-material/Adjust";
import NumbersIcon from "@mui/icons-material/Numbers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const Author = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/authors")
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/authors/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const chairmanLogin = localStorage.getItem("ChairmanLogin");
  const supervisorLogin = localStorage.getItem("SupervisorLogin");

  return (
    <div className="author">
      {author.map((item, index) => (
        <div className="aut-info">
          <div className="img">
            <img src={item.photo} alt="" />
          </div>
          <div className="name">
            <h3>{item.full_name}</h3>
            {chairmanLogin || supervisorLogin ? (
              <div>
                <a href={`/updateAuthor/${item.id}`}>
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
              <NumbersIcon />
              <p>{item.student_id}</p>
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
