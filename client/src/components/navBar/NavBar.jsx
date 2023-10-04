import React, { useEffect, useState } from "react";
import "./navBar.scss";
import axios from "axios";
import Profile from "/profile.png";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";

const NavBar = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8800")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.full_name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:8800/logout")
      .then((res) => {
        location.reload(true);
        localStorage.removeItem("login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navBar">
      <div className="left">
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>
        <a href="/">ScholarlyCircle</a>
      </div>
      <div className="links">
        <div className="middle">
          <a href="/">Home</a>
          <a href="/supervisors">Supervisors</a>
          <a href="/authors">Authors</a>
          <a href="/reports">Reports</a>
        </div>
        <div className="right">
          {auth ? (
            <div className="profile">
              <img src={Profile} alt="" />
              <button className="name">{name}</button>
              <div id="drop-down">
                <a href="/addSupervisor">
                  <SupervisorAccountIcon />
                  Add Supervisor
                </a>
                <a href="/addAuthor">
                  <PersonIcon />
                  Add Author
                </a>
                <a href="/addReport">
                  <ArticleIcon />
                  Add Report
                </a>
                <button onClick={handleLogout} className="icon">
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="in-up">
              <a href="/register" className="regi">
                Sign up
              </a>
              <a href="/login" className="logi">
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
