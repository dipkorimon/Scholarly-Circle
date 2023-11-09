import React, { useEffect, useState } from "react";
import "./singleReport.scss";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";
import moment from "moment";

const SingleReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/reports/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const chairmanLogin = localStorage.getItem("ChairmanLogin");
  const supervisorLogin = localStorage.getItem("SupervisorLogin");

  return (
    <div className="single-report">
      {report.map((item) => (
        <div className="post-item" key={item.id}>
          <div className="info">
            <div className="title">
              <h3>{item.title}</h3>
            </div>
          </div>
          <div className="post-details">
            <div className="category">
              <p>{item.session}</p>
              <p>{item.category}</p>
              <p>{item.report_type}</p>
            </div>
            <div className="abstract">
              <p>{item.abstract}</p>
            </div>
            <div className="supervisor-name">
              <SupervisorAccountIcon />
              <p>{item.supervisor_name} (Supervisor)</p>
            </div>
            <div className="authors-name">
              <PersonIcon />
              <p>{item.authors_name}</p>
            </div>
            <div className="date">
              <DateRangeIcon />
              <p>{moment(item.published_date).format("MMMM Do YYYY")}</p>
            </div>
          </div>
          <div className="document">
            <embed
              src={`http://localhost:8800/documents/` + item.document}
              type=""
            />
          </div>
          <div className="buttons">
            {chairmanLogin || supervisorLogin ? (
              <div className="update-delete">
                <a href={`/updateReport/${item.id}`}>
                  <button className="update">Update</button>
                </a>
                <button
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleReport;
