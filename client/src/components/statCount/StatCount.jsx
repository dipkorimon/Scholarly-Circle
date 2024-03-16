import React, { useEffect, useState } from "react";
import "./statCount.scss";

const StatCount = () => {
  const [tableCounts, setTableCounts] = useState({});
  const [topSupervisors, setTopSupervisors] = useState([]);
  const [topAuthors, setTopAuthors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/home")
      .then((res) => res.json())
      .then((data) => setTableCounts(data.counts))
      .then((data) => setTopSupervisors(data.supervisorList))
      .then((data) => setTopAuthors(data.authorList))
      .catch((err) => console.log(err));
  });

  return (
    <div className="stat-count">
      <div className="stat">
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
      <div className="contributor">
        {topSupervisors.map((user, index) => (
          <p>{user.supervisor_id}</p>
        ))}
      </div>
    </div>
  );
};

export default StatCount;
