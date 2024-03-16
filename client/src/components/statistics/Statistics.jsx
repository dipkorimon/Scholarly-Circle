import React from "react";
import "./statistics.scss";
import statistics from "/statistics.svg";
import StatCount from "../statCount/StatCount";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="left">
        <div className="top">
          <h1>Statistics of Scholarly Circle</h1>
          <div className="info">
            <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
            <p>
              The platform maintains statistics on various metrics such as the
              total number of Supervisors, Authors, and Reports added. These
              statistics provide insights into the usage and growth of the
              platform over time, which can be valuable for administrators and
              stakeholders in assessing its impact and effectiveness.
            </p>
          </div>
        </div>
        <div className="bottom">
          <StatCount />
        </div>
      </div>
      <div className="right">
        <img src={statistics} alt="" />
      </div>
    </div>
  );
};

export default Statistics;
