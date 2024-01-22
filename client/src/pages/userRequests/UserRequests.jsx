import React, { useEffect, useState } from "react";
import "./userRequests.scss";
import axios from "axios";

const UserRequests = () => {
  const [supervisor, setSupervisor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/userRequests")
      .then((res) => setSupervisor(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="user-requests">
      {supervisor.map((item, i) => (
        <div></div>
      ))}
    </div>
  );
};

export default UserRequests;
