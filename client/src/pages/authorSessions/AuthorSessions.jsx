import React from "react";
import "./authorSessions.scss";
import AuthorSession from "../../components/authorSession/AuthorSession";

const AuthorSessions = () => {
  return (
    <div className="author-sessions">
      <div className="items">
        <AuthorSession />
      </div>
    </div>
  );
};

export default AuthorSessions;
