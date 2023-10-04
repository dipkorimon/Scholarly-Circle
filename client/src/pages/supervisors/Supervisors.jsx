import React from "react";
import "./supervisors.scss";
import Supervisor from "../../components/supervisor/Supervisor";

const Supervisors = () => {
  return (
    <div className="supervisors">
      <div className="faculty">
        <h3>
          Faculty members (Supervisors) of the Department of Computer Science
          and Telecommunication Engineering
        </h3>
      </div>
      <div className="items">
        <Supervisor />
      </div>
    </div>
  );
};

export default Supervisors;
