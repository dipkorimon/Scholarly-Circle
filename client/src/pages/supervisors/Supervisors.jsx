import React, { useEffect, useState } from "react";
import "./supervisors.scss";
import Supervisor from "../../components/supervisor/Supervisor";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";

const Supervisors = () => {
  const [supervisor, setSupervisor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/supervisors")
      .then((res) => setSupervisor(res.data))
      .catch((err) => console.log(err));
  });

  const [uniquePositions, setUniquePositions] = useState([]);

  useEffect(() => {
    const uniquePositionsSet = new Set(
      supervisor.map((item) => item.current_position)
    );
    const uniquePositionsArray = Array.from(uniquePositionsSet);
    setUniquePositions(uniquePositionsArray);
  }, [supervisor]);

  return (
    <div className="supervisors">
      <div className="sup-items">
        <div className="filter">
          <h3>Categories</h3>
          {uniquePositions.map((current_position) => (
            <div className="category-list">
              <a href={`/currentPositions/${current_position}`}>
                <CategoryList category={current_position} />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          <Supervisor />
        </div>
      </div>
    </div>
  );
};

export default Supervisors;
