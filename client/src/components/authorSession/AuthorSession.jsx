import React, { useEffect, useState } from "react";
import "./authorSession.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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
      <div className="all-items">
        <div className="sess">
          <h3>All Author of {session} session</h3>
        </div>
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
                <div className="info-id">
                  <p>{item.student_id}</p>
                </div>
                <div className="info-email">
                  <p>{item.email}</p>
                </div>
              </div>

              <div className="update-delete">
                <button className="view-reports">
                  <a>View Reports</a>
                </button>
                {chairmanLogin || supervisorLogin ? (
                  <div className="icons">
                    <button className="update">
                      <a href={`/updateAuthor/${item.id}`}>
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

export default AuthorSession;
