import React, { useEffect, useState } from "react";
import "./category.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Report from "../report/Report";

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
      <h3>All reports related to {category} category</h3>
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
              published_date={item.published_date}
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

export default Category;
