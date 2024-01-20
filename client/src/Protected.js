import React from "react";

const Protected = ({ children }) => {
  const ChairmanLogin = localStorage.getItem("ChairmanLogin");
  if (ChairmanLogin) {
    return children;
  }
};

export default Protected;
