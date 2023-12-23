import React, { useEffect, useState } from "react";
import "./degree.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Report from "../../components/report/Report";

const Degree = () => {
  const { degree } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/degrees/" + degree)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="degree">
      <h3 className="cat">All reports related to {degree}</h3>
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

export default Degree;
