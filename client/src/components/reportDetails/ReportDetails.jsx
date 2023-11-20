import React from "react";
import "./reportDetails.scss";

const ReportDetails = (props) => {
  return (
    <div className="reportDetails">
      <p>{props.value}</p>
    </div>
  );
};

export default ReportDetails;
