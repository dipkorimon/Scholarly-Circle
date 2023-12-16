import React, { useEffect, useState } from "react";
import "./reports.scss";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";
import Report from "../../components/report/Report";
import moment from "moment";

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
          <h3 style={{ marginTop: 20 }}>Sessions</h3>
          {report.map((item, i) => (
            <div className="category-list" key={item.id}>
              <a href={`/sessions/${item.session}`}>
                <CategoryList category={item.session} />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          {report.map((item, i) => (
            <Report
              id={item.id}
              title={item.title}
              report_type={item.report_type}
              abstract={item.abstract}
              category={item.category}
              defense_date={moment(item.defense_date).format("MMMM Do YYYY")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
