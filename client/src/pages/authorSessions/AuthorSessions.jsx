import React, { useEffect, useState } from "react";
import "./authorSessions.scss";
import AuthorSession from "../../components/authorSession/AuthorSession";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";
import ClassIcon from "@mui/icons-material/Class";

const AuthorSessions = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/authors")
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log(err));
  });

  const [uniqueSessions, setUniqueSessions] = useState([]);

  useEffect(() => {
    const uniqueSessionsSet = new Set(author.map((item) => item.session));
    const uniqueSessionsArray = Array.from(uniqueSessionsSet);
    setUniqueSessions(uniqueSessionsArray);
  }, [author]);

  return (
    <div className="author-sessions">
      <div className="aut-items">
        <div className="filter">
          <h3 className="sess">
            <ClassIcon />
            Sessions
          </h3>
          {uniqueSessions.map((session) => (
            <div className="category-list">
              <a href={`/authorSessions/${session}`}>
                <CategoryList category={session} />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          <AuthorSession />
        </div>
      </div>
    </div>
  );
};

export default AuthorSessions;
