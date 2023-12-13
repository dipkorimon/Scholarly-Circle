import React, { useEffect, useState } from "react";
import "./statCount.scss";

const StatCount = () => {
  const [tableCounts, setTableCounts] = useState({});

  useEffect(() => {
    fetch("http://localhost:8800/home")
      .then((res) => res.json())
      .then((data) => setTableCounts(data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="stat-count">
      <div className="count">
        <div className="first">
          <h2>{tableCounts.table1}</h2>
        </div>
        <div className="second">
          <p>Supervisors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>{tableCounts.table2}</h2>
        </div>
        <div className="second">
          <p>Authors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>{tableCounts.table3}</h2>
        </div>
        <div className="second">
          <p>Reports</p>
        </div>
      </div>
    </div>
  );
};

export default StatCount;
