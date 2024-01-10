import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import Badge from "../../components/badge/Badge";

const SingleReport = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports/" + id)
      .then((res) => {
        setTitle(res.data[0].title);
      })
      .catch((err) => console.log(err));
  });

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/reports/" + id);
      navigate("/reports");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const chairmanLogin = localStorage.getItem("ChairmanLogin");
  const supervisorLogin = localStorage.getItem("SupervisorLogin");

  return (
    <div className="single-report">
      <div className="post-item" key={id}>
        <div className="post-info">
          <h3>{title}</h3>
          <div className="session-date">
            <Badge value={title} />
            <Badge value={title} />
            <Badge value={title} />
            <p>{moment(title).format("MMMM Do YYYY")}</p>
          </div>
          <div className="sup-aut">
            <p>
              <span>Supervisor: </span>
            </p>
            <p>
              <span>Authors: </span>
            </p>
          </div>
          <div className="abstract">
            <p>
              <span>Abstract: </span>
              {title}
            </p>
          </div>
          <div className="publication">
            {title == "thesis" ? (
              <a href={title}>Publication Link</a>
            ) : (
              <a href={title}>Live Demo Link</a>
            )}
          </div>
        </div>
        <div className="document">
          <embed src={`http://localhost:8800/documents/` + title} type="" />
        </div>
        <div className="buttons">
          {chairmanLogin || supervisorLogin ? (
            <div className="update-delete">
              <button className="update">
                {" "}
                <a href={`/updateReport/${id}`}>Update details</a>
              </button>
              <button className="delete" onClick={() => handleDelete(id)}>
                Remove report
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleReport;
