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
import Accordion from "../../components/accordion/Accordion";
import CategoryList from "../../components/categoryList/CategoryList";

const Reports = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="reports">
      <div className="all-items">
        <div className="filter">
          <h3>Categories</h3>
          {report.map((item, i) => (
            <div className="category-list" key={item.id}>
              <a href={`/categories/${item.category}`}>
                <CategoryList category={item.category} />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          <div className="post">
            {report.map((item, i) => (
              <div className="post-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <h3>{item.title}</h3>
                    <span>
                      {item.report_type.charAt(0).toUpperCase() +
                        item.report_type.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="post-details">
                  <div className="abstract">
                    <Accordion abstract={item.abstract} i={i} />
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
                    {item.report_type == "thesis" ? (
                      <div>
                        <a href={item.publication}>Publication link</a>
                      </div>
                    ) : (
                      <div>
                        <a href={item.publication}>Live Demo link</a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="buttons">
                  <a href={`/singleReport/${item.id}`}>
                    <button>Read full-text</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
