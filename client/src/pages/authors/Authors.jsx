import React, { useEffect, useState } from "react";
import "./authors.scss";
import Author from "../../components/author/Author";
import axios from "axios";
import CategoryList from "../../components/categoryList/CategoryList";

const Authors = () => {
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
    <div className="authors">
      <div className="aut-items">
        <div className="filter">
          <h3 className="sess">Sessions</h3>
          {uniqueSessions.map((session) => (
            <div className="category-list">
              <a href={`/authorSessions/${session}`}>
                <CategoryList category={session} />
              </a>
            </div>
          ))}
        </div>
        <div className="items">
          <Author />
        </div>
      </div>
    </div>
  );
};

export default Authors;
