import React from "react";
import "./report.scss";
import Badge from "../badge/Badge";

const Report = (props) => {
  return (
    <div className="report-page" key={props.id}>
      <div className="report-list">
        <div className="report-data">
          <h3>{props.title}</h3>
          <p>
            {props.abstract.length > 300
              ? `${props.abstract.substring(0, 300)} . . .`
              : props.abstract}
          </p>
        </div>
        <div className="buttons">
          <a href={`/singleReport/${props.id}`}>
            <button>Read full-text</button>
          </a>
          <p>{props.defense_date}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Report;
