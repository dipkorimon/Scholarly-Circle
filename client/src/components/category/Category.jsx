import React, { useEffect, useState } from "react";
import "./category.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AdjustIcon from "@mui/icons-material/Adjust";
import CategoryIcon from "@mui/icons-material/Category";
import LinkIcon from "@mui/icons-material/Link";
import moment from "moment";
import Badge from "../badge/Badge";
import ReportDetails from "../reportDetails/ReportDetails";
import Accordion from "../accordion/Accordion";

const Category = () => {
  const { category } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/categories/" + category)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="category">
      <h3>All reports related to {category}</h3>
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
                <div>
                  <a href={`/singleReport/${item.id}`}>
                    <button>Read full-text</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
