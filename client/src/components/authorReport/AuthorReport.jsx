import React, { useEffect, useState } from "react";
import "./authorReport.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report from "../report/Report";
import moment from "moment";

const AuthorReport = () => {
  const { studentID } = useParams();

  const [fullName, setFullName] = useState("");
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/authorReports/" + studentID)
      .then((res) => {
        setFullName(res.data.objectData);
        setReport(res.data.data1);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="author-report">
      <h3 className="supervision">All reports authored by {fullName}</h3>
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

export default AuthorReport;
