import React, { useEffect, useState } from "react";
import "./reports.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AdjustIcon from "@mui/icons-material/Adjust";
import CategoryIcon from "@mui/icons-material/Category";
import LinkIcon from "@mui/icons-material/Link";
import axios from "axios";
import moment from "moment";
import Badge from "../../components/badge/Badge";
import ReportDetails from "../../components/reportDetails/ReportDetails";

const Reports = () => {
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

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="reports">
      <div className="search">
        <div className="search-text">
          <SearchIcon style={{ color: "rgb(229, 18, 46)", fontSize: "25" }} />
          <h3>Search with Session, Category and Author</h3>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Ex: Session, Category, Author" />
        </div>
      </div>
      <div className="items">
        <div className="post">
          {report.map((item, i) => (
            <div className="post-item" key={item.id}>
              <div className="info">
                <div className="title">
                  <h3>{item.title}</h3>
                  <span>{item.report_type}</span>
                </div>
              </div>
              <div className="post-details">
                <div className="abstract">
                  <div className="accordion">
                    <div className="item">
                      <div className="title" onClick={() => toggle(i)}>
                        <h3>
                          {selected == i ? "Hide abstract" : "View abstract"}
                        </h3>
                        <span>{selected == i ? "-" : "+"}</span>
                      </div>
                      <div
                        className={selected == i ? "content-show" : "content"}
                      >
                        <p>{item.abstract}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="report-details">
                  <SupervisorAccountIcon />
                  <ReportDetails value={item.supervisor_name} />
                  <Badge value="Supervisor" />
                </div>
                <div className="report-details">
                  <PersonIcon />
                  <ReportDetails value={item.authors_name} />
                  <Badge value="Authors" />
                </div>
                <div className="report-details">
                  <DateRangeIcon />
                  <ReportDetails
                    value={moment(item.published_date).format("MMMM Do YYYY")}
                  />
                  <Badge value="Defense date" />
                </div>
                <div className="report-details">
                  <AdjustIcon />
                  <ReportDetails value={item.session} />
                  <Badge value="Session" />
                </div>
                <div className="report-details">
                  <CategoryIcon />
                  <ReportDetails value={item.category} />
                  <Badge value="Category" />
                </div>
                <div className="publication">
                  <LinkIcon />
                  <a href={item.publication}>Publication link</a>
                </div>
              </div>
              <div className="buttons">
                <a href={`/singleReport/${item.id}`}>
                  <button>Read full-text</button>
                </a>
                {chairmanLogin || supervisorLogin ? (
                  <div>
                    <a href={`/updateReport/${item.id}`}>
                      <button>Update details</button>
                    </a>
                    <button onClick={() => handleDelete(item.id)}>
                      Remove Report
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

export default Reports;
