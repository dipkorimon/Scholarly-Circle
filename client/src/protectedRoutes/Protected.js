import React from "react";

const Protected = ({ login, url, children }) => {
  if (login) return children;
  else return url;
};

export default Protected;
