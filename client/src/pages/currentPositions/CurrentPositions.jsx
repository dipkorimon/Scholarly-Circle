import React, { useEffect, useState } from "react";
import "./currentPositions.scss";
import CurrentPosition from "../../components/currentPosition/CurrentPosition";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";
import PersonIcon from "@mui/icons-material/Person";

const CurrentPositions = () => {
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
    <div className="current-positions">
      <div className="super-items">
        <div className="filter-pos">
          <h3 className="cupos">
            <PersonIcon />
            Current Positions
          </h3>
          {uniquePositions.map((current_position) => (
            <div className="category-list">
              <a href={`/currentPositions/${current_position}`}>
                <CategoryList category={current_position} />
              </a>
            </div>
          ))}
        </div>
        <div className="items-pos">
          <CurrentPosition />
        </div>
      </div>
    </div>
  );
};

export default CurrentPositions;
