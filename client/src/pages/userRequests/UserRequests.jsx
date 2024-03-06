import React, { useEffect, useState } from "react";
import "./userRequests.scss";
import axios from "axios";

const UserRequests = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/userRequests")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  });

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8800/approve-request/${id}`);
      alert("Request approved successfully.");
      location.reload();
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Error approving request. Please try again.");
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8800/reject-request/${id}`);
      alert("Request rejected successfully.");
      location.reload();
    } catch (error) {
      console.error("Error rejecting request:", error);
      alert("Error rejecting request. Please try again.");
    }
  };

  return (
    <div className="user-requests">
      <table>
        <thead>
          <tr className="head">
            <th>id</th>
            <th>Photo</th>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Session</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((request) => (
            <tr className="data" key={request.id}>
              <td>{request.id}</td>
              <td>
                <img
                  src={`http://localhost:8800/documents/` + request.photo}
                  alt=""
                />{" "}
              </td>
              <td>{request.student_id}</td>
              <td>{request.full_name}</td>
              <td>{request.email}</td>
              <td>{request.session}</td>
              <td className="status">
                <p>
                  {request.status.charAt(0).toUpperCase() +
                    request.status.slice(1)}
                </p>
              </td>
              <td>
                {request.status === "pending" && (
                  <div className="btn">
                    <button
                      onClick={() => handleApprove(request.id)}
                      className="approve"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(request.id)}
                      className="reject"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserRequests;
