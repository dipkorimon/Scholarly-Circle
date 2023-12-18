import React, { useEffect, useState } from "react";
import "./authorSession.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import AdjustIcon from "@mui/icons-material/Adjust";
import NumbersIcon from "@mui/icons-material/Numbers";
import axios from "axios";
import moment from "moment";
import { useParams } from "react-router-dom";

const AuthorSession = () => {
  const { session } = useParams();

  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/authorSessions/" + session)
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
    <div className="author-session">
      <h3>All Authors of {session} session</h3>
      <div className="aut-items">
        {author.map((item) => (
          <div className="aut-info" key={item.id}>
            <div className="img">
              <img
                src={`http://localhost:8800/documents/` + item.photo}
                alt=""
              />
            </div>
            <div className="name">
              <h3>{item.full_name}</h3>
            </div>
            <div className="info">
              <div className="info-desc">
                <PersonIcon />
                <p style={{ fontWeight: "bold" }}>Student</p>
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
                <p>
                  Defense Date:{" "}
                  {moment(item.defense_date).format("MMMM Do YYYY")}
                </p>
              </div>
            </div>
            {chairmanLogin || supervisorLogin ? (
              <div className="update-delete">
                <button className="update">
                  <a href={`/updateAuthor/${item.id}`}>Update details</a>
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

export default AuthorSession;
