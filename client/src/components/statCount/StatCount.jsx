import React from "react";
import "./statCount.scss";

const StatCount = () => {
  return (
    <div className="stat-count">
      <div className="count">
        <div className="first">
          <h2>104k</h2>
        </div>
        <div className="second">
          <p>Supervisors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>104k</h2>
        </div>
        <div className="second">
          <p>Authors</p>
        </div>
      </div>
      <div className="count">
        <div className="first">
          <h2>104k</h2>
        </div>
        <div className="second">
          <p>Reports</p>
        </div>
      </div>
    </div>
  );
};

export default StatCount;
