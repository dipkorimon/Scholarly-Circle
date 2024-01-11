import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import Badge from "../../components/badge/Badge";

const SingleReport = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [session, setSession] = useState("");
  const [degree, setDegree] = useState("");
  const [category, setCategory] = useState("");
  const [defenseDate, setDefenseDate] = useState("");
  const [abstract, setAbstract] = useState("");
  const [reportType, setReportType] = useState("");
  const [publication, setPublicatin] = useState("");
  const [document, setDocument] = useState("");

  const [supervisor, setSupervisor] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports/" + id)
      .then((res) => {
        setTitle(res.data.data[0].title);
        setSession(res.data.data[0].session);
        setDegree(res.data.data[0].degree);
        setCategory(res.data.data[0].category);
        setDefenseDate(res.data.data[0].defense_date);
        setReportType(res.data.data[0].report_type);
        setAbstract(res.data.data[0].abstract);
        setPublicatin(res.data.data[0].publication);
        setDocument(res.data.data[0].document);
        setSupervisor(res.data.data1[0].full_name);
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
            <Badge value={session} />
            <Badge value={degree} />
            <Badge value={category} />
            <p>{moment(defenseDate).format("MMMM Do YYYY")}</p>
          </div>
          <div className="sup-aut">
            <p>
              <span>Supervisor: {supervisor}</span>
            </p>
            <p>
              <span>Authors: </span>
            </p>
          </div>
          <div className="abstract">
            <p>
              <span>Abstract: </span>
              {abstract}
            </p>
          </div>
          <div className="publication">
            {reportType == "thesis" ? (
              <a href={publication}>Publication Link</a>
            ) : (
              <a href={publication}>Live Demo Link</a>
            )}
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
