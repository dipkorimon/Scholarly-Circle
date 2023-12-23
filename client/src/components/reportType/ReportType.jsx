import React, { useEffect, useState } from "react";
import "./reportType.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report from "../../components/report/Report";
import moment from "moment";

const ReportType = () => {
  const { reportType } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reportTypes/" + reportType)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="report-type">
      <h3 className="cat">
        All reports related to{" "}
        {reportType.charAt(0).toUpperCase() + reportType.slice(1)}
      </h3>
      <div className="items">
        <div className="post">
          {report.map((item, i) => (
            <Report
              id={item.id}
              title={item.title}
              report_type={item.report_type}
              abstract={item.abstract}
              defense_date={moment(item.defense_date).format("MMMM Do YYYY")}
              session={item.session}
              category={item.category}
              degree={item.degree}
              publication={item.publication}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportType;
