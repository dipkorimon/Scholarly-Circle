import React from "react";
import "./badge.scss";

const Badge = (props) => {
  return (
    <div className="badge">
      <span>{props.value}</span>
    </div>
  );
};

export default Badge;
