import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import axios from "axios";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import Badge from "../../components/badge/Badge";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

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

  const [supervisorId, setSupervisorId] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [supervisorImg, setSupervisorImg] = useState("");

  const [firstAuthorId, setFirstAuthorId] = useState("");
  const [firstAuthor, setFirstAuthor] = useState("");
  const [firstAuthorImg, setFirstAuthorImg] = useState("");

  const [secondAuthorId, setSecondAuthorId] = useState("");
  const [secondAuthor, setSecondAuthor] = useState("");
  const [secondAuthorImg, setSecondAuthorImg] = useState("");

  const [thirdAuthorId, setThirdAuthorId] = useState("");
  const [thirdAuthor, setThirdAuthor] = useState("");
  const [thirdAuthorImg, setThirdAuthorImg] = useState("");

  const [fourthAuthorId, setFourthAuthorId] = useState("");
  const [fourthAuthor, setFourthAuthor] = useState("");
  const [fourthAuthorImg, setFourthAuthorImg] = useState("");

  const [fifthAuthorId, setFifthAuthorId] = useState("");
  const [fifthAuthor, setFifthAuthor] = useState("");
  const [fifthAuthorImg, setFifthAuthorImg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports/" + id)
      .then((res) => {
        setTitle(res.data.report[0].title);
        setSession(res.data.report[0].session);
        setDegree(res.data.report[0].degree);
        setCategory(res.data.report[0].category);
        setDefenseDate(res.data.report[0].defense_date);
        setReportType(res.data.report[0].report_type);
        setAbstract(res.data.report[0].abstract);
        setPublicatin(res.data.report[0].publication);
        setDocument(res.data.report[0].document);
        setSupervisorId(res.data.supervisor[0].supervisor_id);
        setSupervisor(res.data.supervisor[0].full_name);
        setSupervisorImg(res.data.supervisor[0].photo);
        setFirstAuthorId(res.data.firstAuthor[0].student_id);
        setFirstAuthor(res.data.firstAuthor[0].full_name);
        setFirstAuthorImg(res.data.firstAuthor[0].photo);
        setSecondAuthorId(res.data.secondAuthor[0].student_id);
        setSecondAuthor(res.data.secondAuthor[0].full_name);
        setSecondAuthorImg(res.data.secondAuthor[0].photo);
        setThirdAuthorId(res.data.thirdAuthor[0].student_id);
        setThirdAuthor(res.data.thirdAuthor[0].full_name);
        setThirdAuthorImg(res.data.thirdAuthor[0].photo);
        setFourthAuthorId(res.data.fourthAuthor[0].student_id);
        setFourthAuthor(res.data.fourthAuthor[0].full_name);
        setFourthAuthorImg(res.data.fourthAuthor[0].photo);
        setFifthAuthorId(res.data.fifthAuthor[0].student_id);
        setFifthAuthor(res.data.fifthAuthor[0].full_name);
        setFifthAuthorImg(res.data.fifthAuthor[0].photo);
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
          <div className="sup-date">
            <div className="sup-aut">
              <div className="sup-name">
                <p>Supervisor</p>
                {supervisor && (
                  <a href={`/supervisorReports/${supervisorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + supervisorImg}
                      alt=""
                    />
                    {supervisor}
                  </a>
                )}
              </div>
              <div className="aut-name">
                <p>Authors</p>
                {firstAuthor && (
                  <a href={`/authorReports/${firstAuthorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + firstAuthorImg}
                      alt=""
                    />
                    {firstAuthor}{" "}
                  </a>
                )}
                {secondAuthor && (
                  <a href={`/authorReports/${secondAuthorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + secondAuthorImg}
                      alt=""
                    />
                    {secondAuthor}{" "}
                  </a>
                )}
                {thirdAuthor && (
                  <a href={`/authorReports/${thirdAuthorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + thirdAuthorImg}
                      alt=""
                    />
                    {thirdAuthor}{" "}
                  </a>
                )}
                {fourthAuthor && (
                  <a href={`/authorReports/${fourthAuthorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + fourthAuthorImg}
                      alt=""
                    />
                    {fourthAuthor}{" "}
                  </a>
                )}
                {fifthAuthor && (
                  <a href={`/authorReports/${fifthAuthorId}`}>
                    <img
                      src={`http://localhost:8800/documents/` + fifthAuthorImg}
                      alt=""
                    />
                    {fifthAuthor}
                  </a>
                )}
              </div>
            </div>
            <div className="date">
              <Badge value={moment(defenseDate).format("MMMM Do YYYY")} />
              <div className="info-items">
                <a href={`/categories/${category}`}>
                  <CategoryIcon />
                  {category}
                </a>
              </div>
              <div className="info-items">
                <a href={`/degrees/${degree}`}>
                  <ClassIcon />
                  {degree}
                </a>
              </div>
              <div className="info-items">
                <a href={`/sessions/${session}`}>
                  <TypeSpecimenIcon />
                  {session}
                </a>
              </div>
              <div className="info-items">
                <a href={`/reportTypes/${reportType}`}>
                  <WorkspacePremiumIcon />
                  {reportType.charAt(0).toUpperCase() + reportType.slice(1)}
                </a>
              </div>
            </div>
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
