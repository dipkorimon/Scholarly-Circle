import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";

const SingleReport = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [supervisor_name, setSupervisorName] = useState("");
  const [authors_name, setAuthorsName] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [report_type, setReportType] = useState("");
  const [document, setDocument] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports/" + id)
      .then((res) => {
        setTitle(res.data[0].title);
        setAbstract(res.data[0].abstract);
        setSupervisorName(res.data[0].supervisor_name);
        setAuthorsName(res.data[0].authors_name);
        setSession(res.data[0].session);
        setCategory(res.data[0].category);
        setDefenseDate(res.data[0].defense_date);
        setReportType(res.data[0].report_type);
        setDocument(res.data[0].document);
      })
      .catch((err) => console.log(err));
  });

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
        <div className="info">
          <div className="title">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="post-details">
          <div className="category">
            <p>{session}</p>
            <p>{category}</p>
            <p>{report_type}</p>
          </div>
          <div className="abstract">
            <p>{abstract}</p>
          </div>
          <div className="supervisor-name">
            <SupervisorAccountIcon />
            <p>
              {supervisor_name} <span className="super">Supervisor</span>
            </p>
          </div>
          <div className="authors-name">
            <PersonIcon />
            <p>{authors_name}</p>
          </div>
          <div className="date">
            <DateRangeIcon />
            <p>{moment(defense_date).format("MMMM Do YYYY")}</p>
          </div>
        </div>
        <div className="document">
          <embed src={`http://localhost:8800/documents/` + document} type="" />
        </div>
        <div className="buttons">
          {chairmanLogin || supervisorLogin ? (
            <div className="update-delete">
              <a href={`/updateReport/${id}`}>
                <button className="update">Update</button>
              </a>
              <button className="delete" onClick={() => handleDelete(id)}>
                Delete
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
