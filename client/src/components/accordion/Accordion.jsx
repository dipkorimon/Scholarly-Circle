import React, { useState } from "react";
import "./accordion.scss";

const Accordion = (props) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      <div className="item">
        <div className="title" onClick={() => toggle(props.i)}>
          <h3>{selected == props.i ? "Hide abstract" : "View abstract"}</h3>
          <span>{selected == props.i ? "-" : "+"}</span>
        </div>
        <div className={selected == props.i ? "content-show" : "content"}>
          <p>{props.abstract}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
