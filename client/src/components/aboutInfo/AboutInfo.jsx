import React from "react";
import "./aboutInfo.scss";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const AboutInfo = (props) => {
  return (
    <div className="about-info">
      <div className="icon">
        <BlurOnIcon style={{ color: "rgb(229, 18, 46)" }} />
        <h3>{props.title}</h3>
      </div>
      <p>{props.desc}</p>
    </div>
  );
};

export default AboutInfo;
