import React, { useEffect, useState } from "react";
import "./statCount.scss";

const StatCount = () => {
  const [totalSupervisor, setTotalSupervisor] = useState(0);
  const [totalAuthor, setTotalAuthor] = useState(0);
  const [totalReport, setTotalReport] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8800/home")
      .then((res) => res.json())
      .then((data) => {
        setTotalSupervisor(data[0].totalSupervisor);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="stat-count">
      <div className="count">
        <div className="first">
          <h2>{totalSupervisor}</h2>
        </div>
        <div className="second">
          <p>Supervisors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>{totalAuthor}</h2>
        </div>
        <div className="second">
          <p>Authors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>{totalReport}</h2>
        </div>
        <div className="second">
          <p>Reports</p>
        </div>
      </div>
    </div>
  );
};

export default StatCount;
