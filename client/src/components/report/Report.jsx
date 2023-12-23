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
            {props.abstract.length > 250
              ? `${props.abstract.substring(0, 250)} . . .`
              : props.abstract}
          </p>
          <div className="badge">
            <Badge
              value={
                props.report_type.charAt(0).toUpperCase() +
                props.report_type.slice(1)
              }
            />
            <Badge value={props.category} />
            <Badge value={props.degree} />
          </div>
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
