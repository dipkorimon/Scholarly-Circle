import React, { useState } from "react";
import "./institutes.scss";

const Institues = () => {
  const [institutes] = useState([
    {
      name: "Institute of Information Sciences (IIS)",
    },
    {
      name: "Institute of Information Technology (IIT)",
    },
  ]);

  return (
    <div className="institutes">
      <p>Institutes</p>
      <div className="institutes-list">
        {institutes.map((item, index) => (
          <a href="">
            {item.name}
            <br />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Institues;
