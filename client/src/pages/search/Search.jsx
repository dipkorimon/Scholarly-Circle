import React, { useState } from "react";
import "./search.scss";
import axios from "axios";
import Report from "../../components/report/Report";
import moment from "moment";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8800/search?term=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-page">
      <div className="header">
        <p>Search with proper keyword of a report that you need</p>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="desc">
        <p className="show-result">
          You are showing results for <span>'</span>
          {searchTerm} <span>'</span>
        </p>
        {searchResults.length == 0 ? (
          <div className="wrong">
            <p className="wrong-msg">
              No reports were found. Please try again.
            </p>
          </div>
        ) : (
          <div className="report-info">
            {searchResults.map((item) => (
              <Report
                id={item.id}
                title={item.title}
                report_type={item.report_type}
                abstract={item.abstract}
                category={item.category}
                degree={item.degree}
                defense_date={moment(item.defense_date).format("MMMM Do YYYY")}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
