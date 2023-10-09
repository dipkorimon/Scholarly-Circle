import React, { useEffect, useState } from "react";
import "./reports.scss";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import axios from "axios";

const Reports = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/reports/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const chairmanLogin = localStorage.getItem("ChairmanLogin");
  const supervisorLogin = localStorage.getItem("SupervisorLogin");

  return (
    <div className="reports">
      <div className="search">
        <div className="search-text">
          <SearchIcon style={{ color: "rgb(229, 18, 46)", fontSize: "25" }} />
          <h3>Search with Session, Category and Author</h3>
        </div>
        <div className="search-box">
          <form action="">
            <input type="text" placeholder="Ex: Session, Category, Author" />
          </form>
        </div>
      </div>
      <div className="items">
        <div className="post">
          {report.map((item) => (
            <div className="post-item" key={item.id}>
              <div className="info">
                <div className="img">
                  <img src="" alt="" />
                </div>
                <div className="sup">
                  <h5>{item.supervisor_name}</h5>
                  <p>Supervisor</p>
                </div>
              </div>
              <div className="post-details">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="category">
                  <p>{item.session}</p>
                  <p>{item.category}</p>
                  <p>{item.report_type}</p>
                </div>
                <div className="abstract">
                  <p>{item.abstract}</p>
                </div>
                <div className="authors-name">
                  <PersonIcon />
                  <p>{item.authors_name}</p>
                </div>
                <div className="date">
                  <DateRangeIcon />
                  <p>{item.date}</p>
                </div>
              </div>
              <div className="buttons">
                <button>Download full-text</button>
                <button>Download Presentation</button>
                {chairmanLogin || supervisorLogin ? (
                  <div>
                    <a
                      href={`/updateReport/${item.id}`}
                      style={{
                        background: "none",
                        padding: "0",
                      }}
                    >
                      <EditIcon
                        style={{
                          fontSize: "25",
                          color: "rgb(42, 52, 71)",
                        }}
                      />
                    </a>
                    <button
                      style={{ background: "none", padding: "0" }}
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteIcon
                        style={{
                          fontSize: "25",
                          color: "rgb(229, 18, 46)",
                        }}
                      />
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
