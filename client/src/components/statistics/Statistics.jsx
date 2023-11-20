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
              Statistics of Scholarly Circle is a study of data: describing
              total number of Supervisors, Authors and Reports are added.
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
