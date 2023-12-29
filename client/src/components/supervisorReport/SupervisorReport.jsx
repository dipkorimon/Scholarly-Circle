import React, { useEffect, useState } from "react";
import "./supervisorReport.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report from "../report/Report";
import moment from "moment";

const SupervisorReport = () => {
  const { supervisorID } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/supervisorReports/" + supervisorID)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="supervisor-report">
      <h3 className="cat">All reports under the supervision of</h3>
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
              publication={item.publication}
              degree={item.degree}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupervisorReport;
