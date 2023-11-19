import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AdjustIcon from "@mui/icons-material/Adjust";
import CategoryIcon from "@mui/icons-material/Category";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import LinkIcon from "@mui/icons-material/Link";
import ArticleIcon from "@mui/icons-material/Article";
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
  const [publication, setPublication] = useState("");
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
        setPublication(res.data[0].publication);
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
          <div className="abstract">
            <p>
              <span>Abstract: </span>
              {abstract}
            </p>
          </div>
          <div className="supervisor-name">
            <SupervisorAccountIcon />
            <p>
              {supervisor_name} <span>Supervisor</span>
            </p>
          </div>
          <div className="authors-name">
            <PersonIcon />
            <p>
              {authors_name} <span>Authors</span>
            </p>
          </div>
          <div className="date">
            <DateRangeIcon />
            <p>
              {moment(defense_date).format("MMMM Do YYYY")}{" "}
              <span>Defense date</span>
            </p>
          </div>
          <div className="session">
            <AdjustIcon />
            <p>
              {session} <span>Session</span>
            </p>
          </div>
          <div className="category">
            <CategoryIcon />
            <p>
              {category} <span>Category</span>
            </p>
          </div>
          <div className="report_type">
            <MergeTypeIcon />
            <p>
              {report_type} <span>Report type</span>
            </p>
          </div>
          <div className="publication">
            <LinkIcon />
            <a href={publication}>
              <button>Publication link</button>
            </a>
          </div>
        </div>
        <div className="document">
          <embed src={`http://localhost:8800/documents/` + document} type="" />
        </div>
        <div className="buttons">
          {chairmanLogin || supervisorLogin ? (
            <div className="update-delete">
              <button className="update">
                {" "}
                <a href={`/updateReport/${id}`}>Update details</a>
              </button>
              <button className="delete" onClick={() => handleDelete(id)}>
                Delete report
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
