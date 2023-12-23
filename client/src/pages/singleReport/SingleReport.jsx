import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import Badge from "../../components/badge/Badge";

const SingleReport = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [supervisor_id, setSupervisorId] = useState("");
  const [first_author_id, setFirstAuthorId] = useState("");
  const [second_author_id, setSecondAuthorId] = useState("");
  const [third_author_id, setThirdAuthorId] = useState("");
  const [fourth_author_id, setFourthAuthorId] = useState("");
  const [fifth_author_id, setFifthAuthorId] = useState("");
  const [session, setSession] = useState("");
  const [category, setCategory] = useState("");
  const [defense_date, setDefenseDate] = useState("");
  const [report_type, setReportType] = useState("");
  const [degree, setDegree] = useState("");
  const [publication, setPublication] = useState("");
  const [document, setDocument] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports/" + id)
      .then((res) => {
        setTitle(res.data[0].title);
        setAbstract(res.data[0].abstract);
        setSupervisorId(res.data[0].supervisor_id);
        setFirstAuthorId(res.data[0].first_author_id);
        setSecondAuthorId(res.data[0].second_author_id);
        setThirdAuthorId(res.data[0].third_author_id);
        setFourthAuthorId(res.data[0].fourth_author_id);
        setFifthAuthorId(res.data[0].fifth_author_id);
        setSession(res.data[0].session);
        setCategory(res.data[0].category);
        setDefenseDate(res.data[0].defense_date);
        setReportType(res.data[0].report_type);
        setDegree(res.data[0].degree);
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
        <div className="post-info">
          <h3>{title}</h3>
          <div className="session-date">
            <Badge value={session} />
            <Badge value={category} />
            <Badge value={degree} />
            <p>{moment(defense_date).format("MMMM Do YYYY")}</p>
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
              {abstract}
            </p>
          </div>
          <div className="publication">
            {report_type == "thesis" ? (
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
