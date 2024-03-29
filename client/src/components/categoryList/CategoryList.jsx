import React from "react";
import "./categoryList.scss";

const categoryList = (props) => {
  return (
    <div className="category-list">
      <div className="list-items">
        <button>
          {props.category.length > 28
            ? `${props.category.substring(0, 28)} . . .`
            : props.category}
        </button>
      </div>
    </div>
  );
};

export default categoryList;
