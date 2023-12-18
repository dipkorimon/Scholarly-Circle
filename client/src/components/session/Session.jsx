import React, { useEffect, useState } from "react";
import "./session.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report from "../../components/report/Report";
import moment from "moment";

const Session = () => {
  const { session } = useParams();

  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/sessions/" + session)
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="session">
      <h3 className="cat">All reports related to {session} session</h3>
      <div className="items">
        <div className="post">
          {report.map((item, i) => (
            <Report
              id={item.id}
              title={item.title}
              report_type={item.report_type}
              abstract={item.abstract}
              supervisor_name={item.supervisor_name}
              authors_name={item.authors_name}
              defense_date={moment(item.defense_date).format("MMMM Do YYYY")}
              session={item.session}
              category={item.category}
              publication={item.publication}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Session;
